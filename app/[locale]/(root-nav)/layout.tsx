import { FloatingTicket, Footer, Navigation } from '@components/common';
import { PropsWithChildren } from 'react';

export default function LocaleLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation />
      {children}
      <FloatingTicket />
      <Footer />
    </>
  );
}
