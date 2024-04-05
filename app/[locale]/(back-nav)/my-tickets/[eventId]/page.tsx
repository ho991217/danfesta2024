import Ticket from '@/components/my-tickets/ticket';
import { getMyTicket } from '../action';

export default async function Detail({
  params: { eventId },
}: {
  params: { eventId: number };
}) {
  try {
    const { id } = await getMyTicket(eventId);

    return (
      <section className='flex flex-col px-5 pt-5 w-full h-[calc(100dvh-100px)] bg-primary items-center'>
        <Ticket ticketId={id} />
      </section>
    );
  } catch (e) {
    const err = e as Error;

    return (
      <section className='flex flex-col px-5 pt-5 w-full h-[calc(100dvh-100px)] items-center text-neutral-400 dark:text-neutral-800'>
        {err.message}
      </section>
    );
  }
}
