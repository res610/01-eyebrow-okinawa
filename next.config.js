/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  output: 'export',
  basePath: isDev ? '' : '/01-eyebrow-okinawa',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
