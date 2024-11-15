"use client";

import { useState, useEffect } from 'react';
import { Form, Input, Button, message, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import { login, isAuthenticated } from '../../lib/api';
import { LoadingOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import Image from 'next/image';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (isAuthenticated()) {
          await router.replace('/');
          return;
        }
      } catch (error) {
        message.error('Authentication check failed');
      } finally {
        setMounted(true);
      }
    };
    
    checkAuth();
  }, [router]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await login(values.username, values.password);
      message.success('Login successful, welcome back!');
      router.push('/');
    } catch (error) {
      message.error(error.message || 'Login failed, please check your credentials');
    } finally {
      setLoading(false);
    }
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

  if (!mounted || loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-white">
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center space-y-4">
          <Image src="/images/kreado-logo.png" alt="Kreado Logo" width={120} height={40} className="mb-4" />
          <Spin indicator={antIcon} />
          <div className="text-gray-600 text-lg font-medium mt-4">
            {loading ? "Signing you in..." : "Loading..."}
          </div>
          <div className="text-gray-400 text-sm">
            {loading ? "Please wait while we verify your credentials" : "Preparing login page"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-xl backdrop-blur-sm bg-white/80">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <Image src="/images/kreado-logo.png" alt="Kreado Logo" width={180} height={60} className="mb-2" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Hosting Platform
            </h1>
            <p className="text-gray-500 mt-2">Sign in to your account</p>
          </div>
        </div>
        
        <Form
          onFinish={onFinish}
          layout="vertical"
          size="large"
          style={{ width: '100%' }}
          className="mt-8"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter your username' }]}
          >
            <Input 
              prefix={<UserOutlined className="text-indigo-400" />}
              placeholder="Username" 
              className="rounded-lg hover:border-indigo-400 focus:border-indigo-500"
              style={{ padding: '0.75rem 1rem' }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password 
              prefix={<LockOutlined className="text-indigo-400" />}
              placeholder="Password" 
              className="rounded-lg hover:border-indigo-400 focus:border-indigo-500"
              style={{ padding: '0.75rem 1rem' }}
            />
          </Form.Item>

          <Form.Item className="mb-2">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}
              block
              className="h-12 text-lg font-medium rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 border-0"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}