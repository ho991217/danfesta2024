import Image from 'next/image';

import { Ad } from '.';
import Link from '../link';

export default function Block({ ad }: { ad: Ad }) {
  return (
    <Link
      href={ad.bannerUrl}
      className="relative flex-[0_0_100%] overflow-hidden rounded-xl bg-neutral-500"
    >
      <Image
        className="object-cover w-full h-full"
        src={ad.images[0].url}
        alt={ad.images[0].originalName}
        width={728}
        height={140}
      />
    </Link>
  );
}
