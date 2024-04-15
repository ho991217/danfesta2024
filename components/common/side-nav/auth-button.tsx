'use client';

import { ROUTES } from '@/constants';
import { useAuth } from '@/hooks';
import { Link } from '@components/common';
import { SheetClose } from '@components/ui/sheet';
import { If } from '@components/util';
import { useTranslations } from 'next-intl';
import { BsTicketFill } from 'react-icons/bs';
import { IoPersonSharp } from 'react-icons/io5';

export default function AuthButton({ className }: { className?: string }) {
  const { logout, isLoggedIn } = useAuth();
  const t = useTranslations('SideNav');

  return (
    <If condition={isLoggedIn}>
      <If.Then>
        <SheetClose className={className} onClick={logout}>
          <IoPersonSharp />
          {t('logout')}
        </SheetClose>
        <Link href={ROUTES.myTickets}>
          <SheetClose className={className}>
            <BsTicketFill />
            {t('myTickets')}
          </SheetClose>
        </Link>
      </If.Then>

      <If.Else>
        <Link href={ROUTES.login}>
          <SheetClose className={className}>
            <IoPersonSharp />
            {t('login')}
          </SheetClose>
        </Link>
      </If.Else>
    </If>
  );
}
