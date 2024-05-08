'use client';

import { Link } from '@components/common';
import { SheetClose } from '@components/ui/sheet';
import { useAuth } from '@hooks/.';
import { cn } from '@lib/utils';

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
