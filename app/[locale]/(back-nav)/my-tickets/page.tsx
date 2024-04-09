import If from '@/components/util/if';
import { getMyTicketList } from './action';
import { TicketTile } from '@/components/my-tickets';

export default async function Page() {
  try {
    const tickets = await getMyTicketList();

    return (
      <section className='flex flex-col items-center justify-start w-full gap-4'>
        <If condition={tickets.length > 0}>
          <If.Then>
            {tickets.map((ticketId) => (
              <TicketTile key={ticketId} id={ticketId} />
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
  } catch (error) {
    const e = error as Error;
    console.error(error);
    return <span className='text-neutral-500'>{e.message}</span>;
  }
}
