const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['antd'],
  images: {
    domains: ['pages.zhuyue.tech', 'zhuyue.tech'],
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
        source: '/:slug((?!articles/).*)',
        has: [
          {
            type: 'host',
            value: 'zhuyue.tech',
          },
        ],
        destination: '/articles/:slug',
        permanent: true,
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // 启用压缩
    config.optimization.minimize = true;
    
    // 添加生产环境特定优化
    if (!dev) {
      config.optimization.concatenateModules = true;
      config.optimization.aggressiveMerging = true;
    }
    
    // 排除不需要的语言包
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

// 使用 withBundleAnalyzer 包装配置
module.exports = withBundleAnalyzer(nextConfig);
