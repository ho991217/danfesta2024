'use client';

import { useRouter } from '@lib/navigation';
import { useTranslations } from 'next-intl';

import { Checkbox } from '../ui/checkbox';

export default function ShowAll({ show }: { show: 'all' | 'active' }) {
  const router = useRouter();
  const t = useTranslations('Ticketing.show-all');
  const onToggle = () => {
    router.replace(`/ticketing?show=${show === 'active' ? 'all' : 'active'}`);
  };
  return (
    <div
      className="w-full flex items-center justify-end cursor-pointer text-neutral-500 text-sm gap-2"
      onClick={onToggle}
    >
      <span>{t('label')}</span>
      <Checkbox checked={show === 'all'} className="border-neutral-500" />
    </div>
  );
}
