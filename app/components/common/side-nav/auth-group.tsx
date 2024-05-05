'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { SheetClose } from '@components/ui/sheet';
import { If } from '@components/util';
import { useAuth } from '@hooks/.';
import { cn } from '@lib/utils';
import { useTranslations } from 'next-intl';
import { IoChevronForwardOutline } from 'react-icons/io5';
import {
  IoPersonCircleOutline,
  IoPersonSharp,
  IoTicketOutline,
} from 'react-icons/io5';
import { MdLogin, MdLogout } from 'react-icons/md';

import NavLink from './nav-link';

export default function AuthGroup({ className }: { className?: string }) {
  const { logout, isLoggedIn, isAdmin, userInfo } = useAuth();
  const t = useTranslations('SideNav');

  return (
    <div className="w-full">
      <If condition={isLoggedIn}>
        <If.Then>
          <If condition={isAdmin}>
            <If.Then>
              <NavLink link="/admin" className={className}>
                <IoPersonSharp className="mr-2" />
                관리자 페이지
              </NavLink>
            </If.Then>

            <If.Else>
              <NavLink
                privateRoute
                link="/mypage"
                className={cn(
                  'dark:bg-neutral-900 bg-neutral-100 w-full p-3 rounded-lg mb-4',
                  className,
                )}
              >
                <div className="w-full flex flex-col gap-4 pt-1">
                  <div className="w-full flex items-center justify-center gap-2">
                    <Avatar className="w-6 h-6 ring-1 ring-offset-1">
                      <AvatarImage
                        className="object-cover"
                        src={userInfo?.profileImage}
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-neutral-500">
                      안녕하세요,{' '}
                      <strong className="font-medium text-black dark:text-white">
                        {userInfo?.username} 님!
                      </strong>
                    </span>
                  </div>

                  <div className="text-neutral-500 text-sm flex items-center justify-end">
                    <IoPersonCircleOutline className="mr-2" /> {t('gotoMypage')}{' '}
                    <IoChevronForwardOutline size={16} />
                  </div>
                </div>
              </NavLink>
              <NavLink link="/my-tickets" className={className}>
                <IoTicketOutline className="mr-2" />
                {t('myTickets')}
              </NavLink>
            </If.Else>
          </If>

          <SheetClose className={className} onClick={logout}>
            <MdLogout />
            {t('logout')}
          </SheetClose>
        </If.Then>

        <If.Else>
          <NavLink link="/login" className={className}>
            <MdLogin className="mr-2" />
            {t('login')}
          </NavLink>
        </If.Else>
      </If>
    </div>
  );
}
