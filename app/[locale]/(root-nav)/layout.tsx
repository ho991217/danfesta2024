import Navigation from '@/components/common/navigation';
import FloatingTicket from '@/components/common/floating-ticket';

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
