'use client';

import { ErrorCause } from '@/lib/utils';

export default function FindMyPasswordPage({
  searchParams: { token },
}: {
  searchParams: { token: string };
}) {
  if (!token) {
    throw new Error('비정상적인 접근입니다.', {
      cause: ErrorCause['not-found'],
    });
  }

  return <div>{token}</div>;
}
