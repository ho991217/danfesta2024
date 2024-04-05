import Ticket from '@/components/my-tickets/ticket';
import { getMyTicket } from '../action';
import If from '@/components/util/if';

export default async function Detail({
  params: { eventId },
}: {
  params: { eventId: number };
}) {
  let ticketId;
  try {
    const { id } = await getMyTicket(eventId);
    ticketId = id;
  } catch (e) {
    ticketId = null;
  }

  return (
    <section className='flex flex-col px-5 pt-5 w-full h-[calc(100dvh-100px)] bg-primary items-center'>
      <If condition={!!ticketId}>
        <If.Then>{ticketId && <Ticket ticketId={ticketId} />}</If.Then>
        <If.Else>
          <span className='text-neutral-400 dark:text-neutral-600'>
            티켓이 없습니다.
          </span>
        </If.Else>
      </If>
    </section>
  );
}
