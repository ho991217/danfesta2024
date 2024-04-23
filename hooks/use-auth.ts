'use client';

import { AuthTokens, User, post } from '@/api';
import useAuthStore from '@/store/auth-store';
import { AuthInfoSchema } from '@app/[locale]/(back-nav)/login/schema';
import { API_ROUTES, API_URL, COOKIE_KEYS, ROUTES } from '@lib/constants';
import { APIError } from '@lib/utils/validation';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function useAuth() {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const { isLoggedIn, setIsLoggedIn } = useAuthStore();
  const cookies = useCookies();
  const router = useRouter();

  const getUserInfo = async () => {
    try {
      const accessToken = cookies.get(COOKIE_KEYS.accessToken);
      const refreshToken = cookies.get(COOKIE_KEYS.refreshToken);

      if (!accessToken || !refreshToken) {
        throw new Error('토큰이 없습니다.');
      }

      const res = await fetch(`${API_URL}${API_ROUTES.user.me}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then((res) => res.json() as Promise<User>);

      setUserInfo(res);
    } catch (error) {
      throw new Error('사용자 정보를 가져오는데 실패했습니다.');
    }
  };

  const checkLogin = () => {
    getUserInfo()
      .then(() => setIsLoggedIn(true))
      .catch(() => setIsLoggedIn(false));
  };

  useEffect(() => {
    if (isLoggedIn && userInfo !== null) return;
    checkLogin();
  }, []);

  const login = async (req: AuthInfoSchema, redirect?: string) => {
    try {
      const res = await post<AuthInfoSchema, AuthTokens>(
        API_ROUTES.user.login,
        req,
      );

      if (!res.accessToken || !res.refreshToken) throw new APIError(res as any);
      cookies.set(COOKIE_KEYS.accessToken, res.accessToken);
      cookies.set(COOKIE_KEYS.refreshToken, res.refreshToken);

      setIsLoggedIn(true);
      setTimeout(() => {
        router.replace(redirect ? decodeURIComponent(redirect) : ROUTES.home);
      }, 500);
    } catch (error) {
      const e = error as Error;
      setIsLoggedIn(false);
      throw e;
    }
  };

  const logout = () => {
    cookies.remove(COOKIE_KEYS.accessToken);
    cookies.remove(COOKIE_KEYS.refreshToken);
    setUserInfo(null);
    setIsLoggedIn(false);
    setTimeout(() => {
      router.replace(ROUTES.home);
      router.refresh();
      toast.info('로그아웃되었습니다.');
    }, 500);
  };

  const isAdmin = userInfo === null ? false : userInfo.admin;

  return {
    userInfo,
    isLoggedIn,
    login,
    logout,
    isAdmin,
  };
}
