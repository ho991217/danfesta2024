import { Separator } from '@components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@components/ui/sheet';
import { getTranslations } from 'next-intl/server';
import { getLocale } from 'next-intl/server';
import { IoIosMenu } from 'react-icons/io';

import Button from '../button';
import IntlProvider from '../intl-provider';
import LocaleSwitcher from '../locale-switcher';
import AuthGroup from './auth-group';
import NavLink from './nav-link';

export type LinkInfo = {
  id: number;
  link: string;
  nameKey: string;
  privateRoute?: boolean;
};

const links: LinkInfo[] = [
  {
    id: 1,
    link: '/',
    nameKey: 'home',
  },
  {
    id: 2,
    link: '/ticketing',
    nameKey: 'ticketing',
    privateRoute: true,
  },
  {
    id: 3,
    link: '/stamp',
    nameKey: 'stamp',
    privateRoute: true,
  },
  {
    id: 4,
    link: '/events',
    nameKey: 'events',
  },
  {
    id: 5,
    link: '/notice',
    nameKey: 'notice',
  },
];

export default async function SideNav() {
  const locale = await getLocale();
  const t = await getTranslations('SideNav');

  const className =
    'text-neutral-400 flex items-center justify-end gap-2 w-full text-end py-3 px-4 rounded-lg active:scale-[0.98] active:dark:bg-neutral-800 active:bg-neutral-200 transition-all duration-200 ease-in-out';

  return (
    <Sheet>
      <Button
        variant="transparent"
        animateOnClick
        className="w-auto h-auto p-1"
      >
        <SheetTrigger asChild>
          <IoIosMenu size={40} />
        </SheetTrigger>
      </Button>

      <SheetContent className="bg-white dark:bg-[#0C0C0C] dark:border-[#181818] flex flex-col justify-between">
        <div className="flex flex-col items-end gap-4">
          <IntlProvider>
            <AuthGroup className={className} />
          </IntlProvider>
          <Separator />
          <ul className="flex flex-col items-end gap-1 w-full">
            {links.map((link) => (
              <NavLink
                key={link.id}
                className={className}
                link={link.link}
                privateRoute={link.privateRoute}
              >
                {t(link.nameKey)}
              </NavLink>
            ))}
          </ul>
        </div>
        {/* <IntlProvider>
          <LocaleSwitcher />
        </IntlProvider> */}
      </SheetContent>
    </Sheet>
  );
}
