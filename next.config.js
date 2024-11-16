/** @type {import('next').NextConfig} */

const DOMAIN = process.env.DOMAIN;

const isLocal = process.env.NODE_ENV === 'development';

const nextConfig = {
  images: {
    domains: isLocal ? [] : [DOMAIN],
    unoptimized: true,
  },
  async rewrites() {
    if (isLocal) {
      // 本地开发环境，禁用 rewrites
      return [];
    }
    return [
      {
        source: '/articles/:slug*',
        destination: `https://${DOMAIN}/articles/:slug*`,
        basePath: false,
      },
    ];
  },
  async redirects() {
    if (isLocal) {
      // 本地开发环境，禁用 redirects
      return [];
    }
    return [
      {
        source: '/:path((?!articles/).*)',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-host',
            value: DOMAIN,
          },
          {
            type: 'query',
            key: 'redirected',
            value: '1',
            negate: true,
          },
        ],
        destination: `https://${DOMAIN}/:path*?redirected=1`,
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
