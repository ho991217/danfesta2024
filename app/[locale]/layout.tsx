import { PropsWithChildren } from 'react';

export default function LocaleLayout({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[430px] m-auto w-full h-[100dvh] overflow-x-hidden scrollbar-hide relative bg-white dark:bg-[#0C0C0C]">
      {children}
    </div>
  );
}
