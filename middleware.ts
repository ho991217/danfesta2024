import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { API_ROUTES, API_URL, COOKIE_KEYS } from "./constants";

const i18nMiddleware = createMiddleware({
  locales: ["en", "ko"],
  defaultLocale: "ko",
  localeDetection: true,
});

const middleware = async (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Content-Security-Policy", "upgrade-insecure-requests;"); // http요청을 https로 변경
  // const atk = request.cookies.get(COOKIE_KEYS.accessToken);

  // if (request.nextUrl.pathname.includes('/ticketing')) {
  //   if (!atk) throw new Error('로그인이 필요합니다.');

  //   try {
  //     await fetch(`${API_URL}${API_ROUTES.user.me}`, {
  //       headers: {
  //         Authorization: `Bearer ${atk}`,
  //       },
  //     });
  //   } catch (error) {
  //     return Response.redirect(new URL('/ko/login', request.url));
  //   }
  // }

  const response = i18nMiddleware(request).headers.set(
    "Content-Security-Policy",
    "upgrade-insecure-requests;",
  );

  return response;
};

export const config = {
  matcher: ["/", "/(ko|en)/:path*"],
};

export default middleware;
