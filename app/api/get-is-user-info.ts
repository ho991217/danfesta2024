'use server';

import { API_ROUTES, COOKIE_KEYS } from '@/app/lib/constants';
import { CustomError, ErrorCause } from '@/app/lib/utils/validation';
import { cookies } from 'next/headers';

import { User, get, getServerSideToken } from '.';

export default async function getUserInfo(): Promise<User> {
  const accessToken = cookies().get(COOKIE_KEYS.accessToken);
  const refreshToken = cookies().get(COOKIE_KEYS.refreshToken);
  const token = await getServerSideToken();

  if (!accessToken || !refreshToken) {
    throw new CustomError(ErrorCause.NOT_LOGGED_IN);
  }

  const res = await get<User>(API_ROUTES.user.me, {
    token,
  });

  return res;
}
