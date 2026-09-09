import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '个人开发随记与小工具',
  description: '果子哥的个人开发实践、项目记录与实用小工具。',
  applicationName: '个人开发随记与小工具',
  metadataBase: new URL('https://www.haonange.com'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.haonange.com',
    siteName: '个人开发随记与小工具',
    title: '个人开发随记与小工具',
    description: '记录开发实践，也把想法做成真正好用的小工具。',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '个人开发随记与小工具',
    description: '记录开发实践，也把想法做成真正好用的小工具。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
