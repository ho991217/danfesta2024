'use server';

import { API_ROUTES, COOKIE_KEYS } from '@/app/lib/constants';
import { CustomError, ErrorCause, assert } from '@/app/lib/utils';
import { cookies } from 'next/headers';

import { post } from '.';

export default async function getServerSideToken() {
  const cookie = cookies();
  let atk = cookie.get(COOKIE_KEYS.accessToken)?.value;
  let rtk = cookie.get(COOKIE_KEYS.refreshToken)?.value;

  if (!atk || !rtk) {
    throw new CustomError(ErrorCause.NOT_LOGGED_IN);
  }

  try {
    assert('jwt', atk);
  } catch (error) {
    const e = error as Error;

    if (e.cause === ErrorCause.EXPIRED_TOKEN) {
      const { accessToken, refreshToken } = await reissue(rtk);
      cookie.set(COOKIE_KEYS.accessToken, accessToken);
      cookie.set(COOKIE_KEYS.refreshToken, refreshToken);
      atk = accessToken;
      rtk = refreshToken;
    }
  }

  return atk;
}

async function reissue(rtk: string) {
  try {
    assert('jwt', rtk);

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
  } catch {
    throw new CustomError(
      ErrorCause.INVALID_FORMAT,
      '올바르지 않은 토큰입니다.',
    );
  }
}
