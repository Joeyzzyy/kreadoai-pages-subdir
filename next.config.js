/** @type {import('next').NextConfig} */

const DOMAIN = process.env.DOMAIN;

const isLocal = process.env.NODE_ENV === 'development';

const nextConfig = {
  images: {
    domains: isLocal ? [] : [DOMAIN],
    unoptimized: true,
  },
  async redirects() {
    if (isLocal) {
      return [];
    }
    return [
      {
        source: '/:path*',
        destination: `https://${DOMAIN}/:path*`,
        permanent: false
      }
    ];
  },
};

module.exports = nextConfig;