import { FestivalEvent } from '@/app/[locale]/(back-nav)/ticketing/page';
import {
  Card as CardComponent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { get } from '@/api';
import { API_ROUTES } from '@/constants';

export default async function Card({ id, name, from, to }: FestivalEvent) {
  const fromTime = new Date(from);
  const toTime = new Date(to);
  const now = new Date();
  const isOpen = now >= fromTime && now <= toTime;
  const locale = await getLocale();

  const { turn } = await get<{ turn: number }>(
    API_ROUTES.ticket.reservation(Number(id)),
    {
      withCredentials: true,
    }
  );
  const isAlreadyTurn = turn !== null;

  const generateOpenText = () => {
    if (isOpen) return '오픈';
    if (now < fromTime) return '오픈 전';
    return '종료';
  };

  return (
    <Link
      href={isOpen ? `/${locale}/ticketing/${id}` : ''}
      className={!isOpen || isAlreadyTurn ? 'pointer-events-none' : ''}
      aria-disabled={!isOpen || isAlreadyTurn}
      tabIndex={!isOpen || isAlreadyTurn ? -1 : undefined}
    >
      <CardComponent
        className={twMerge(
          'w-full rounded-2xl transition-colors duration-200 ease-in-out',
          !isOpen &&
            'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500'
        )}
      >
        <CardHeader className='flex flex-row justify-between items-start min-h-[115px]'>
          <div className='flex gap-2 flex-col'>
            <CardTitle>{name}</CardTitle>
            <div className='flex items-center gap-2'>
              <OpenDot isOpen={isOpen} />
              <CardDescription>{generateOpenText()}</CardDescription>
            </div>
          </div>
          {turn && (
            <div
              className='flex flex-col items-center justify-center gap-1'
              style={{ marginTop: 0 }}
            >
              <div className='text-2xl rounded-full bg-neutral-200 dark:bg-neutral-800 w-12 h-12 grid place-content-center'>
                {turn}
              </div>
              <span className='text-[10px] text-neutral-400 dark:text-neutral-600'>
                내 대기 순번
              </span>
            </div>
          )}
        </CardHeader>
        <CardFooter className='flex justify-between border-t-[1px] pt-5 dark:border-neutral-700'>
          <CardDescription className='flex flex-row items-center gap-2'>
            <FiCalendar />
            <span>{new Date(from).toLocaleDateString()}</span>
          </CardDescription>
          <CardDescription className='flex flex-row items-center gap-2'>
            <FiClock />
            <span>
              {new Date(from).getHours()}시 {new Date(from).getMinutes()}분
            </span>
          </CardDescription>
        </CardFooter>
      </CardComponent>
    </Link>
  );
}

function OpenDot({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={cn(
        'w-2 h-2 rounded-full animate-pulse',
        isOpen ? 'bg-green-500' : 'bg-red-500'
      )}
    />
  );
}
