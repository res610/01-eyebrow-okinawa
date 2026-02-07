import type { Metadata } from "next";
import "./globals.css";
import { STORE_LATITUDE, STORE_LONGITUDE } from "@/constants";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const siteUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://res610.github.io/01-eyebrow-okinawa';

export const metadata: Metadata = {
    title: {
        default: "メンズ眉毛サロン 01（O-ONE）| 沖縄・那覇おもろまち",
        template: "%s | 01（O-ONE）沖縄メンズ眉毛サロン",
    },
    description: "沖縄県那覇市おもろまちのメンズ専門眉毛ワックスサロン「01（O-ONE）」。完全個室で眉毛ワックス・眉毛パーマの施術。男性の眉毛を骨格に合わせて美しく整えます。沖縄・那覇で眉毛サロンをお探しの方はぜひ。",
    keywords: [
        "沖縄 眉毛",
        "那覇 眉毛",
        "メンズ眉毛 那覇",
        "メンズ眉毛 沖縄",
        "眉毛ワックス 沖縄",
        "眉毛サロン 沖縄",
        "眉毛サロン 那覇",
        "メンズ眉毛サロン",
        "眉毛パーマ メンズ 沖縄",
        "おもろまち 眉毛",
        "01 O-ONE",
    ],
    authors: [{ name: "01（O-ONE）" }],
    creator: "01（O-ONE）",
    publisher: "01（O-ONE）",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "メンズ眉毛サロン 01（O-ONE）| 沖縄・那覇おもろまち",
        description: "沖縄県那覇市おもろまちのメンズ専門眉毛ワックスサロン。完全個室で眉毛ワックス・眉毛パーマの施術。男性の眉毛を骨格に合わせて美しく整えます。",
        url: siteUrl,
        siteName: "01（O-ONE）メンズ眉毛サロン",
        locale: "ja_JP",
        type: "website",
        images: [
            {
                url: `${siteUrl}/images/mascot.webp`,
                width: 800,
                height: 800,
                alt: "01（O-ONE）メンズ眉毛サロン 沖縄",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "メンズ眉毛サロン 01（O-ONE）| 沖縄・那覇おもろまち",
        description: "沖縄県那覇市おもろまちのメンズ専門眉毛ワックスサロン。完全個室で眉毛ワックス・眉毛パーマの施術。",
        images: [`${siteUrl}/images/mascot.webp`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        // Google Search Console verification (add your verification code here)
        // google: "your-verification-code",
    },
};

// JSON-LD 構造化データ
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "01（O-ONE）",
    alternateName: "オーワン",
    description: "沖縄県那覇市おもろまちのメンズ専門眉毛ワックスサロン。完全個室で眉毛ワックス・眉毛パーマの施術を行っています。",
    url: siteUrl,
    telephone: "",
    image: `${siteUrl}/images/mascot.webp`,
    address: {
        "@type": "PostalAddress",
        streetAddress: "おもろまち4-6-19 フレックスおもろまち401",
        addressLocality: "那覇市",
        addressRegion: "沖縄県",
        postalCode: "900-0006",
        addressCountry: "JP",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: STORE_LATITUDE,
        longitude: STORE_LONGITUDE,
    },
    areaServed: [
        {
            "@type": "City",
            name: "那覇市",
        },
        {
            "@type": "State",
            name: "沖縄県",
        },
    ],
    priceRange: "¥¥",
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "20:00",
    },
    sameAs: [
        "https://lin.ee/JfpRgB1",
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "メンズ眉毛サービス",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "眉毛ワックス",
                    description: "ワックス脱毛で眉毛を整えるサービス",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "眉毛パーマ",
                    description: "眉毛にパーマをかけて形を整えるサービス",
                },
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <head>
                {gaId && (
                    <>
                        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
                            }}
                        />
                    </>
                )}
                <link rel="dns-prefetch" href="https://www.google.com" />
                <link rel="dns-prefetch" href="https://maps.google.com" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
