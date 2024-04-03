'use client';

import { default as NextLink } from 'next/link';
import { useRouter } from 'next/navigation';
import If from '../util/if';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

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

  const checkAuth = () => {
    if (!isLoggedIn) {
      requestAnimationFrame(() => {
        toast.error('로그인이 필요합니다.');
      });
      router.push('/login');
    }
  };

  return (
    <motion.div whileTap={{ scale: 0.98 }} className={className}>
      <If condition={back}>
        <If.Then>
          <button onClick={() => router.back()} className='w-full h-full'>
            {children}
          </button>
        </If.Then>
        <If.Else>
          <NextLink
            href={href ?? '/'}
            className='w-full h-full'
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
