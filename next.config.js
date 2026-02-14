/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

// ─── ドメイン移行時はここだけ変更 ───
const SITE_DOMAIN = 'res610.github.io';
const SITE_BASE_PATH = '/01-eyebrow-okinawa';
// 独自ドメイン例:
//   const SITE_DOMAIN = '01-oone.com';
//   const SITE_BASE_PATH = '';
// ────────────────────────────────────

const basePath = isDev ? '' : SITE_BASE_PATH;
const siteUrl = isDev
    ? 'http://localhost:3000'
    : `https://${SITE_DOMAIN}${SITE_BASE_PATH}`;

// ビルド時に manifest.webmanifest を自動生成
fs.writeFileSync(
    path.join(__dirname, 'public', 'manifest.webmanifest'),
    JSON.stringify({
        name: '01（O-ONE）メンズ眉毛サロン',
        short_name: '01 O-ONE',
        description: '沖縄県那覇市おもろまちのメンズ専門眉毛ワックスサロン',
        start_url: `${basePath}/`,
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0b2fb2',
        icons: [
            {
                src: `${basePath}/android-chrome-192x192.png`,
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: `${basePath}/android-chrome-512x512.png`,
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }, null, 4)
);

const nextConfig = {
    output: 'export',
    basePath,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
        NEXT_PUBLIC_SITE_URL: siteUrl,
    },
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
}

module.exports = nextConfig
