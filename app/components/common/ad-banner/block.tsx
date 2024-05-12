'use client';

import { track } from '@vercel/analytics';
import Image from 'next/image';

import { Ad } from '.';
import Link from '../link';

export default function Block({ ad }: { ad: Ad }) {
  const onAdClick = () => {
    track('ad-click', {
      adId: ad.id,
      adUrl: ad.bannerUrl,
    });
  };

  return (
    <Link
      href={ad.bannerUrl}
      className="relative flex-[0_0_100%] overflow-hidden rounded-xl bg-neutral-500"
    >
      <Image
        onClick={onAdClick}
        className="object-cover w-full h-full"
        src={ad.images[0].url}
        alt={ad.images[0].originalName}
        width={728}
        height={140}
      />
    </Link>
  );
}
