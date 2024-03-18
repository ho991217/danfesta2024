import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ko'],
  defaultLocale: 'ko',
  localeDetection: true,
});

export const config = {
  matcher: ['/', '/(ko|en)/:path*'],
};
