import { Card } from '@components/ticketing';

import { getEvents } from './action';

export default async function Page() {
  const events = await getEvents();
  return (
    <div className="flex flex-col gap-4">
      {events.length > 0 ? (
        events.map((e) => <Card key={e.id} {...e} />)
      ) : (
        <span className="text-neutral-300 dark:text-neutral-800">
          이벤트 정보가 없습니다.
        </span>
      )}
    </div>
  );
}
