'use server';

import { API_ROUTES, COOKIE_KEYS } from '@/constants';
import assertToken, { ErrorCause } from '@/lib/utils/assertToken';
import { cookies } from 'next/headers';
import { post } from '.';

export default async function getServerSideToken() {
  const cookie = cookies();
  let atk = cookie.get(COOKIE_KEYS.accessToken)?.value;
  let rtk = cookie.get(COOKIE_KEYS.refreshToken)?.value;

  if (!atk || !rtk) {
    throw new Error('로그인이 필요합니다.');
  }

  try {
    assertToken(atk);
  } catch (error) {
    const e = error as Error;
    switch (e.cause as ErrorCause) {
      case 'invalid':
        throw new Error(e.message);
      case 'expired':
        const { accessToken, refreshToken } = await reissue(rtk);
        cookie.set(COOKIE_KEYS.accessToken, accessToken);
        cookie.set(COOKIE_KEYS.refreshToken, refreshToken);
        atk = accessToken;
        rtk = refreshToken;
        break;
      default:
        throw new Error(e.message);
    }
  }

  return `${COOKIE_KEYS.accessToken}=${atk}; ${COOKIE_KEYS.refreshToken}=${atk}`;
}

async function reissue(rtk: string) {
  assertToken(rtk);

  const { accessToken, refreshToken } = await post<
    { refreshToken: string },
    {
      accessToken: string;
      refreshToken: string;
    }
  >(API_ROUTES.user.reissue, {
    refreshToken: rtk,
  });

  return {
    accessToken,
    refreshToken,
  };
}
