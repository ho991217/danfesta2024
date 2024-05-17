import { Params } from '@lib/types';
import type { Metadata, Viewport } from 'next';
import { PropsWithChildren } from 'react';

import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: '단페스타 2024',
  description: '단국대학교 대동제 2024 공식 홈페이지 입니다.',
  manifest: '/manifest.json',
  applicationName: '단페스타 2024',
  creator: '이호연 <ho991217@kakao.com>',
  keywords: [
    '단국대학교',
    '단페스타',
    '대동제',
    '2024',
    '축제',
    '대학축제',
    '단국대',
    '단국',
    '대학교',
    '대학',
  ],
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    title: '단페스타 2024',
    description: '단국대학교 대동제 2024 공식 홈페이지 입니다.',
    url: 'https://danfesta.com',
    siteName: '단페스타 2024',
    images: [
      {
        url: 'https://www.danfesta.com/opengraph-image.png',
      },
    ],
  },
  metadataBase: new URL('/', 'https://www.danfesta.com/'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0c0c' },
  ],
};

export default function RootLayout({
  children,
  params: { locale },
}: PropsWithChildren<Params<{ locale: string }>>) {
  return (
    <html lang={locale ?? 'ko'}>
      <body className="font-Pretendard">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
