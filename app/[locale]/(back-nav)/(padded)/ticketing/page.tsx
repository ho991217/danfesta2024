import { Card } from '@components/ticketing';

import { getEvents } from './action';

export default async function Page() {
  try {
    const events = await getEvents();
    return (
      <div className="flex flex-col gap-4">
        {events ? (
          events.map((e) => <Card key={e.id} {...e} />)
        ) : (
          <span className="text-neutral-300 dark:text-neutral-800">
            이벤트 정보가 없습니다.
          </span>
        )}
      </div>
    );
  } catch (e) {
    console.error(e);
    return (
      <span className="text-neutral-300 dark:text-neutral-800">
        이벤트 정보를 불러오는 중 오류가 발생했습니다.
      </span>
    );
  }
}
