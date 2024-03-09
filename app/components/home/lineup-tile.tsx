import { useTranslations } from 'next-intl';
import { Link } from '@lib/navigation';
import dynamic from 'next/dynamic';
import { TileProps } from '../common/carousel';

const Carousel = dynamic(() => import('../common/carousel'));

const data: TileProps[] = [
  {
    src: 'https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/182234776_317438403085816_2271008730834590018_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1XwAY-VMtVYAX8utrHq&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCymd42z9HEpyFnNoXzsVU-J1DPbXbxbcsmY8o1Y5gHZg&oe=6613A687',
    alt: 'thumbnail',
  },
  {
    src: 'https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/182234776_317438403085816_2271008730834590018_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1XwAY-VMtVYAX8utrHq&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCymd42z9HEpyFnNoXzsVU-J1DPbXbxbcsmY8o1Y5gHZg&oe=6613A687',
    alt: 'thumbnail',
  },
  {
    src: 'https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/182234776_317438403085816_2271008730834590018_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1XwAY-VMtVYAX8utrHq&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCymd42z9HEpyFnNoXzsVU-J1DPbXbxbcsmY8o1Y5gHZg&oe=6613A687',
    alt: 'thumbnail',
  },
];

export default function LineupTile() {
  const t = useTranslations('LineupTile');

  return (
    <div className='w-full'>
      <div className='w-full flex justify-between items-end mb-4'>
        <h3 className='text-2xl font-bold'>{t('title')}</h3>
        <Link href='/lineup' className='text-base font-normal text-primary'>
          {t('seeAll')}
        </Link>
      </div>
      <div>
        <Carousel images={data} />
      </div>
    </div>
  );
}
