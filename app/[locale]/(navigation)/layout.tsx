import Navigation from '@/components/common/navigation';
import { NextIntlClientProvider } from 'next-intl';


export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
