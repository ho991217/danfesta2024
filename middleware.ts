import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { COOKIE_KEYS } from './app/constants';

const handleI18nRouting = createMiddleware({
  locales: ['en', 'ko'],
  defaultLocale: 'ko',
  localeDetection: true,
});

export default async function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: ['/', '/(ko|en)/:path*'],
};
