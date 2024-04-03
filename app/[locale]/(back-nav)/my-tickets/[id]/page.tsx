import Ticket from '@/components/my-tickets/ticket';

export default function Detail({ params: { id } }: { params: { id: number } }) {
  return (
    <section className='flex flex-col px-5 pt-5 w-full h-[calc(100dvh-100px)] bg-primary items-center'>
      <Ticket ticketId={id} />
    </section>
  );
}
