import LocaleSwitcher from '../locale-switcher';
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet';
import { IoIosMenu } from 'react-icons/io';
import AuthButton from './auth-button';
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import ko from '@/messages/ko.json';
import en from '@/messages/en.json';

export default async function SideNav() {
  const locale = await getLocale();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoIosMenu size={40} />
      </SheetTrigger>

      <SheetContent className='bg-white dark:bg-[#0C0C0C] dark:border-[#181818] flex flex-col justify-between'>
        <SheetDescription className='flex flex-col items-end gap-10'>
          <ul className='flex flex-col items-end gap-4'>
            <li>
              <Link href={`/${locale}`} className='hover:underline'>
                <SheetClose>홈</SheetClose>
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/ticketing`} className='hover:underline'>
                <SheetClose>티켓팅</SheetClose>
              </Link>
            </li>
          </ul>
          <AuthButton />
        </SheetDescription>
        <NextIntlClientProvider
          locale={locale}
          timeZone='Asia/Seoul'
          messages={locale === 'ko' ? ko : en}
        >
          <LocaleSwitcher />
        </NextIntlClientProvider>
      </SheetContent>
    </Sheet>
  );
}
