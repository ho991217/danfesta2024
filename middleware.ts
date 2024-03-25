import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { API_ROUTES } from './constants';
import api from './api';
import APIError from './lib/utils/error/api-error';

const i18nMiddleware = createMiddleware({
  locales: ['en', 'ko'],
  defaultLocale: 'ko',
  localeDetection: true,
});

const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname.includes('/ticketing')) {
    try {
      await api.get(API_ROUTES.user.me, { withCredentials: true });
    } catch (error) {
      const e = error as APIError;
      if (e.statusCode === 403)
        return Response.redirect(new URL('/ko/login', request.url));
    }
  }

  return i18nMiddleware(request);
};

export const config = {
  matcher: ['/', '/(ko|en)/:path*'],
};

export default middleware;
