import { Navigation } from '@/app/components/common';
import { PropsWithChildren } from 'react';

export default function DarkSchemeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation hasBackButton scheme="dark" />
      {children}
    </>
  );
}
