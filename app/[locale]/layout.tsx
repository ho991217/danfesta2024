import { Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';
import Providers from '../providers';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

const Navigation = dynamic(() => import('../components/common/navigation'));

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
  const t = useTranslations('GNB');
  return (
    <html lang={locale}>
      <body className={clsx(NotoSansKR.className, 'px-5')}>
        <Providers>
          <div className='max-w-[600px] min-w-[320px] m-auto h-[calc(100svh-110px)]'>
            <Navigation title='DANFESTA 2024' description={t('home')} />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
