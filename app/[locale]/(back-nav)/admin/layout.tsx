import { PropsWithChildren } from 'react';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <section className="px-5 w-full h-[calc(100dvh-65px)]">{children}</section>
  );
}
