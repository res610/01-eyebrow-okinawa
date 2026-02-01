/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/01-eyebrow-okinawa',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
