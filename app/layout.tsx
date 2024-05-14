import DanfestaLogo from '@icons/orbit_logo.png';
import { Params } from '@lib/types';
import type { Metadata, Viewport } from 'next';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: '단페스타 2024',
  description: '단국대학교 대동제 2024 공식 홈페이지 입니다.',
  manifest: '/manifest.json',
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
      <body className="font-Pretendard bg-primary flex items-center justify-center gap-[5rem]">
        <Providers>
          <div className="flex-col items-center justify-center hidden md:flex">
            <h1>
              <Image
                src={DanfestaLogo}
                className="w-[320px]"
                alt="단페스타 로고"
              />
            </h1>
            <span className="text-lg font-semibold text-white">
              단페스타는 모바일에 최적화 되어있어요!
            </span>
          </div>
          <div className="relative max-w-[425px] min-w-[320px] w-full h-screen bg-white dark:bg-black">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
