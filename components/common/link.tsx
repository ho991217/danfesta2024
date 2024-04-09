'use client';

import { useAuth } from '@/hooks';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import If from '../util/if';

type Props = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  back?: boolean;
  auth?: boolean;
};

export default function Link({
  children,
  href,
  className,
  back = false,
  auth = false,
}: Props) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const locale = useLocale();

  const checkAuth = () => {
    if (!isLoggedIn) {
      // requestAnimationFrame(() => {
      //   toast.error('로그인이 필요합니다.');
      // });
      router.push(`/${locale}/login`);
    }
  };

  return (
    <motion.div whileTap={{ scale: 0.98 }} className={className}>
      <If condition={back}>
        <If.Then>
          <button onClick={() => router.back()} className="w-full h-full">
            {children}
          </button>
        </If.Then>
        <If.Else>
          <NextLink
            href={href ? `/${locale}${href}` : `/${locale}`}
            className="w-full h-full"
            onClick={() => {
              if (auth) {
                checkAuth();
              }
            }}
          >
            {children}
          </NextLink>
        </If.Else>
      </If>
    </motion.div>
  );
}
