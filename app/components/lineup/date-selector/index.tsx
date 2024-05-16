'use client';

import { cn } from '@/app/lib/utils';
import { FestivalDate } from '@lib/types';
import { LineupDayInfo } from '@page/(back-nav)/(padded)/lineup/actions';
import dayjs from 'dayjs';

import DateBlock from './date-block';

type DateSelectorProps = {
  selectedDay: FestivalDate;
  availableDays: LineupDayInfo[];
};

export default function DateSelector({
  selectedDay,
  availableDays,
}: DateSelectorProps) {
  const selectedDate = dayjs(
    availableDays.find(({ festivalDate }) => festivalDate === selectedDay)
      ?.performanceTime,
  );

  const daysArr = Array.from({ length: 5 }, (_, i) =>
    selectedDate.add(i - 2, 'day'),
  );

  return (
    <div className="w-full h-16 flex items-center justify-between relative">
      {daysArr.map((date, index) => (
        <DateBlock
          key={index}
          date={date}
          festivalDate={
            availableDays.find(({ performanceTime }) =>
              date.isSame(performanceTime, 'day'),
            )?.festivalDate
          }
          className={cn(date.isSame(selectedDate, 'day') && 'text-white')}
          disabled={
            !availableDays.find(({ performanceTime }) =>
              date.isSame(performanceTime, 'day'),
            )
          }
        />
      ))}
      <div className="bg-primary rounded-xl h-full w-[20%] absolute left-1/2 -translate-x-1/2" />
    </div>
  );
}
