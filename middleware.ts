import { jwtDecode } from 'jwt-decode';
import createMiddleware from 'next-intl/middleware';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import {
  COOKIE_KEYS,
  privateRoutes,
  protectedRoutes,
} from './app/lib/constants';
import { AccessToken } from './app/lib/utils/validation/assert/jwt';

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
  const isPrivateRoute = privateRoutes.some((route) => path.includes(route));

  if (isProtectedRoute) {
    const jwt = cookies().get(COOKIE_KEYS.accessToken)?.value;
    if (!jwt) {
      return NextResponse.redirect(new URL(`/ko/login`, req.nextUrl));
    }
    const { userRole } = jwtDecode<AccessToken>(jwt);
    const userRoles = userRole.split(',');
    const isAdmin = userRoles.includes('ROLE_ADMIN');

    if (!isAdmin) {
      return NextResponse.redirect(new URL('/', req.nextUrl));
    }
  } else if (isPrivateRoute) {
    const jwt = cookies().get(COOKIE_KEYS.accessToken)?.value;
    if (!jwt) {
      return NextResponse.redirect(
        new URL(
          `/ko/login?redirect=${encodeURIComponent(req.nextUrl.pathname)}`,
          req.nextUrl,
        ),
      );
    }
  }

  return response;
};

export const config = {
  matcher: ['/', '/(ko|en)/:path*'],
};

export default middleware;
