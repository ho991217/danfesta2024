import Navigation from '@/components/common/navigation';

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation hasBackButton />
      {children}
    </>
  );
}
