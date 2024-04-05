'use server';

import { COOKIE_KEYS } from '@/constants';
import { cookies } from 'next/headers';

export default async function getServerSideToken() {
  const cookie = cookies();
  const accessToken = cookie.get(COOKIE_KEYS.accessToken)?.value;
  const refreshToken = cookie.get(COOKIE_KEYS.refreshToken)?.value;

  if (!accessToken || !refreshToken) {
    throw new Error('로그인이 필요합니다.');
  }

  return {
    accessToken,
    refreshToken,
    cookie: `${COOKIE_KEYS.accessToken}=${accessToken}; ${COOKIE_KEYS.refreshToken}=${refreshToken}`,
  };
}
