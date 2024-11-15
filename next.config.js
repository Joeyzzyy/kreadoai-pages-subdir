const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['antd'],
  images: {
    domains: ['zhuyue.tech', 'pages.zhuyue.tech'],
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:slug',
          has: [
            {
              type: 'host',
              value: 'pages.zhuyue.tech',
            },
          ],
          destination: '/articles/:slug',
        },
      ],
    }
  },
  async redirects() {
    return [
      {
        source: '/:slug((?!articles/).+)',
        has: [
          {
            type: 'host',
            value: 'zhuyue.tech',
          },
        ],
        destination: '/articles/:slug',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'zhuyue.tech',
          },
        ],
        destination: '/articles',
        permanent: true,
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // 添加生产环境特定优化
    if (!dev) {
      // 这些优化选项也由 Next.js 自动处理，可以移除
      // config.optimization.concatenateModules = true;
      // config.optimization.aggressiveMerging = true;
    }
    
    // 保留 moment locale 优化
    if (!isServer) {
      config.plugins.push(
        new webpack.ContextReplacementPlugin(
          /moment[/\\]locale$/,
          /zh-cn/
        )
      );
    }

    // 优化模块解析
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    return config;
  },
}

// 使 withBundleAnalyzer 包装配置
module.exports = withBundleAnalyzer(nextConfig);
