import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Navigation from './components/common/navigation';
import clsx from 'clsx';

const NotoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: '단페스타 2024',
  description: '단국대학교 대동제 2024 공식 홈페이지 입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={clsx(NotoSansKR.className, 'px-5')}>
        <div className='max-w-[400px] m-auto'>
          <Navigation
            title={'DANFESTA 2024'}
            description='2024 단국대학교 대동제'
          />
          {children}
        </div>
      </body>
    </html>
  );
}
