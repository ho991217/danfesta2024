import SideNav from './side-nav';
import { useTranslations } from 'next-intl';

export default function Navigation() {
  const t = useTranslations('GNB');
  return (
    <nav className='flex w-full justify-between items-start h-[100px]'>
      <div className='flex flex-col justify-start'>
        <h1 className='font-bold text-lg'>{t('title')}</h1>
        <span className='text-neutral-500 dark:text-neutral-400 text-sm font-normal'>
          {t('description')}
        </span>
      </div>
      <div>
        <SideNav />
      </div>
    </nav>
  );
}
