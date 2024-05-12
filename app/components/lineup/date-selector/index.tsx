import { get } from '@api/.';
import { API_ROUTES } from '@lib/constants';
import { FestivalDate } from '@page/(back-nav)/(padded)/lineup/page';

import DateBlock from './date-block';

export default async function DateSelector({
  selectedDay,
}: {
  selectedDay: FestivalDate;
}) {
  const days = await get<
    {
      performanceTime: string;
      festivalDate: FestivalDate;
    }[]
  >(API_ROUTES.lineup.day);
  const year = new Date(days[0].performanceTime).getFullYear();
  const month = new Date(days[0].performanceTime).getMonth();
  const day = new Date(days[0].performanceTime).getDate();

  const beforeTwoDay = new Date(year, month, day - 2);
  const beforeOneDay = new Date(year, month, day - 1);
  const afterOneDay = new Date(year, month, day + 2);

  return (
    <div className="w-full h-16 flex items-center justify-between">
      <DateBlock date={beforeTwoDay} disabled />
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
