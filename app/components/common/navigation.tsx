'use client';

import { IoIosMenu } from 'react-icons/io';
import SideNav from './side-nav';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('GNB');
  return (
    <>
      <nav className='flex w-full justify-between items-center pt-5 pb-8 h-[100px]'>
        <div className='flex flex-col justify-start'>
          <h1 className='font-bold text-lg'>{t('title')}</h1>
          <span className='text-neutral-500 dark:text-neutral-400 text-sm font-normal'>
            {t('description')}
          </span>
        </div>
        <div>
          <IoIosMenu size={40} onClick={() => setIsOpen((prev) => !prev)} />
        </div>
      </nav>
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
