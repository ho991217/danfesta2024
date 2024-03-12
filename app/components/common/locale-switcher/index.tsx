import { useTranslations } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { locales } from '@lib/navigation';
import LocaleSwitcherSelect from './locale-switcher-select';

export default async function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = await getLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
