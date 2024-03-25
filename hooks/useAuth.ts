'use client';

import api from '@/api';
import { User } from '@/api/response';
import { authenticate } from '@/app/[locale]/(navigation)/login/actions';
import { AuthInfoSchema } from '@/app/[locale]/(navigation)/login/schema';
import { API_ROUTES, COOKIE_KEYS } from '@/constants';
import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function useAuth() {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const cookies = useCookies();

  const getUserInfo = async () => {
    try {
      const data = await api.get<User>(API_ROUTES.user.me, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    getUserInfo().then((data) => {
      if (data) {
        setUserInfo(data);
      }
    });
  }, []);

  const isLoggedIn = userInfo !== null;

  const login = async (req: AuthInfoSchema) => {
    await authenticate(req);
  };

  const logout = () => {
    cookies.remove(COOKIE_KEYS.accessToken);
    cookies.remove(COOKIE_KEYS.refreshToken);
    setUserInfo(null);
    toast.info('로그아웃되었습니다.');
  };

  return {
    userInfo,
    isLoggedIn,
    login,
    logout,
  };
}
