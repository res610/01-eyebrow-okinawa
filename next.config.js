/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? '' : '/01-eyebrow-okinawa';

const nextConfig = {
    output: 'export',
    basePath,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
}

module.exports = nextConfig
