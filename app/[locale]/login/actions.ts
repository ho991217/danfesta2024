'use server';

import api from '@app/api';
import { API_ROUTES, COOKIE_KEYS } from '@app/constants';
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
  const locale = await getLocale();
  try {
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

    redirect(`/${locale}`);
  } catch (error) {
    return error;
  }
}
