import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { API_ROUTES } from './constants';
import { get } from './api';

const i18nMiddleware = createMiddleware({
  locales: ['en', 'ko'],
  defaultLocale: 'ko',
  localeDetection: true,
});

const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname.includes('/ticketing')) {
    try {
      await get(API_ROUTES.user.me, { withCredentials: true });
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
