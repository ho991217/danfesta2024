import { Card } from '@components/ticketing';
import { getTranslations } from 'next-intl/server';

import { getEvents } from './action';

export default async function Page() {
  const events = await getEvents();
  const t = await getTranslations('Ticketing.page');
  return (
    <div className="flex flex-col gap-4">
      {events.length > 0 ? (
        events.map((e) => <Card key={e.id} {...e} />)
      ) : (
        <span className="text-neutral-300 dark:text-neutral-800">
          {t('no-event')}
        </span>
      )}
    </div>
  );
}
