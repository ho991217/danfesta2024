'use client';

import { useAuth } from '@/hooks';
import { Link } from '@components/common';
import { SheetClose } from '@components/ui/sheet';
import { If } from '@components/util';
import { ROUTES } from '@lib/constants';
import { useTranslations } from 'next-intl';
import {
  IoPersonCircleOutline,
  IoPersonSharp,
  IoTicketOutline,
} from 'react-icons/io5';
import { MdLogin, MdLogout } from 'react-icons/md';

export default function AuthGroup({ className }: { className?: string }) {
  const { logout, isLoggedIn, isAdmin } = useAuth();
  const t = useTranslations('SideNav');

  return (
    <div>
      <If condition={isLoggedIn}>
        <If.Then>
          <If condition={isAdmin}>
            <If.Then>
              <Link href={ROUTES.admin} className="h-auto">
                <SheetClose className={className}>
                  <IoPersonSharp />
                  관리자 페이지
                </SheetClose>
              </Link>
            </If.Then>

            <If.Else>
              <Link href={ROUTES.mypage} className="h-auto">
                <SheetClose className={className}>
                  <IoPersonCircleOutline />
                  {t('mypage')}
                </SheetClose>
              </Link>
              <Link href={ROUTES.myTickets} className="h-auto">
                <SheetClose className={className}>
                  <IoTicketOutline />
                  {t('myTickets')}
                </SheetClose>
              </Link>
            </If.Else>
          </If>

          <SheetClose className={className} onClick={logout}>
            <MdLogout />
            {t('logout')}
          </SheetClose>
        </If.Then>

        <If.Else>
          <Link href={ROUTES.login}>
            <SheetClose className={className}>
              <MdLogin />
              {t('login')}
            </SheetClose>
          </Link>
        </If.Else>
      </If>
    </div>
  );
}
