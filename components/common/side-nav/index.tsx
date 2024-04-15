import { ROUTES } from '@/constants';
import en from '@/messages/en.json';
import ko from '@/messages/ko.json';
import { Separator } from '@components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@components/ui/sheet';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { IoIosMenu } from 'react-icons/io';

import LocaleSwitcher from '../locale-switcher';
import AuthButton from './auth-button';
import Link from './link';

export type LinkInfo = {
  id: number;
  link: string;
  nameKey: string;
  privateRoute?: boolean;
};

const links: LinkInfo[] = [
  {
    id: 1,
    link: ROUTES.home,
    nameKey: 'home',
  },
  {
    id: 2,
    link: ROUTES.ticketing.root,
    nameKey: 'ticketing',
    privateRoute: true,
  },
  {
    id: 3,
    link: '/events',
    nameKey: 'events',
  },
  {
    id: 4,
    link: '/live-map',
    nameKey: 'liveMap',
  },
  {
    id: 5,
    link: ROUTES.notice,
    nameKey: 'notice',
  },
];

export default async function SideNav() {
  const locale = await getLocale();

  const className =
    'text-neutral-400 flex items-center justify-end gap-2 w-full text-end py-3 px-4 rounded-lg active:scale-[0.98] active:dark:bg-neutral-800 active:bg-neutral-200 transition-all duration-200 ease-in-out';

  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoIosMenu size={40} />
      </SheetTrigger>

      <SheetContent className="bg-white dark:bg-[#0C0C0C] dark:border-[#181818] flex flex-col justify-between">
        <div className="flex flex-col items-end gap-4">
          <ul className="flex flex-col items-end gap-1 w-full">
            {links.map((link) => (
              <Link key={link.id} className={className} {...link} />
            ))}
          </ul>
          <Separator />
          <NextIntlClientProvider
            locale={locale}
            timeZone="Asia/Seoul"
            messages={locale === 'ko' ? ko : en}
          >
            <AuthButton className={className} />
          </NextIntlClientProvider>
        </div>
        <NextIntlClientProvider
          locale={locale}
          timeZone="Asia/Seoul"
          messages={locale === 'ko' ? ko : en}
        >
          <LocaleSwitcher />
        </NextIntlClientProvider>
      </SheetContent>
    </Sheet>
  );
}
