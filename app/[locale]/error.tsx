'use client';

import { Link } from '@components/common';
import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex h-[100dvh] w-full flex-col items-center justify-center relative">
      <h2 className="text-xl">에러!</h2>
      <span className="text-sm text-neutral-500">{error.message}</span>
      <Link href="/" variant="bottom">
        홈으로
      </Link>
    </div>
  );
}
