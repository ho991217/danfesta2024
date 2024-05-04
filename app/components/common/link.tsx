'use client';

import { useAuth } from '@app/hooks';
import { Link as IntlLink, Pathnames, useRouter } from '@lib/navigation';
import { CustomError, ErrorCause, cn } from '@lib/utils';
import { ComponentProps } from 'react';

import Button, { ButtonProps } from './button';

type Props = {
  children: React.ReactNode;
  variant?: 'text' | ButtonProps['variant'];
  className?: string;
  back?: boolean;
  auth?: boolean;
  href?: Pathnames | { pathname: Pathnames; query: Record<string, string> };
} & Omit<ComponentProps<typeof IntlLink>, 'href'>;

export default function Link({
  children,
  href,
  className,
  variant = 'text',
  back = false,
  auth = false,
}: Props) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  if (back) {
    return (
      <button
        onClick={() => router.back()}
        className={cn('w-full h-full', className)}
      >
        {children}
      </button>
    );
  }

  if (href === undefined)
    throw new CustomError(ErrorCause.INVALID, 'href is required');

  return variant === 'text' ? (
    <IntlLink
      href={
        !auth || isLoggedIn
          ? href
          : { pathname: '/login', query: { redirect: href.toString() } }
      }
      className={cn(
        'w-full h-full flex justify-center items-center',
        className,
      )}
    >
      {children}
    </IntlLink>
  ) : (
    <Button variant={variant} className={className} animateOnClick>
      <IntlLink
        href={
          !auth || isLoggedIn
            ? href
            : { pathname: '/login', query: { redirect: href.toString() } }
        }
        className="w-full h-full flex justify-center items-center"
      >
        {children}
      </IntlLink>
    </Button>
  );
}
