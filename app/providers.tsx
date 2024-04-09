import NextTopLoader from 'nextjs-toploader';
import { CookiesProvider } from 'next-client-cookies/server';
import { Toaster } from '@/components/ui/sonner';

type ProvidersProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Providers({ children }: ProvidersProps) {
  return (
    <CookiesProvider>
      <NextTopLoader color='#0262E9' showSpinner={false} shadow={false} />
      <Toaster position='top-center' />
      {children}
    </CookiesProvider>
  );
}
