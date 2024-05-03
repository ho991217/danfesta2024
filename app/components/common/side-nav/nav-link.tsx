'use client';

import { getIsLoggedIn } from '@/app/api';
import { Link } from '@/app/components/common';
import { SheetClose } from '@/app/components/ui/sheet';
import { useAuth } from '@/app/hooks';
import { cn } from '@/app/lib/utils';

type NavLinkProps = {
  link: string;
  children?: React.ReactNode;
  className?: string;
  privateRoute?: boolean;
};

export default function NavLink({
  link,
  children,
  className,
  privateRoute,
}: NavLinkProps) {
  const { isLoggedIn } = useAuth();

  if (privateRoute) {
    try {
      if (!isLoggedIn) return null;

      return (
        <li className="flex justify-end w-full">
          <Link href={link} className={cn('w-full', className)}>
            <SheetClose className="flex w-full items-center justify-end">
              {children}
            </SheetClose>
          </Link>
        </li>
      );
    } catch {
      return null;
    }
  }

  return (
    <li className="flex justify-end w-full">
      <Link href={link} className={cn('w-full', className)}>
        <SheetClose className="flex w-full items-center justify-end">
          {children}
        </SheetClose>
      </Link>
    </li>
  );
}
