import { Card } from '@/components/ticketing';
import getEvents from './action';

export default async function Page() {
  const events = await getEvents();

  return (
    <div className='flex flex-col gap-4'>
      {events.map((e) => (
        <Card key={e.id} {...e} />
      ))}
    </div>
  );
}
