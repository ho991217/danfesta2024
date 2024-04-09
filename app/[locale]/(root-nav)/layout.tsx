import { FloatingTicket, Footer, Navigation } from '@components/common';

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
      <Footer />
    </>
  );
}
