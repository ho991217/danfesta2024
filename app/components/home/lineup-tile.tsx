import { useTranslations } from 'next-intl';
import { Link } from '@lib/navigation';
import dynamic from 'next/dynamic';
import { TileProps } from '../common/carousel';
import { getLocale } from 'next-intl/server';

const Carousel = dynamic(() => import('../common/carousel'));

const data: TileProps[] = [
  {
    src: 'https://arconline.co.uk/app/uploads/2023/06/Cold-play-for-web2.jpg',
    alt: 'thumbnail',
  },
  {
    src: 'https://arconline.co.uk/app/uploads/2023/06/Cold-play-for-web2.jpg',
    alt: 'thumbnail',
  },
  {
    src: 'https://arconline.co.uk/app/uploads/2023/06/Cold-play-for-web2.jpg',
    alt: 'thumbnail',
  },
];

export default function LineupTile() {
  const t = useTranslations('LineupTile');

  return (
    <div className='w-full'>
      <div className='w-full flex justify-between items-end mb-4'>
        <h3 className='text-2xl font-bold'>{t('title')}</h3>
        <Link href='/lineup' className='text-base font-normal text-pr'>
          {t('seeAll')}
        </Link>
      </div>
      <div>
        <Carousel images={data} />
      </div>
    </div>
  );
}
