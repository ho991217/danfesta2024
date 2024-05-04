'use client';

import { SelectItem } from '@components/ui/select';
import { locales } from '@lib/navigation';
import { useLocale, useTranslations } from 'next-intl';

import LocaleSwitcherSelect from './locale-switcher-select';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <SelectItem key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
