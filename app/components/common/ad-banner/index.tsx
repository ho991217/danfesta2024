import { get } from '@api/.';


import Carousel from '../carousel';
import Block from './block';

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
      <Carousel loop autoplay>
        {ads.map((ad) => (
          <Block key={ad.id} ad={ad} />
        ))}
      </Carousel>
    </div>
  );
}
