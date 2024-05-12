'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

import { Ad } from '.';
import IntlProvider from '../intl-provider';
import Block from './block';

export default function Carousel({ ads }: { ads: Ad[] }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay({ playOnInit: true, delay: 3000 })],
  );

  return (
    <IntlProvider>
      <div className="absolute left-0 right-0 lg:max-w-[600px]" ref={emblaRef}>
        <div className="flex gap-3 lg:gap lg:max-w-[600px]">
          {ads.map((ad, index) => (
            <Block key={index} ad={ad} />
          ))}
        </div>
      </div>
    </IntlProvider>
  );
}
