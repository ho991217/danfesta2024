import { IntlProvider } from '@components/common';
import { type PropsWithChildren } from 'react';

export default function LoginLayout({ children }: PropsWithChildren) {
  return <IntlProvider>{children}</IntlProvider>;
}
