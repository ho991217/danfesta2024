'use client';

import useEmblaCarousel from 'embla-carousel-react';
import React, { PropsWithChildren } from 'react';

import IntlProvider from '../intl-provider';

export default function Carousel({ children }: PropsWithChildren) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <IntlProvider>
      <div className="absolute left-0 right-0 lg:max-w-[600px]" ref={emblaRef}>
        <div className="flex gap-3 lg:gap lg:max-w-[600px]">{children}</div>
      </div>
    </IntlProvider>
  );
}

export * as Tile from './tile';
