import { AnimatePresence, motion } from 'framer-motion';
import LocaleSwitcher from '../locale-switcher';
import Link from 'next/link';
import { COOKIE_KEYS } from '@/app/constants';
import { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import Show from '@/app/utils/show';
import Overlay from '../overlay';
import { transition, variants } from './motion';

type SideNavProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function SideNav({ isOpen, setIsOpen }: SideNavProps) {
  const cookies = useCookies();
  const [loggedIn, setLoggedIn] = useState(
    cookies.get(COOKIE_KEYS.accessToken) !== undefined
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.aside
            variants={variants}
            transition={transition}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='fixed top-0 right-0 z-50 w-64 h-screen dark:bg-neutral-800 dark:text-white bg-neutral-100 text-black'
          >
            <div className='flex items-center justify-end'>
              <LocaleSwitcher />
              {loggedIn ? (
                <span
                  className='text-neutral-400'
                  onClick={() => {
                    cookies.remove(COOKIE_KEYS.accessToken);
                    setLoggedIn(false);
                  }}
                >
                  로그아웃
                </span>
              ) : (
                <Link href={'/ko/login'}>
                  <span className='text-neutral-400'>로그인</span>
                </Link>
              )}
            </div>
            <nav className='flex flex-col gap-2 p-4 items-end'>
              <Link href='/' className='hover:underline'>
                Home
              </Link>
              <a href='#' className='hover:underline'>
                About
              </a>
              <a href='#' className='hover:underline'>
                Contact
              </a>
            </nav>
          </motion.aside>
          <Overlay onClick={() => setIsOpen(false)} />
        </>
      )}
    </AnimatePresence>
  );
}
