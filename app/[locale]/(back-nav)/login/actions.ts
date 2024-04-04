'use server';

import { post } from '@/api';
import { API_ROUTES, COOKIE_KEYS } from '@/constants';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getLocale } from 'next-intl/server';
import { AuthInfoSchema } from './schema';

export type AuthRes = {
  accessToken: string;
  refreshToken: string;
};

export async function authenticate(data: AuthInfoSchema) {
  const { accessToken, refreshToken } = await post<AuthInfoSchema, AuthRes>(
    API_ROUTES.user.login,
    data
  );

  cookies().set(COOKIE_KEYS.accessToken, accessToken);

  cookies().set(COOKIE_KEYS.refreshToken, refreshToken);

  const locale = await getLocale();
  redirect(`/${locale}`);
}
