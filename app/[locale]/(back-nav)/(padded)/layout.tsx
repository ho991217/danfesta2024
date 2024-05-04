import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <section className="flex flex-col px-5">{children}</section>;
}
