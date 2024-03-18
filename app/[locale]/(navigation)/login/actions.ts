'use server';

import api from '@/api';
import { API_ROUTES, COOKIE_KEYS } from '@/constants';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getLocale } from 'next-intl/server';

export type AuthReq = {
  studentId: string;
  password: string;
};

export type AuthRes = {
  accessToken: string;
  refreshToken: string;
};

export async function authenticate(data: AuthReq) {
  const { accessToken, refreshToken } = await api.post<AuthReq, AuthRes>(
    API_ROUTES.user.login,
    data
  );
  const isProduction = process.env.NODE_ENV === 'production';

  cookies().set(COOKIE_KEYS.accessToken, accessToken, {
    secure: isProduction,
  });

  cookies().set(COOKIE_KEYS.refreshToken, refreshToken, {
    secure: isProduction,
  });

  const locale = await getLocale();
  redirect(`/${locale}`);
}
