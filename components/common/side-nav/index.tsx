'use client';

import LocaleSwitcher from '../locale-switcher';
import Link from 'next/link';
import { COOKIE_KEYS } from '@/constants';
import { useEffect, useState } from 'react';
import { Cookies, useCookies } from 'next-client-cookies';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet';
import { IoIosMenu } from 'react-icons/io';
import { IoPersonSharp } from 'react-icons/io5';
import If from '@/components/util/if';
import { useLocale } from 'next-intl';
import useToastStore from '@/stores/toast-state';

export default function SideNav() {
  const locale = useLocale();
  const cookies = useCookies();
  const accessToken = cookies.get(COOKIE_KEYS.accessToken);
  const [loggedIn, setLoggedIn] = useState(
    cookies.get(COOKIE_KEYS.accessToken) !== undefined
  );

  useEffect(() => {
    setLoggedIn(accessToken !== undefined);
  }, [accessToken]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoIosMenu size={40} />
      </SheetTrigger>

      <SheetContent className='bg-white dark:bg-[#0C0C0C] dark:border-[#181818] flex flex-col justify-between'>
        <SheetDescription className='flex flex-col items-end gap-10'>
          <ul className='flex flex-col items-end gap-4'>
            <li>
              <Link href={`/${locale}`} className='hover:underline'>
                <SheetClose>홈</SheetClose>
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/ticketing`} className='hover:underline'>
                <SheetClose>티켓팅</SheetClose>
              </Link>
            </li>
          </ul>
          <AuthButton
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            cookies={cookies}
          />
        </SheetDescription>
        <LocaleSwitcher />
      </SheetContent>
    </Sheet>
  );
}

function AuthButton({
  loggedIn,
  setLoggedIn,
  cookies,
}: {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  cookies: Cookies;
}) {
  const { open } = useToastStore();

  return (
    <If condition={loggedIn}>
      <If.Then>
        <SheetClose
          className='text-neutral-400'
          onClick={() => {
            cookies.remove(COOKIE_KEYS.accessToken);
            setLoggedIn(false);
            open('로그아웃 되었습니다.', { type: 'success' });
          }}
        >
          로그아웃
        </SheetClose>
      </If.Then>

      <If.Else>
        <Link href={'/ko/login'}>
          <SheetClose className='text-neutral-400 flex items-center gap-2'>
            <IoPersonSharp />
            로그인
          </SheetClose>
        </Link>
      </If.Else>
    </If>
  );
}
