import { Ticket } from '@/app/components/my-tickets';
import { Accordion } from '@/app/components/ui/accordion';
import { If } from '@/app/components/util';

import { getMyTicketList } from './action';

export default async function Page() {
  try {
    const tickets = await getMyTicketList();

    return (
      <section className="flex w-full flex-col items-center justify-start gap-4 px-5 pb-20">
        <If condition={tickets.length > 0}>
          <If.Then>
            <Accordion type="multiple" className="flex flex-col w-full gap-4 ">
              {tickets.map((ticket) => (
                <Ticket key={ticket.id} {...ticket} />
              ))}
            </Accordion>
          </If.Then>
          <If.Else>
            <span className="text-neutral-400 dark:text-neutral-600">
              티켓이 없습니다.
            </span>
          </If.Else>
        </If>
      </section>
    );
  } catch (error) {
    const e = error as Error;
    console.error(error);
    return <span className="text-neutral-500">{e.message}</span>;
  }
}
