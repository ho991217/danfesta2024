import If from '@/components/util/if';
import { getMyTicketList } from './action';
import dynamic from 'next/dynamic';

const Ticket = dynamic(() => import('@/components/my-tickets/ticket'));

export default async function Page() {
  const tickets = await getMyTicketList();

  return (
    <section className='flex flex-col items-center justify-start w-full'>
      <If condition={tickets.length > 0}>
        <If.Then>
          {tickets.map((ticketId) => (
            <Ticket key={ticketId} id={ticketId} />
          ))}
        </If.Then>
        <If.Else>
          <span className='text-neutral-400 dark:text-neutral-600'>
            티켓이 없습니다.
          </span>
        </If.Else>
      </If>
    </section>
  );
}
