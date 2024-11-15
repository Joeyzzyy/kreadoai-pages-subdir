"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Layout, Menu, Typography, Button, Avatar, Popover, Spin, List, Card, message } from 'antd';
import { FileTextOutlined, LogoutOutlined, ReloadOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { isAuthenticated, logout, getCustomers, getArticles, getDomains, getBatchHistoryData } from '../lib/api';
import Image from 'next/image';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

// 侧边栏用户信息组件
const UserInfo = ({ currentCustomer, popoverOpen, customerMenu, onPopoverChange }) => (
  <div style={{ 
    padding: '24px 16px',
    textAlign: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    background: '#001529',  // 保持原来的深色背景
    color: 'white'
  }}>
    <Popover
      content={customerMenu}
      trigger="click"
      placement="bottomLeft"
      title={<span style={{ fontWeight: 500 }}>Switch Customer</span>}
      open={popoverOpen}
      onOpenChange={onPopoverChange}
    >
      <Avatar 
        style={{ 
          backgroundColor: '#4F46E5',  // 更新为蓝紫色
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(79, 70, 229, 0.35)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          marginBottom: '12px',  // 添加底部间距
          ':focus': {
            outline: '2px solid #fff',
            outlineOffset: '2px'
          }
        }} 
        size={64}  // 增大头像尺寸
        tabIndex={0}
      >
        {currentCustomer?.userName.charAt(0)}
      </Avatar>
    </Popover>
    <br />  {/* 换行 */}
    <Typography.Text style={{ 
      fontSize: '15px',
      color: 'white',
      opacity: 1
    }}>
      {currentCustomer?.userName}
    </Typography.Text>
  </div>
);

// 文章表组件优化
const BatchList = ({ batches }) => {
  const filteredBatches = batches.filter(batch => 
    batch.articles.some(article => article.publishStatus === 'publish')
  );

  if (filteredBatches.length === 0) return null;  // 如果没有已发布文章的批次，则不渲染任何内容

  return (
    <List
      dataSource={filteredBatches}
      renderItem={batch => (
        <List.Item style={{ padding: '8px 0' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <span>
                <span style={{ fontSize: '16px', fontWeight: 600 }}>{batch.batchName}</span>
                <span style={{ color: '#8c8c8c', marginLeft: '8px', fontSize: '12px' }}>Batch Id:{batch.batchId}</span>
              </span>
              <span style={{ color: '#8c8c8c', fontSize: '12px' }}>
                {new Date(batch.createdAt).toLocaleString()}
              </span>
            </div>
            <div style={{ marginTop: '4px', color: '#595959', fontSize: '12px' }}>
              Articles:
              <List
                dataSource={batch.articles.filter(article => article.publishStatus === 'publish')}
                renderItem={article => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Link 
                      href={`/articles/${article.pageId}`} 
                      className="article-title"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        fontSize: '14px', 
                        fontWeight: '600',
                        color: '#1890ff',
                        display: 'block',
                        marginBottom: '2px',
                        lineHeight: '1.2'
                      }}
                    >
                      {article.title} 
                    </Link>
                  </List.Item>
                )}
              />
            </div>
          </div>
        </List.Item>
      )}
    />
  );
};

