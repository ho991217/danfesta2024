"use client";

import { AuthTokens, User } from "@/api/response";
import { AuthInfoSchema } from "@/app/[locale]/(back-nav)/login/schema";
import { API_ROUTES, API_URL, COOKIE_KEYS } from "@/constants";
import { useCookies } from "next-client-cookies";
import ApiError from "@/lib/utils/error/api-error";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useAuthStore from "@/store/auth-store";
import { get, post } from "@/api";

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
        throw new Error("토큰이 없습니다.");
      }

      const res = await get<User>(API_ROUTES.user.me, {
        token: accessToken,
      });

      setUserInfo(res);
    } catch (error) {
      throw new Error("사용자 정보를 가져오는데 실패했습니다.");
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
    if (isLoggedIn) return;
    checkLogin();
  }, []);

  const login = async (req: AuthInfoSchema) => {
    try {
      const res = await post<AuthInfoSchema, AuthTokens>(
        API_ROUTES.user.login,
        req,
      );

      if (!res.accessToken || !res.refreshToken) throw new ApiError(res as any);
      cookies.set(COOKIE_KEYS.accessToken, res.accessToken);
      cookies.set(COOKIE_KEYS.refreshToken, res.refreshToken);

      setIsLoggedIn(true);
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
    toast.info("로그아웃되었습니다.");
    setIsLoggedIn(false);
    router.push("/");
  };

  return {
    userInfo,
    isLoggedIn,
    login,
    logout,
  };
}
