import { jwtDecode } from 'jwt-decode';
import createMiddleware from 'next-intl/middleware';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { COOKIE_KEYS, ROUTES } from './lib/constants';
import { AccessToken } from './lib/utils/validation/assert/jwt';

const protectedRoutes: string[] = [ROUTES.admin];

const i18nMiddleware = createMiddleware({
  locales: ['en', 'ko'],
  defaultLocale: 'ko',
  localeDetection: true,
});

const middleware = async (req: NextRequest) => {
  const response = i18nMiddleware(req);
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.includes(route),
  );

  if (isProtectedRoute) {
    const jwt = cookies().get(COOKIE_KEYS.accessToken)?.value;
    if (!jwt) {
      return NextResponse.redirect(new URL(`/ko${ROUTES.login}`, req.nextUrl));
    }
    const { userRole } = jwtDecode<AccessToken>(jwt);
    const userRoles = userRole.split(',');
    const isAdmin = userRoles.includes('ROLE_ADMIN');

    if (!isAdmin) {
      return NextResponse.redirect(new URL('/', req.nextUrl));
    }
  }

  return response;
};

export const config = {
  matcher: ['/', '/(ko|en)/:path*'],
};

export default middleware;
