'use client';

import { ErrorCause } from '@/lib/utils';

import { tokenSchema } from '../../signup/schema';

export default function FindMyPasswordPage({
  searchParams: { token },
}: {
  searchParams: { token: string };
}) {
  if (!token || !tokenSchema.safeParse({ token }).success) {
    throw new Error('비정상적인 접근입니다.', {
      cause: ErrorCause['not-found'],
    });
  }

  return <div>{token}</div>;
}
