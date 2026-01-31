import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EYEBROW STYLING FOR MEN OKINAWA | 01（OONE）",
  description: "沖縄県那覇市おもろまちのメンズ専門眉毛ワックスサロン「01（OONE）」。男性の眉毛を美しく整えます。",
  keywords: "眉毛ワックス,メンズ,沖縄,那覇,おもろまち,01,OONE,眉毛サロン",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
