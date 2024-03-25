import { FestivalEvent } from '@app/[locale]/(navigation)/ticketing/action';
import {
  Card as CardComponent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FiCalendar, FiClock } from 'react-icons/fi';
import If from '@/components/util/if';
import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';

export default async function Card({ id, name, from, to }: FestivalEvent) {
  const fromTime = new Date(from);
  const toTime = new Date(to);
  const now = new Date();
  const isOpen = now >= fromTime && now <= toTime;
  const locale = await getLocale();

  return (
    <Link
      href={isOpen ? `/${locale}/ticketing/${id}` : ''}
      className={!isOpen ? 'pointer-events-none' : ''}
      aria-disabled={!isOpen}
      tabIndex={!isOpen ? -1 : undefined}
    >
      <CardComponent
        className={twMerge(
          'w-full rounded-2xl',
          !isOpen &&
            'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500'
        )}
      >
        <CardHeader className='flex flex-row gap-4'>
          <Avatar className='scale-[1.2]'>
            <AvatarImage src='/images/avatar.png' alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className='flex gap-4 flex-col'>
            <CardTitle>{name}</CardTitle>
            <div className='flex items-center gap-2'>
              <OpenDot isOpen={isOpen} />
              <CardDescription>
                <If condition={isOpen}>
                  <If.Then>오픈</If.Then>
                  <If.Else>티켓팅 오픈 전</If.Else>
                </If>
              </CardDescription>
            </div>
          </div>
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
