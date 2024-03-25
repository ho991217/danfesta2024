import { Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';
import Providers from '../providers';
import { isKakaoTalkBrowser, isMobileWeb, isNaverBrowser } from '@/lib/utils';

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
          {!isKakaoTalkBrowser() && !isNaverBrowser() && (
            <div className='max-w-[600px] min-w-[320px] m-auto px-5 pt-5 h-[100dvh] overflow-x-hidden lg:hidden'>
              {children}
            </div>
          )}
          <div className='hidden lg:block lg:fixed lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2'>
            모바일 환경에서 접속해주세요.
          </div>
          {(isKakaoTalkBrowser() || isNaverBrowser()) && (
            <div className='block fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              인앱 브라우저에서는 지원하지 않습니다. <br />
              외부 브라우저로 접속해주세요.
            </div>
          )}
        </Providers>
      </body>
    </html>
  );
}
