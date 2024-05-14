'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { PropsWithChildren } from 'react';

import IntlProvider from '../intl-provider';

type CarouselProps = PropsWithChildren<{
  loop?: boolean;
  autoplay?: boolean;
}>;

export default function Carousel({
  children,
  loop = false,
  autoplay = false,
}: CarouselProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop,
    },
    [...(autoplay ? [Autoplay({ playOnInit: true, delay: 3000 })] : [])],
  );

  return (
    <IntlProvider>
      <div className="absolute left-0 right-0" ref={emblaRef}>
        <div className="flex gap-3">{children}</div>
      </div>
    </IntlProvider>
  );
}

export * as Tile from './tile';
