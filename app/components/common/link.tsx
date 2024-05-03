'use client';

import { useAuth } from '@/app/hooks';
import { ROUTES } from '@/app/lib/constants';
import { cn } from '@/app/lib/utils';
import { useLocale } from 'next-intl';
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/navigation';

import If from '../util/if';
import Button, { ButtonProps } from './button';

type Props = {
  children: React.ReactNode;
  variant?: 'text' | ButtonProps['variant'];
  href?: string;
  className?: string;
  back?: boolean;
  auth?: boolean;
};

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
  const locale = useLocale();

  return (
    <If condition={back}>
      <If.Then>
        <button
          onClick={() => router.back()}
          className={cn('w-full h-full', className)}
        >
          {children}
        </button>
      </If.Then>
      <If.Else>
        {variant === 'text' ? (
          <NextLink
            href={
              !auth || isLoggedIn
                ? `/${locale}${href}`
                : `/${locale}${ROUTES.login}${href ? `?redirect=${decodeURIComponent(`/${locale}${href}`)}` : ``}`
            }
            className={cn(
              'w-full h-full flex justify-center items-center',
              className,
            )}
          >
            {children}
          </NextLink>
        ) : (
          <Button variant={variant} className={className} animateOnClick>
            <NextLink
              href={
                !auth || isLoggedIn
                  ? `/${locale}${href}`
                  : `/${locale}${ROUTES.login}${href ? `?redirect=${decodeURIComponent(`/${locale}${href}`)}` : ``}`
              }
              className="w-full h-full flex justify-center items-center"
            >
              {children}
            </NextLink>
          </Button>
        )}
      </If.Else>
    </If>
  );
}
