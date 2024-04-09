import { Card } from '@/components/ticketing';
import { get } from '@/api';
import { API_ROUTES } from '@/constants';

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
      <div className='flex flex-col gap-4 px-5'>
        {events.map((e) => (
          <Card key={e.id} {...e} />
        ))}
      </div>
    );
  } catch (e) {
    const error = e as Error;
    return (
      <div className='flex flex-col gap-4 px-5'>
        <span className='text-neutral-300 dark:text-neutral-800'>
          {/* 이벤트가 없습니다. */}
          {error.message}
        </span>
      </div>
    );
  }
}
