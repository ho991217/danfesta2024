'use client';

import { get } from '@/api';
import { User } from '@/api/response';
import { authenticate } from '@/app/[locale]/(navigation)/login/actions';
import { AuthInfoSchema } from '@/app/[locale]/(navigation)/login/schema';
import { API_ROUTES, COOKIE_KEYS } from '@/constants';
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
      const data = await get<User>(API_ROUTES.user.me, {
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
        setIsLoggedIn(true);
      }
    });
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
