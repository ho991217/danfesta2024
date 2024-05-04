'use client';

import { AuthTokens, User, post } from '@api/.';
import { AuthInfoSchema } from '@app/[locale]/(back-nav)/login/schema';
import { API_ROUTES, API_URL, COOKIE_KEYS } from '@lib/constants';
import { useRouter } from '@lib/navigation';
import { APIError } from '@lib/utils/validation';
import useAuthStore from '@store/auth-store';
import { deleteCookie, setCookie } from 'cookies-next';
import { useCookies } from 'next-client-cookies';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function useAuth() {
  const { isLoggedIn, setIsLoggedIn, userInfo, setUserInfo } = useAuthStore();
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
        cache: 'force-cache',
      }).then((res) => res.json() as Promise<User>);

      return res;
    } catch {
      return null;
    }
  };

  const checkLogin = () => {
    getUserInfo().then((user) => {
      if (user === null) {
        setIsLoggedIn(false);
        return;
      }
      setIsLoggedIn(true);
    });
  };

  useEffect(() => {
    if (!isLoggedIn) {
      checkLogin();
    }
    if (userInfo === null) {
      getUserInfo().then((user) => {
        if (user === null) {
          return;
        }
        setUserInfo(user);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async (req: AuthInfoSchema, redirect?: string) => {
    try {
      const res = await post<AuthInfoSchema, AuthTokens>(
        API_ROUTES.user.login,
        req,
      );

      if (!res.accessToken || !res.refreshToken) throw new APIError(res as any);
      setCookie(COOKIE_KEYS.accessToken, res.accessToken);
      setCookie(COOKIE_KEYS.refreshToken, res.refreshToken);

      setIsLoggedIn(true);

      router.replace(redirect ? decodeURIComponent(redirect) : '/');
    } catch (error) {
      const e = error as Error;
      setIsLoggedIn(false);
      throw e;
    }
  };

  const logout = () => {
    deleteCookie(COOKIE_KEYS.accessToken);
    deleteCookie(COOKIE_KEYS.refreshToken);
    setUserInfo(null);
    setIsLoggedIn(false);
    router.replace('/');
    router.refresh();
    toast.info('로그아웃되었습니다.');
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
