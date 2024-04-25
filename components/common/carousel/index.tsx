'use client';

import { type LineupInfo } from '@/app/[locale]/(back-nav)/lineup/page';
import useEmblaCarousel from 'embla-carousel-react';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import React from 'react';

import en from '../../../messages/en.json';
import ko from '../../../messages/ko.json';
import Tile from './tile';

type CarouselProps = {
  lineups: LineupInfo[];
};

export default function Carousel({ lineups }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel();
  const locale = useLocale();

  return (
    <NextIntlClientProvider
      messages={locale === 'en' ? en : ko}
      timeZone="Asia/Seoul"
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
      <div className="absolute left-0 right-0 lg:max-w-[600px]" ref={emblaRef}>
        <div className="flex gap-3 lg:gap lg:max-w-[600px]">
          {lineups.map((tile, index) => (
            <Tile key={index} priority={index === 0} {...tile} />
          ))}
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
