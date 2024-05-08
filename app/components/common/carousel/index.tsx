'use client';

import { type LineupInfo } from '@page/(back-nav)/lineup/page';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

import IntlProvider from '../intl-provider';
import Tile from './tile';

type CarouselProps = {
  lineups: LineupInfo[];
};

export default function Carousel({ lineups }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <IntlProvider>
      <div className="absolute left-0 right-0 lg:max-w-[600px]" ref={emblaRef}>
        <div className="flex gap-3 lg:gap lg:max-w-[600px]">
          {lineups.map((tile, index) => (
            <Tile key={index} priority={index === 0} {...tile} />
          ))}
        </div>
      </div>
    </IntlProvider>
  );
}
