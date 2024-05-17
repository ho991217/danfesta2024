import { IntlProvider } from '@components/common';
import { Card, ShowAll } from '@components/ticketing';
import { SearchParams } from '@lib/types';
import dayjs from 'dayjs';
import { getTranslations } from 'next-intl/server';

import { getEvents } from './action';

export default async function TicketingPage({
  searchParams: { show = 'active' },
}: SearchParams<{ show: 'all' | 'active' }>) {
  const all = await getEvents();
  const events = all.filter((e) =>
    show === 'active'
      ? dayjs(e.from).isBefore(dayjs()) && dayjs(e.to).isAfter(dayjs())
      : true,
  );
  const t = await getTranslations('Ticketing.page');
  return (
    <div className="flex flex-col gap-4 mb-20">
      <IntlProvider>
        <ShowAll show={show} />
      </IntlProvider>
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
