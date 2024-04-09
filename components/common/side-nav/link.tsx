import { getServerSideToken } from '@/api';
import { Link as NextLink } from '@/components/common';
import { SheetClose } from '@/components/ui/sheet';
import { getTranslations } from 'next-intl/server';

import { LinkInfo } from '.';

export default async function Link({
  link,
  nameKey,
  className,
  privateRoute,
}: LinkInfo & { className: string }) {
  const t = await getTranslations('SideNav');

  if (privateRoute) {
    try {
      await getServerSideToken();

      return (
        <li className="w-full flex justify-end">
          <NextLink href={link} className={className}>
            <SheetClose>{t(nameKey)}</SheetClose>
          </NextLink>
        </li>
      );
    } catch {
      return null;
    }
  }

  return (
    <li className="w-full flex justify-end">
      <NextLink href={link} className={className}>
        <SheetClose>{t(nameKey)}</SheetClose>
      </NextLink>
    </li>
  );
}
