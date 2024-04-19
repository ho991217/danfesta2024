import { PropsWithChildren } from 'react';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <section className="px-5 w-full lg:max-w-full h-[calc(100dvh-65px)] lg:flex lg:items-center lg:justify-center">
      {children}
    </section>
  );
}
