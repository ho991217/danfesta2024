import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Navigation from './components/common/navigation';
import clsx from 'clsx';
import Providers from './providers';

const NotoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: '단페스타 2024',
  description: '단국대학교 대동제 2024 공식 홈페이지 입니다.',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={clsx(NotoSansKR.className, 'px-5')}>
        <Providers>
          <div className='max-w-[400px] m-auto h-[calc(100svh-110px)]'>
            <Navigation />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
