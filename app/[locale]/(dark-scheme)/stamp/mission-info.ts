import Stamp1 from '@images/stamp/스탬프판_문체-02.webp';
import Stamp2 from '@images/stamp/스탬프판_문체-03.webp';
import Stamp3 from '@images/stamp/스탬프판_문체-04.webp';
import Stamp4 from '@images/stamp/스탬프판_문체-05.webp';
import Stamp5 from '@images/stamp/스탬프판_문체-06.webp';
import Stamp6 from '@images/stamp/스탬프판_문체-07.webp';
import Stamp7 from '@images/stamp/스탬프판_문체-08.webp';
import { StaticImageData } from 'next/image';

export type MissionInfo = {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  done: boolean;
  stampImage: StaticImageData;
};

export const missionInfo: MissionInfo[] = [
  {
    id: 1,
    title: '스탬프 1',
    description: '스탬프 1 설명',
    image: '스탬프 1 이미지',
    location: '스탬프 1 위치',
    done: false,
    stampImage: Stamp1,
  },
  {
    id: 2,
    title: '스탬프 2',
    description: '스탬프 2 설명',
    image: '스탬프 2 이미지',
    location: '스탬프 2 위치',
    done: false,
    stampImage: Stamp2,
  },
  {
    id: 3,
    title: '스탬프 3',
    description: '스탬프 3 설명',
    image: '스탬프 3 이미지',
    location: '스탬프 3 위치',
    done: false,
    stampImage: Stamp3,
  },
  {
    id: 4,
    title: '스탬프 4',
    description: '스탬프 4 설명',
    image: '스탬프 4 이미지',
    location: '스탬프 4 위치',
    done: false,
    stampImage: Stamp4,
  },
  {
    id: 5,
    title: '스탬프 5',
    description: '스탬프 5 설명',
    image: '스탬프 5 이미지',
    location: '스탬프 5 위치',
    done: false,
    stampImage: Stamp5,
  },
  {
    id: 6,
    title: '스탬프 6',
    description: '스탬프 6 설명',
    image: '스탬프 6 이미지',
    location: '스탬프 6 위치',
    done: false,
    stampImage: Stamp6,
  },
  {
    id: 7,
    title: '스탬프 7',
    description: '스탬프 7 설명',
    image: '스탬프 7 이미지',
    location: '스탬프 7 위치',
    done: false,
    stampImage: Stamp7,
  },
];
