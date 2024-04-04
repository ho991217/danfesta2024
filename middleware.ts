import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { API_ROUTES, COOKIE_KEYS } from './constants';
import { get } from './api';

const i18nMiddleware = createMiddleware({
  locales: ['en', 'ko'],
  defaultLocale: 'ko',
  localeDetection: true,
});

const middleware = async (request: NextRequest) => {
  const atk = request.cookies.get(COOKIE_KEYS.accessToken);

  if (request.nextUrl.pathname.includes('/ticketing')) {
    if (!atk) throw new Error('로그인이 필요합니다.');

    try {
      await fetch(API_ROUTES.user.me, {
        headers: {
          Authorization: `Bearer ${atk}`,
        },
      });
    } catch (error) {
      return Response.redirect(new URL('/ko/login', request.url));
    }
  }

  return i18nMiddleware(request);
};

export const config = {
  matcher: ['/', '/(ko|en)/:path*'],
};

export default middleware;
