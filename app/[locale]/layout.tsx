import { Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';
import Providers from '../providers';
import Navigation from '@components/common/navigation';
import { NextIntlClientProvider } from 'next-intl';
import ko from '@/messages/ko.json';
import en from '@/messages/en.json';

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
      <body className={clsx(NotoSansKR.className, 'px-5 scrollbar-hide')}>
        <Providers>
          <div className='max-w-[600px] min-w-[320px] m-auto h-full'>
            <NextIntlClientProvider
              locale={locale}
              timeZone='Asia/Seoul'
              messages={locale === 'ko' ? ko : en}
            >
              <Navigation />
            </NextIntlClientProvider>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
