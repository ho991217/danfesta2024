import { Ticket } from '@components/my-tickets';

import { getMyTicket } from '../action';

export default async function Detail({
    params: { eventId },
}: {
    params: { eventId: number };
}) {
    try {
        const { id } = await getMyTicket(eventId);

        return (
            <section className="flex h-[calc(100dvh-100px)] w-full flex-col items-center bg-primary px-5 pt-5">
                <Ticket ticketId={id} />
            </section>
        );
    } catch (e) {
        const err = e as Error;

        return (
            <section className="flex h-[calc(100dvh-100px)] w-full flex-col items-center px-5 pt-5 text-neutral-400 dark:text-neutral-800">
                {err.message}
            </section>
        );
    }
}
