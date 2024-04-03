import { useFormatter, useTranslations } from 'next-intl';
import Image from 'next/image';
import { FiCalendar, FiClock, FiHeart } from 'react-icons/fi';

export type TileProps = {
  src: string;
  alt: string;
  artistName: string;
};

export default function Tile({ src, alt, artistName }: TileProps) {
  const format = useFormatter();
  const t = useTranslations('Carousel');

  return (
    <div className='flex-[0_0_100%] aspect-[3/4] bg-neutral-500 rounded-2xl overflow-hidden relative'>
      <Image
        src={src}
        alt={alt}
        className='absolute left-0 right-0 top-0 bottom-0 object-cover'
        placeholder='blur'
        quality={100}
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
        fill
      />
      <div className='absolute p-4 flex flex-col justify-between h-1/3 left-4 right-4 bottom-4 bg-neutral-700 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 text-white shadow-lg'>
        <span className='text-xs flex gap-2 items-center'>
          <FiHeart color='white' />
          {t('nextup')}
        </span>
        <div>
          <h4 className='font-bold text-2xl'>{artistName}</h4>
          <span className='text-sm'>Coldplay</span>
        </div>
        <div className='text-sm flex gap-4 font-normal'>
          <span className='flex gap-2 items-center justify-center'>
            <FiCalendar color='white' />
            {format.dateTime(new Date('2024-03-09T10:36:01.516Z'), 'short')}
          </span>
          <span className='flex gap-2 items-center justify-center'>
            <FiClock color='white' />
            19:00
          </span>
        </div>
      </div>
    </div>
  );
}
