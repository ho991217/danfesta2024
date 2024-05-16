'use client';

import { cn } from '@lib/utils';
import type { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { PropsWithChildren, useCallback, useEffect } from 'react';

import IntlProvider from '../intl-provider';

type CarouselProps = PropsWithChildren<{
  loop?: boolean;
  autoplay?: boolean;
  slidesInView?: (slides: number[]) => void;
  className?: string;
}>;

export default function Carousel({
  children,
  loop = false,
  autoplay = false,
  slidesInView,
  className,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
    },
    [...(autoplay ? [Autoplay({ playOnInit: true, delay: 3000 })] : [])],
  );

  const setSlidesInView = useCallback(
    (emblaApi: EmblaCarouselType) => {
      slidesInView?.(emblaApi.slidesInView());
    },
    [slidesInView],
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('settle', setSlidesInView);
    }
  }, [emblaApi, setSlidesInView]);

  return (
    <IntlProvider>
      <div className={cn('absolute left-0 right-0', className)} ref={emblaRef}>
        <div className="flex gap-3 h-full">{children}</div>
      </div>
    </IntlProvider>
  );
}

export * as Tile from './tile';
