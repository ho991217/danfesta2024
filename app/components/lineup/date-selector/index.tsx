import { FestivalDate } from '@page/(back-nav)/(padded)/lineup/page';

import DateBlock from './date-block';

const days = [
  {
    performanceTime: '2024-05-24',
    festivalDate: 'FIRST_DAY' as FestivalDate,
  },
  {
    performanceTime: '2024-05-25',
    festivalDate: 'SECOND_DAY' as FestivalDate,
  },
  {
    performanceTime: '2024-05-26',
    festivalDate: 'THIRD_DAY' as FestivalDate,
  },
];

export default function DateSelector({
  selectedDay,
}: {
  selectedDay: FestivalDate;
}) {
  const year = new Date(days[0].performanceTime).getFullYear();
  const month = new Date(days[0].performanceTime).getMonth();
  const day = new Date(days[0].performanceTime).getDate();

  const beforeOneDay = new Date(year, month, day - 1);
  const afterOneDay = new Date(year, month, day + 3);

  return (
    <div className="w-full h-16 flex items-center justify-between">
      <DateBlock date={beforeOneDay} disabled />
      {days.map((day, index) => (
        <DateBlock
          key={index}
          date={new Date(day.performanceTime)}
          festivalDate={day.festivalDate}
          selected={day.festivalDate === selectedDay}
        />
      ))}
      <DateBlock date={afterOneDay} disabled />
    </div>
  );
}
