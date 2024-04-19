import { PropsWithChildren } from 'react';

export default function LocaleLayout({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[600px] min-w-[320px] m-auto h-[100dvh] overflow-x-hidden scrollbar-hide relative lg:w-screen lg:max-w-full">
      {children}
    </div>
  );
}
