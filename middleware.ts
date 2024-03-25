import createMiddleware from 'next-intl/middleware';
import { permanentRedirect, redirect } from 'next/navigation';
import { NextRequest, NextResponse, userAgent } from 'next/server';

const i12nMiddleware = createMiddleware({
  locales: ['en', 'ko'],
  defaultLocale: 'ko',
  localeDetection: true,
});

const middleware = (request: NextRequest): NextResponse<unknown> => {
  const url = request.nextUrl;
  const { os, browser } = userAgent(request);
  if (browser.name === 'KAKAOTALK' || browser.name === 'NAVER') {
    if (os.name === 'Android') {
      permanentRedirect(`intent://${url.toString()}#Intent;scheme=http;end';`);
    }
    if (os.name === 'iOS') {
      permanentRedirect(`googlechrome://${url.toString()}`);
    }
  }

  return i12nMiddleware(request);
};

export const config = {
  matcher: ['/', '/(ko|en)/:path*'],
};

export default middleware;
