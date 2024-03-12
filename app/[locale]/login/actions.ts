'use server';

import api from '@app/api';
import { API_ROUTES, COOKIE_KEYS } from '@app/constants';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export type AuthReq = {
  studentId: string;
  password: string;
};

export type AuthRes = {
  accessToken: string;
  refreshToken: string;
};

export default async function authenticate(data: AuthReq) {
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

    redirect('/ko');
  } catch (error) {
    throw error;
  }
}
