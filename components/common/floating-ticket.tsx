'use client';

import { If } from '@/components/util';
import { useAuth } from '@/hooks';
import { ROUTES } from '@/lib/constants';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { BsTicketFill } from 'react-icons/bs';

const MotionLink = motion(Link);

function FloatingButton({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  const locale = useLocale();
  return (
    <MotionLink
      href={`/${locale}${href}`}
      className="fixed bottom-4 right-4 p-4 bg-primary text-white rounded-full shadow-lg z-50 font-bold"
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
    >
      {children}
    </MotionLink>
  );
}

export default function FloatingTicket() {
  const { isLoggedIn, isAdmin, userInfo } = useAuth();

  return (
    <AnimatePresence>
      {isLoggedIn && userInfo !== null && (
        <If condition={isAdmin}>
          <If.Then>
            <FloatingButton href={ROUTES.admin}>관리자 페이지</FloatingButton>
          </If.Then>
          <If.Else>
            <FloatingButton href={ROUTES.myTickets}>
              <BsTicketFill size={25} />
            </FloatingButton>
          </If.Else>
        </If>
      )}
    </AnimatePresence>
  );
}
