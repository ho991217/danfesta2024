'use client';

import { Link } from '@components/common';
import { NextIntlClientProvider } from 'next-intl';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="flex h-[100dvh] w-full flex-col items-center justify-center">
          <h2 className="text-xl">404! 페이지를 찾을 수 없습니다.</h2>
          <span className="text-sm text-neutral-500">
            홈화면으로 이동해주세요.
          </span>
          <NextIntlClientProvider locale="ko">
            <Link variant="bottom" href="/">
              홈으로
            </Link>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
