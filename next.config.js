/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [process.env.DOMAIN],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/articles/:slug*',
        destination: `https://${process.env.DOMAIN}/articles/:slug*`,
        basePath: false
      },
      {
        source: '/:path*',
        destination: `https://${process.env.DOMAIN}/:path*`,
        basePath: false,
        has: [
          {
            type: 'query',
            key: 'path',
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
