'use client';

import { useAuth } from '@/hooks';
import { IoPersonSharp } from 'react-icons/io5';
import If from '@/components/util/if';
import { SheetClose } from '@/components/ui/sheet';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import useAuthStore from '@/store/auth-store';

export default function AuthButton() {
  const { logout } = useAuth();
  const { isLoggedIn } = useAuthStore();
  const locale = useLocale();

  return (
    <If condition={isLoggedIn}>
      <If.Then>
        <SheetClose
          className='text-neutral-400 flex items-center gap-2'
          onClick={logout}
        >
          <IoPersonSharp />
          로그아웃
        </SheetClose>
      </If.Then>

      <If.Else>
        <Link href={`/${locale}/login`}>
          <SheetClose className='text-neutral-400 flex items-center gap-2'>
            <IoPersonSharp />
            로그인
          </SheetClose>
        </Link>
      </If.Else>
    </If>
  );
}
