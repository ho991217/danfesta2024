import { cn } from '@/lib/utils';
import Link from '@components/common/link';
import { useTranslations } from 'next-intl';
import { IoArrowBackOutline } from 'react-icons/io5';

import If from '../util/if';
import SideNav from './side-nav';

type Props = {
  hasBackButton?: boolean;
  title?: string;
};

export default function Navigation({ hasBackButton = false, title }: Props) {
  const t = useTranslations('GNB');
  return (
    <nav
      className={cn(
        'flex w-full justify-between items-start px-5',
        hasBackButton ? 'py-5' : 'h-[100px] pt-5',
      )}
    >
      <If condition={hasBackButton}>
        <If.Then>
          <Link back>
            <IoArrowBackOutline size={25} />
          </Link>
        </If.Then>
        <If.Else>
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-lg">{t('title')}</h1>
            <span className="text-neutral-500 dark:text-neutral-400 text-sm font-normal">
              {t('description')}
            </span>
          </div>

          <SideNav />
        </If.Else>
      </If>
    </nav>
  );
}