// 主页面组件
export default function Home() {
  const [pageState, setPageState] = useState({
    isClient: false,
    isAuth: false,
    activeMenu: 'publishedPages',
    popoverOpen: false
  });

  const [dataState, setDataState] = useState({
    customers: [],
    currentCustomer: null,
    batches: [],
    articles: [],
    domains: [],
    isLoading: false,
    error: null
  });

  const router = useRouter();

  // 数据获取函数
  const fetchData = useCallback(async () => {
    if (!dataState.currentCustomer) return;
    
    setDataState(prev => ({ ...prev, isLoading: true }));
    try {
      // 首先获取批次和域名数据
      const [batchData, domainData] = await Promise.all([
        getBatchHistoryData(dataState.currentCustomer.customerId, 1, 10),
        getDomains(dataState.currentCustomer.customerId, 1, 10)
      ]);
      
      // 确保批次数据是数组
      const batches = Array.isArray(batchData?.data) ? batchData.data : [];
      
      // 为每个批次取相关文章
      const batchesWithArticles = await Promise.all(
        batches.map(async (batch) => {
          const articles = await getArticles(batch.batchId, 1, 10);
          // 只保留已发布的文章
          const publishedArticles = Array.isArray(articles?.data) 
            ? articles.data.filter(article => article.publishStatus === 'publish')
            : [];
          return {
            ...batch,
            articles: publishedArticles
          };
        })
      );

      console.log('处理后的所有批次（包含文章）:', batchesWithArticles);
      
      setDataState(prev => ({
        ...prev,
        batches: batchesWithArticles,
        domains: Array.isArray(domainData?.data) ? domainData.data : [],
        isLoading: false,
        error: null
      }));
    } catch (err) {
      setDataState(prev => ({
        ...prev,
        isLoading: false,
        error: `Error loading data: ${err.message}`
      }));
    }
  }, [dataState.currentCustomer]);

  // 用户切换处理函数
  const handleCustomerChange = useCallback((customerId) => {
    const selectedCustomer = dataState.customers.find(c => c.customerId === customerId);
    localStorage.setItem('selectedCustomer', JSON.stringify(selectedCustomer));
    setDataState(prev => ({ ...prev, currentCustomer: selectedCustomer }));
    setPageState(prev => ({ ...prev, popoverOpen: false }));
  }, [dataState.customers]);

  // 登出处理函数
  const handleLogout = useCallback(() => {
    logout();
    router.replace('/login');
  }, [router]);

  // 认证检查
  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!isAuthenticated()) {
          router.push('/login');
          return;
        }
        
        const customersList = await getCustomers(); // 假设这是异步调用
        if (customersList && customersList.length > 0) {
          // 尝试从 localStorage 获取上次选择的客户
          const savedCustomer = localStorage.getItem('selectedCustomer');
          const currentCustomer = savedCustomer 
            ? JSON.parse(savedCustomer)
            : customersList[0];
          
          setDataState(prev => ({
            ...prev,
            customers: customersList,
            currentCustomer: currentCustomer
          }));
        }
        setPageState(prev => ({ ...prev, isClient: true, isAuth: true }));
      } catch (error) {
        console.error('Authentication check failed:', error);
        router.push('/login');
      }
    };
    
    checkAuth();
  }, [router]);

  // 数据加载
  useEffect(() => {
    if (dataState.currentCustomer) {
      fetchData();
    }
  }, [dataState.currentCustomer, fetchData]);

  // 错误处理
  useEffect(() => {
    if (dataState.error) {
      message.error(dataState.error);
    }
  }, [dataState.error]);

  const customerMenu = (
    <Menu
      items={dataState.customers.map(customer => ({
        key: customer.customerId,
        label: customer.userName,
        onClick: () => handleCustomerChange(customer.customerId)
      }))}
    />
  );

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Layout style={{ minHeight: '100vh', height: '100vh' }}>
          <Sider 
            width={200} 
            style={{ 
              height: '100vh', 
              position: 'fixed', 
              left: 0,
              background: '#001529'  // 深色背景
            }}
          >
            <UserInfo
              currentCustomer={dataState.currentCustomer}
              popoverOpen={pageState.popoverOpen}
              customerMenu={customerMenu}
              onPopoverChange={(visible) => 
                setPageState(prev => ({ ...prev, popoverOpen: visible }))
              }
            />
            <Menu
              mode="inline"
              defaultSelectedKeys={['publishedPages']}
              style={{ 
                height: 'calc(100% - 100px)', 
                borderRight: 0,
                background: '#001529',  // 深色背景
                color: 'rgba(255, 255, 255, 0.65)'  // 浅色文字
              }}
              theme="dark"  // 使用暗色主题
              onClick={({ key }) => {
                if (key === 'logout') {
                  handleLogout();
                } else {
                  setPageState(prev => ({ ...prev, activeMenu: key }));
                }
              }}
              items={[
                {
                  key: 'publishedPages',
                  icon: <FileTextOutlined />,
                  label: 'Published Pages'
                },
                {
                  key: 'logout',
                  icon: <LogoutOutlined />,
                  label: 'Logout'
                }
              ]}
            />
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ 
              background: '#fff', 
              padding: '0 28px',
              position: 'sticky',
              top: 0,
              zIndex: 2,
              width: '100%',
              boxShadow: '0 1px 20px rgba(0, 0, 0, 0.03)',
              display: 'flex',
              alignItems: 'center',
              height: '70px',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <Image 
                  src="/images/kreado-logo.png" 
                  alt="Kreado Logo" 
                  width={120} 
                  height={40} 
                  loading="lazy"
                  priority={false} // logo在首屏可设为true
                />
                <div className="h-8 w-px bg-gray-200" /> {/* 分隔线 */}
                <Title level={3} style={{ 
                  margin: 0,
                  fontWeight: 600,
                  background: 'linear-gradient(to right, #4F46E5, #2563EB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '24px'
                }}>
                  Published Pages
                </Title>
                <Button 
                  type="primary"
                  icon={<ReloadOutlined />}
                  onClick={fetchData}
                  loading={dataState.isLoading}
                  aria-label="Refresh content"
                  style={{
                    background: 'linear-gradient(to right, #4F46E5, #2563EB)',
                    border: 'none'
                  }}
                >
                  Refresh
                </Button>
              </div>
            </Header>
            <Content style={{ 
              padding: '16px',
              overflow: 'auto',
              height: 'calc(100vh - 64px)',
              background: '#fff'  // 纯白色背景
            }}>
              <div style={{ 
                padding: '20px',
                background: '#fff', 
                borderRadius: '16px',
                boxShadow: '0 2px 20px rgba(0, 0, 0, 0.03)',
                border: '1px solid #f0f0f0',
              }}>
                {dataState.isLoading ? (
                  <Spin tip="Loading..." />
                ) : (
                  <div>
                    {pageState.activeMenu === 'publishedPages' && (
                      <>
                        <div className="flex items-center justify-between">
                          {/* <div>
                            <span style={{ color: '#8c8c8c', fontSize: '14px' }}>
                              Total batches: {dataState.batches.length}
                            </span>
                          </div> */}
                        </div>
                        <BatchList batches={dataState.batches} />
                      </>
                    )}
                  </div>
                )}
              </div>
            </Content>
          </Layout>
        </Layout>
      </main>
    </div>
  );
}
