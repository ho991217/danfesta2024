import Navigation from '@/components/common/navigation';
import { NextIntlClientProvider } from 'next-intl';
import ko from '@/messages/ko.json';
import en from '@/messages/en.json';

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <NextIntlClientProvider
        locale={locale}
        timeZone='Asia/Seoul'
        messages={locale === 'ko' ? ko : en}
      >
        <Navigation />
      </NextIntlClientProvider>
      {children}
    </>
  );
}
