import { LineupInfo } from '@/app/[locale]/(back-nav)/lineup/page';
import parseFestivalDate from '@/lib/utils/parser/parse-festival-date';
import { useFormatter, useTranslations } from 'next-intl';
import Image from 'next/image';
import { FiCalendar, FiClock, FiHeart } from 'react-icons/fi';

export default function Tile({
  images,
  singer,
  description,
  festivalDate,
  performanceTime,
}: LineupInfo) {
  const format = useFormatter();
  const t = useTranslations('Carousel');

  return (
    <div className='flex-[0_0_100%] aspect-[3/4] bg-neutral-500 rounded-2xl overflow-hidden relative'>
      {images[0]?.url && (
        <Image
          src={images[0].url}
          alt={images[0].originalName}
          className='absolute left-0 right-0 top-0 bottom-0 object-cover'
          placeholder='blur'
          quality={100}
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
          fill
        />
      )}
      <div className='absolute p-4 flex flex-col justify-between h-1/3 left-4 right-4 bottom-4 bg-neutral-700 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 text-white shadow-lg'>
        <span className='text-xs flex gap-2 items-center'>
          <FiHeart color='white' />
          {festivalDate
            ? `${parseFestivalDate(festivalDate)}일차 공연 아티스트`
            : '공개 예정'}
        </span>
        <div>
          <h4 className='font-bold text-2xl'>{singer}</h4>
          <span className='text-sm'>{description}</span>
        </div>
        <div className='text-sm flex gap-4 font-normal'>
          <span className='flex gap-2 items-center justify-center'>
            <FiCalendar color='white' />
            {performanceTime
              ? format.dateTime(new Date(performanceTime), 'short')
              : '공개 예정'}
          </span>
          <span className='flex gap-2 items-center justify-center'>
            <FiClock color='white' />{' '}
            {performanceTime
              ? format.dateTime(new Date(performanceTime), {
                  hour: 'numeric',
                  minute: 'numeric',
                })
              : '공개 예정'}
          </span>
        </div>
      </div>
    </div>
  );
}
