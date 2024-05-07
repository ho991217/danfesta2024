'use client';

import en from '@/messages/en.json';
import ko from '@/messages/ko.json';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { PropsWithChildren } from 'react';

const messages = {
  en,
  ko,
};

export default function IntlProvider({ children }: PropsWithChildren) {
  const locale = useLocale() as keyof typeof messages;

  return (
    <NextIntlClientProvider
      messages={messages[locale]}
      timeZone="Asia/Seoul"
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          },
        },
      }}
      locale={locale}
    >
      {children}
    </NextIntlClientProvider>
  );
}
