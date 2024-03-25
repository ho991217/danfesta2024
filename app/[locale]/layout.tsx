import { Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';
import Providers from '../providers';

const NotoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={clsx(NotoSansKR.className, 'scrollbar-hide')}>
        <Providers>
          <div className='max-w-[600px] min-w-[320px] m-auto px-5 pt-5 h-[100dvh] overflow-x-hidden lg:hidden'>
            {children}
          </div>
          <div className='hidden lg:block lg:fixed lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2'>
            모바일 환경에서 접속해주세요.
          </div>
        </Providers>
      </body>
    </html>
  );
}
