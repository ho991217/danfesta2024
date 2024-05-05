import {
  Pathnames as Paths,
  createSharedPathnamesNavigation,
} from 'next-intl/navigation';

export const locales = ['en', 'ko'] as const;
export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/admin': '/admin',
  '/login': '/login',
  '/mypage': '/mypage',
  '/signup/complete': '/signup/complete',
  '/password': '/password',
  '/sms': '/sms',
  '/verify': '/verify',
  '/find-my': '/find-my',
  '/find-my/password': '/find-my/password',
  '/find-my/password/complete': '/find-my/password/complete',
  '/find-my/id': '/find-my/id',
  '/find-my/id/complete': '/find-my/id/complete',
  '/lineup': '/lineup',
  '/ticketing': '/ticketing',
  '/ticketing/[id]': '/ticketing/[id]',
  '/my-tickets': '/my-tickets',
  '/notice': '/notice',
  '/stamp': '/stamp',
  '/stamp/[missionId]': '/stamp/[missionId]',
  '/events': '/events',
} satisfies Paths<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
