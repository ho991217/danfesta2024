'use client';

import { FestivalDate } from '@/app/[locale]/(back-nav)/(padded)/lineup/page';
import { cn } from '@lib/utils';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

import { Link } from '../../common';

type DateBlockProps = {
  date: Date;
  festivalDate?: FestivalDate;
  className?: string;
  selected?: boolean;
  disabled?: boolean;
};

export default function DateBlock({
  date,
  className,
  disabled,
  selected,
  festivalDate,
}: DateBlockProps) {
  const locale = useLocale();

  return (
    <Link
      replace
      href={`/lineup?day=${festivalDate}`}
      className={cn(
        'flex flex-col h-full justify-center items-center rounded-xl flex-1 relative gap-1',
        disabled && 'text-neutral-400 dark:text-neutral-700',
        selected && 'text-white',
        className,
      )}
    >
      <div className="text-xl font-bold">{date.getDate()}</div>
      <div className="text-xs font-medium">
        {date.toLocaleDateString(locale, { weekday: 'short' })}
      </div>
      {selected && (
        <motion.div
          className="w-full h-full bg-primary-500 rounded-xl absolute top-0 left-0 right-0 bottom-0 bg-primary -z-10"
          transition={{ duration: 0.25 }}
          layoutId="date-block"
        />
      )}
    </Link>
  );
}
