'use client';

import { get } from '@/api';
import { User } from '@/api/response';
import { authenticate } from '@/app/[locale]/(back-nav)/login/actions';
import { AuthInfoSchema } from '@/app/[locale]/(back-nav)/login/schema';
import { API_ROUTES, API_URL, COOKIE_KEYS } from '@/constants';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function useAuth() {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      }).then((res) => res.json());

      setUserInfo(res);
    } catch (error) {
      throw new Error('사용자 정보를 가져오는데 실패했습니다.');
    }
  };

  const checkLogin = async () => {
    try {
      await getUserInfo();
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const login = async (req: AuthInfoSchema) => {
    try {
      await authenticate(req);
    } catch (error) {
      toast.error('로그인에 실패했습니다.');
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    cookies.remove(COOKIE_KEYS.accessToken);
    cookies.remove(COOKIE_KEYS.refreshToken);
    setUserInfo(null);
    toast.info('로그아웃되었습니다.');
    setIsLoggedIn(false);
    router.push('/');
  };

  return {
    userInfo,
    isLoggedIn,
    login,
    logout,
  };
}
