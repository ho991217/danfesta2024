'use client';

import { Button, Link } from '@components/common';
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
    <div className="flex h-[100dvh] w-full flex-col items-center justify-center">
      <h2 className="text-xl">에러 발생</h2>
      <span className="text-sm text-neutral-500">{error.message}</span>
      <Link href="/">
        <Button>다시 시도</Button>
      </Link>
    </div>
  );
}
