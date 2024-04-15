'use client';

import { ROUTES } from '@/constants';
import { useAuth } from '@/hooks';
import { Link } from '@components/common';
import { SheetClose } from '@components/ui/sheet';
import { If } from '@components/util';
import { useTranslations } from 'next-intl';
import { BsTicketFill } from 'react-icons/bs';
import {
  IoPersonCircleOutline,
  IoPersonSharp,
  IoTicketOutline,
} from 'react-icons/io5';
import { MdLogin, MdLogout } from 'react-icons/md';

export default function AuthButton({ className }: { className?: string }) {
  const { logout, isLoggedIn } = useAuth();
  const t = useTranslations('SideNav');

  return (
    <div>
      <If condition={isLoggedIn}>
        <If.Then>
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
