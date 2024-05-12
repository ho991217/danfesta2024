import { get } from '@/app/api';
import { track } from '@vercel/analytics';

import Carousel from './carousel';

export type Ad = {
  id: number;
  bannerUrl: string;
  images: [
    {
      id: number;
      url: string;
      originalName: string;
      mimeType: string;
    },
  ];
};

export default async function AdBanner() {
  const ads = await get<Ad[]>('/banner');

  return (
    <div className="w-full relative px-5 aspect-[728/140]">
      <Carousel ads={ads.sort(() => 0.5 - Math.random())} />
    </div>
  );
}
