import { Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';
import Providers from '../providers';
import Navigation from '@components/common/navigation';

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
            <Navigation />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
