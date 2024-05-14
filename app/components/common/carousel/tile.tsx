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
          placeholder="blur"
          quality={80}
          blurDataURL="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"
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
