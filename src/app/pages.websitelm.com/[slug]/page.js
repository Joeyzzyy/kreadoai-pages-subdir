import { getArticleBySlug } from '../../../../lib/api';
import { notFound } from 'next/navigation';
import LayoutKreadoai from '../../../../components/kreado/layout_new';
import { KreadoHeader } from '../../../../components/kreado/header_new';
import { KreadoFooter } from '../../../../components/kreado/footer_new';
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import config from '../../../config/config';

// 添加这个配置来启用动态路由
export const dynamic = 'force-dynamic'

// 如果需要的话，也可以添加这个配置来处理不同的域名
export const dynamicParams = true

// 创建一个布局映射对象来简化重复代码
const KREADO_LAYOUT = {
  Header: KreadoHeader,
  Layout: LayoutKreadoai,
  Footer: KreadoFooter
};

// 添加一个新的常量映射来存储不同作者的元数据配置
const KREADO_METADATA = {
  title: 'KreadoAI',
  icon: '/icons/kreado-logo.ico',
  defaultDescription: 'AI Creation Generates Multilingual Videos'
};

// 主页面组件
export default async function ArticlePage({ params }) {
  const { slug } = params;
  const articleData = await getArticleBySlug(slug, config.token);

  if (!articleData?.data?.[0]) {
    notFound();
  }

  const article = articleData.data[0];
  const headersList = headers();
  const host = headersList.get('host');
  
  // 本地开发环境检查
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    const layout = KREADO_LAYOUT;
    const { Header, Layout, Footer } = layout;
    
    return (
      <>
        <Header />
        {/* 后续记得传入keywords */}
        <Layout article={article} />
        <Footer />
      </>
    );
  }

  // 简化生产环境验证
  const mainDomain = getMainDomain(host);
  if (article.author !== 'KREADO' || !config.domains.includes(mainDomain)) {
    redirect('/unauthorized');
  }

  const layout = KREADO_LAYOUT;
  const { Header, Layout, Footer } = layout;

  return (
    <>
      <Header />
      <Layout article={article} />
      <Footer />
    </>
  );
}

// 从host中提取主域名
function getMainDomain(host) {
  const parts = host.split('.');
  // 兼容主域名和子域名
  return parts.length > 2 ? parts.slice(-3).join('.') : parts.slice(-2).join('.');
}

// 修改 generateMetadata 函数
export async function generateMetadata({ params }) {
  try {
    const { slug } = params;
    const articleData = await getArticleBySlug(slug, config.token);
    
    if (!articleData?.data?.[0]) {
      return {
        title: 'No Article Found',
        keywords: 'nokeywords',
        robots: 'noindex, nofollow'
      };
    }

    const article = articleData.data[0];
    
    const authorConfig = KREADO_METADATA;

    return {
      title: `${authorConfig.title}` + ' - ' + `${article.title}`,
      description: article.description || authorConfig.defaultDescription,
      keywords: `${article.keywords || '默认关键字'}`,
      robots: 'index, follow',
      icons: {
        icon: authorConfig.icon,
        shortcut: authorConfig.icon,
        apple: authorConfig.icon,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error Loading Article',
      description: '',
      keywords: '错误, 加载文章',
      robots: 'noindex, nofollow'
    };
  }
}