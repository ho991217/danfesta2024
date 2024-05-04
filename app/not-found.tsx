'use client';

import { Link } from '@components/common';

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

          <Link
            variant="bottom"
            href="/"
            className="w-full h-full flex items-center justify-center"
          >
            홈으로
          </Link>
        </div>
      </body>
    </html>
  );
}
