import { Ticket } from '@components/my-tickets';
import { Accordion } from '@components/ui/accordion';
import { If } from '@components/util';

import { getMyTicketList } from './action';

export default async function Page() {
  const tickets = await getMyTicketList();

  return (
    <section className="flex w-full flex-col items-center justify-start gap-4 pb-20">
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
}
