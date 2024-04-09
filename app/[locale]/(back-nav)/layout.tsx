import { Navigation } from "@components/common";

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
