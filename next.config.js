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
        basePath: false,
        has: [
          {
            type: 'header',
            key: 'x-rewrite',
            missing: true
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
