import { Navigation } from '@components/common';
import { PropsWithChildren } from 'react';

export default function BackNavLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation hasBackButton />
      {children}
    </>
  );
}
