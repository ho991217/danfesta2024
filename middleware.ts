import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const i18nMiddleware = createMiddleware({
   locales: ['en', 'ko'],
   defaultLocale: 'ko',
   localeDetection: true,
});

const middleware = async (request: NextRequest) => {
   return i18nMiddleware(request);
};

export const config = {
   matcher: ['/', '/(ko|en)/:path*'],
};

export default middleware;
