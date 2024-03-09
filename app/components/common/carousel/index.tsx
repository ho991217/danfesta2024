'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { FiCalendar, FiClock, FiHeart } from 'react-icons/fi';
import {
  NextIntlClientProvider,
  useFormatter,
  useTranslations,
  useLocale,
} from 'next-intl';
import en from '../../../../messages/en.json';
import ko from '../../../../messages/ko.json';

type CarouselProps = {
  images: TileProps[];
};

export type TileProps = {
  src: string;
  alt: string;
};

export default function Carousel({ images }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel();
  const locale = useLocale();

  return (
    <NextIntlClientProvider
      messages={locale === 'en' ? en : ko}
      timeZone='Asia/Seoul'
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          },
        },
      }}
      locale={locale}
    >
      <div
        className='absolute left-0 right-0 overflow-hidden px-6 mx-auto'
        ref={emblaRef}
      >
        <div className='flex gap-4'>
          {images.map((tile, index) => (
            <Tile key={index} src={tile.src} alt={tile.alt} />
          ))}
        </div>
      </div>
    </NextIntlClientProvider>
  );
}

function Tile({ src, alt }: TileProps) {
  const format = useFormatter();
  const t = useTranslations('Carousel');

  return (
    <div className='flex-[0_0_100%] aspect-[3/4] bg-neutral-500 rounded-2xl overflow-hidden relative'>
      <Image
        src={src}
        alt={alt}
        className='absolute left-0 right-0 top-0 bottom-0'
        objectFit='cover'
        fill
      />
      <div className='absolute p-4 flex flex-col justify-between h-[30%] left-6 right-6 bottom-6 bg-neutral-700 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 text-white shadow-lg'>
        <span className='text-xs flex gap-2 items-center'>
          <FiHeart color='white' />
          {t('nextup')}
        </span>
        <div>
          <h4 className='font-bold text-2xl'>콜드플레이</h4>
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
