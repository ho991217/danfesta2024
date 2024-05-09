import { get } from '@vercel/edge-config';
import { jwtDecode } from 'jwt-decode';
import createMiddleware from 'next-intl/middleware';
import { getLocale } from 'next-intl/server';
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
  const { pathname } = req.nextUrl.clone();
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.includes(route),
  );
  const isPrivateRoute = privateRoutes.some((route) =>
    pathname.includes(route),
  );

  const isMaintenance = await get('is_maintenance');
  if (isMaintenance && !pathname.includes('under-construction')) {
    req.nextUrl.pathname = '/under-construction';
  }

  if (isProtectedRoute) {
    const jwt = cookies().get(COOKIE_KEYS.accessToken)?.value;
    if (!jwt) {
      req.nextUrl.pathname = '/login';
    }
    const { userRole } = jwtDecode<AccessToken>(jwt ?? '');
    const userRoles = userRole.split(',');
    const isAdmin = userRoles.includes('ROLE_ADMIN');

    if (!isAdmin) {
      return req.nextUrl.pathname === '/';
    }
  } else if (isPrivateRoute) {
    const jwt = cookies().get(COOKIE_KEYS.accessToken)?.value;
    if (!jwt) {
      req.nextUrl.pathname = `/login?redirect=${encodeURIComponent(pathname)}`;
    }
  }

  return i18nMiddleware(req);
};

export const config = {
  matcher: ['/', '/(ko|en)/:path*'],
};

export default middleware;
