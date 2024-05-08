'use client';

import { Link } from '@components/common';
import { If } from '@components/util';
import { useAuth } from '@hooks/.';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { BsTicketFill } from 'react-icons/bs';

export function FloatingButton({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  return (
    <motion.div
      className="fixed bottom-4 right-4 p-4 bg-primary text-white rounded-full shadow-lg z-50 font-bold"
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
    >
      <Link href={href}>{children}</Link>
    </motion.div>
  );
}

export default function FloatingTicket() {
  const { isLoggedIn, isAdmin, userInfo } = useAuth();

  return (
    <AnimatePresence>
      {isLoggedIn && userInfo !== null && (
        <If condition={isAdmin}>
          <If.Then>
            <FloatingButton href="/admin">관리자 페이지</FloatingButton>
          </If.Then>
          <If.Else>
            <FloatingButton href="/my-tickets">
              <BsTicketFill size={25} />
            </FloatingButton>
          </If.Else>
        </If>
      )}
    </AnimatePresence>
  );
}
