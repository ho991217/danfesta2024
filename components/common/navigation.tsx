import Link from 'next/link';
import SideNav from './side-nav';
import { useTranslations } from 'next-intl';
import { IoArrowBackOutline } from 'react-icons/io5';
import If from '../util/if';

type Props = {
  hasBackButton?: boolean;
};

export default function Navigation({ hasBackButton = false }: Props) {
  const t = useTranslations('GNB');
  return (
    <nav className='flex w-full justify-between items-start h-[100px] px-5 pt-5'>
      <If condition={hasBackButton}>
        <If.Then>
          <Link href={'/'}>
            <IoArrowBackOutline size={25} />
          </Link>
        </If.Then>
        <If.Else>
          <div className='flex flex-col justify-start'>
            <h1 className='font-bold text-lg'>{t('title')}</h1>
            <span className='text-neutral-500 dark:text-neutral-400 text-sm font-normal'>
              {t('description')}
            </span>
          </div>
          <div>
            <SideNav />
          </div>
        </If.Else>
      </If>
    </nav>
  );
}
