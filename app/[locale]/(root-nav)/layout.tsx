import { FloatingTicket, Footer, Navigation } from '@components/common';
import { SearchParams } from '@lib/types';
import { PropsWithChildren } from 'react';

export default function LocaleLayout({
  children,
}: PropsWithChildren<SearchParams<{ locale: string }>>) {
  return (
    <>
      <Navigation />
      {children}
      <FloatingTicket />
      <Footer />
    </>
  );
}
