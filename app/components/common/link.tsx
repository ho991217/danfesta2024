'use client';

import { useAuth } from '@app/hooks';
import { Link as IntlLink } from '@lib/navigation';
import { cn } from '@lib/utils';
import { ComponentProps } from 'react';

import Button, { ButtonProps } from './button';

type Props = {
  children: React.ReactNode;
  variant?: 'text' | ButtonProps['variant'];
  className?: string;
  auth?: boolean;
  href: string | { pathname: string; query: Record<string, string> };
} & Omit<ComponentProps<typeof IntlLink>, 'href'>;

export default function Link({
  children,
  href,
  className,
  variant = 'text',
  auth = false,
}: Props) {
  const { isLoggedIn } = useAuth();

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
