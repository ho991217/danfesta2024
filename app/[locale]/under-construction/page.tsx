import { IntlProvider } from '@components/common';
import LocaleSwitcher from '@components/common/locale-switcher';
import { getTranslations } from 'next-intl/server';
import { FaGear } from 'react-icons/fa6';

export default async function UnderConstruction() {
  const t = await getTranslations('UnderConstruction');
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <section className="w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold flex gap-2 items-center">
          <FaGear className="animate-spin" />
          {t('title')}
        </h1>
        <p className="text-sm mt-2 max-w-[400px] text-neutral-500 text-center">
          {t.rich('description', {
            br: () => <br />,
          })}
        </p>
      </section>
      <div className="fixed bottom-5 w-full px-5">
        <IntlProvider>
          <LocaleSwitcher />
        </IntlProvider>
      </div>
    </main>
  );
}
