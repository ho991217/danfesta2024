import { useTranslations } from 'next-intl';
import { IoIosMenu } from 'react-icons/io';

// type NaviationItems = {
//   path: string;
//   title: string;
//   description: string;
// };

export default function Navigation() {
  const t = useTranslations('GNB');
  return (
    <nav className='flex w-full justify-between items-center pt-5 pb-8 h-[100px]'>
      <div className='flex flex-col justify-start'>
        <h1 className='font-bold text-lg'>{t('title')}</h1>
        <span className='text-neutral-500 dark:text-neutral-400 text-sm font-normal'>
          {t('description')}
        </span>
      </div>
      <div>
        <IoIosMenu size={40} />
      </div>
    </nav>
  );
}
