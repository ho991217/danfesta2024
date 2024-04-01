import Navigation from '@/components/common/navigation';
import { NextIntlClientProvider } from 'next-intl';
import dynamic from 'next/dynamic';

const FloatingTicket = dynamic(
  () => import('@/components/common/floating-ticket')
);

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
      <FloatingTicket />
    </>
  );
}
