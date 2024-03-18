import ToastProvider from './components/common/toast/toast-provider';
import { CookiesProvider } from 'next-client-cookies/server';

type ProvidersProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Providers({ children }: ProvidersProps) {
  return (
    <CookiesProvider>
      <ToastProvider>{children}</ToastProvider>
    </CookiesProvider>
  );
}
