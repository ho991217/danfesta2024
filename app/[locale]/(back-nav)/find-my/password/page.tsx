'use client';

import assert from '@/lib/utils/assert';
import { SearchParams } from '@lib/types';
import { ErrorCause } from '@lib/utils';

export default function FindMyPasswordPage({
  searchParams: { token },
}: SearchParams<{ token: string }>) {
  assert('params', token);
  assert('uuid', token);

  return <div>{token}</div>;
}
