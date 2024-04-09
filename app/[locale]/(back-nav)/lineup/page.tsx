import { get } from '@/api';
import Carousel from '@/components/common/carousel';
import { API_ROUTES } from '@/constants';
import parseFestivalDate from '@/lib/utils/parser/parse-festival-date';

export type FestivalDate = 'FIRST_DAY' | 'SECOND_DAY' | 'THIRD_DAY';

export type LineupImage = {
  url: string;
  originalName: string;
  mimeType: string;
};

[
  {
    id: 978,
    singer: '아이유',
    images: [
      {
        url: 'https://api-storage.cloud.toast.com/v1/AUTH_34f4838a2b3047f39ac9cb0701558e46/main-storage/image/LineUp-9a52d198-d890-46f8-9abb-9f3830d680a8.webp',
        originalName: '182234776_317438403085816_2271008730834590018_n.webp',
        mimeType: 'image/webp',
      },
    ],
    description: '아이유의 공연입니다.',
    performanceTime: '2024-05-20 18:00:00',
    festivalDate: 'FIRST_DAY',
    opened: true,
  },
];

export type LineupInfo = {
  id: number | null;
  singer: string | '공개 예정';
  images: LineupImage[];
  description: string | '공개 예정';
  performanceTime: string | null;
  festivalDate: FestivalDate | null;
  opened: boolean;
};

export default async function LineupPage() {
  const allDay = ['FIRST_DAY', 'SECOND_DAY', 'THIRD_DAY'] as const;
  const data = await Promise.all(
    allDay.map((day) => get<LineupInfo[]>(API_ROUTES.lineup.list(day)))
  );

  return (
    <div className='flex flex-col gap-4 mb-20 px-5'>
      {data.map((d, i) => (
        <>
          <div>
            <h2 className='text-2xl font-bold'>{i + 1}일차</h2>
          </div>
          <div key={i} className='w-full aspect-[3/4] relative'>
            <Carousel images={d} />
          </div>
        </>
      ))}
    </div>
  );
}
