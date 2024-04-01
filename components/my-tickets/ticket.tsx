import { FiCalendar } from 'react-icons/fi';
import Link from 'next/link';
import TicketIcon from '@/public/images/ticket.svg';

export default async function Ticket({ id }: { id: number }) {
  return (
    <div className='relative py-4 px-6 w-[327px] h-[161px] flex flex-col justify-between items-start'>
      <div className='w-full flex flex-col gap-2'>
        <h4 className='font-bold text-base'>
          단국대학교 2024 단페스타 1일차 티켓
        </h4>
        <div className='flex items-center gap-2'>
          <FiCalendar color='#929497' />
          <span className='text-[#929497] text-sm'>
            {new Date('2024-04-01').toLocaleDateString()}
          </span>
          <span className='text-[#929497] text-sm'>~</span>
          <span className='text-[#929497] text-sm'>
            {new Date('2024-04-03').toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className='w-full'>
        <Link href='#' className='text-primary'>
          티켓 보기
        </Link>
      </div>

      <div className='absolute top-0 right-1/2 translate-x-1/2'>
        <TicketIcon />
      </div>
    </div>
  );
}
