import NoLineup from '@images/lineup/no-lineup-image.webp';
import { parseFestivalDate } from '@lib/utils/parser';
import { LineupInfo } from '@page/(back-nav)/(padded)/lineup/page';
import { useFormatter } from 'next-intl';
import Image from 'next/image';
import { FiCalendar, FiHeart } from 'react-icons/fi';

export default function Tile({
  images,
  singer,
  description,
  festivalDate,
  performanceTime,
  priority = false,
}: LineupInfo & { priority?: boolean }) {
  const format = useFormatter();
  const imageUrl = images.length > 0 ? images[0].url : NoLineup.src;
  // const blurDataUrl =
  //   images.length > 0 ? images[0].blurImage : NoLineup.blurDataURL;
  const altText =
    images.length > 0 ? images[0].originalName : '아티스트 미공개';

  return (
    <div className="relative aspect-[3/4] flex-[0_0_100%] overflow-hidden rounded-2xl bg-neutral-500">
      <div className="relative aspect-[3/4]">
        <Image
          priority={priority}
          src={imageUrl}
          alt={altText}
          className="absolute bottom-0 left-0 right-0 top-0 object-cover rounded-2xl"
          placeholder="empty"
          quality={80}
          fill
        />
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex h-1/3 flex-col justify-between rounded-2xl bg-neutral-700 bg-opacity-0 bg-clip-padding p-4 text-white shadow-lg backdrop-blur-xl backdrop-filter">
        <span className="flex items-center gap-2 text-xs">
          <FiHeart />
          {festivalDate
            ? `${parseFestivalDate(festivalDate)}일차 공연 아티스트`
            : '공개 예정'}
        </span>
        <div>
          <h4 className="text-2xl font-bold">{singer}</h4>
          <span className="text-sm">{description}</span>
        </div>
        <div className="flex gap-4 text-sm font-normal">
          <span className="flex items-center justify-center gap-2">
            <FiCalendar />
            {performanceTime
              ? format.dateTime(new Date(performanceTime), {
                  dateStyle: 'long',
                })
              : '공개 예정'}
          </span>
        </div>
      </div>
    </div>
  );
}
