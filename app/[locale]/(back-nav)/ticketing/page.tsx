import { get } from '@/api';
import { API_ROUTES } from '@/lib/constants';
import { Card } from '@components/ticketing';

export type FestivalEvent = {
  id: number;
  name: string;
  from: string;
  to: string;
};

export default async function Page() {
  try {
    const events = await get<FestivalEvent[]>(API_ROUTES.ticket.event);

    return (
      <div className="flex flex-col gap-4 px-5">
        {events.map((e) => (
          <Card key={e.id} {...e} />
        ))}
      </div>
    );
  } catch {
    return (
      <div className="flex flex-col gap-4 px-5">
        <span className="text-neutral-300 dark:text-neutral-800">
          이벤트 정보가 없습니다.
        </span>
      </div>
    );
  }
}
