import { jwtDecode } from 'jwt-decode';
import createMiddleware from 'next-intl/middleware';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

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

  const isMaintenance = false;
  if (
    isMaintenance &&
    !pathname.includes('under-construction') &&
    !pathname.includes('jeomshim')
  ) {
    req.nextUrl.pathname = '/under-construction';
  }

  if (isProtectedRoute) {
    const jwt = cookies().get(COOKIE_KEYS.accessToken)?.value;
    if (jwt === undefined || jwt.length === 0) {
      req.nextUrl.pathname = '/login';
      return i18nMiddleware(req);
    }
    const { userRole } = jwtDecode<AccessToken>(jwt);
    const userRoles = userRole.split(',');
    const isAdmin = userRoles.includes('ROLE_ADMIN');
    if (!isAdmin) {
      req.nextUrl.pathname = '/';
      return i18nMiddleware(req);
    }
  } else if (isPrivateRoute) {
    const jwt = cookies().get(COOKIE_KEYS.accessToken)?.value;
    if (!jwt) {
      req.nextUrl.pathname = `/login?redirect=${encodeURIComponent(pathname.replace(/\/(ko|en)/, ''))}`;
      return i18nMiddleware(req);
    }
  }

  return i18nMiddleware(req);
};

export const config = {
  matcher: ['/', '/(ko|en)/:path*'],
};

export default middleware;
