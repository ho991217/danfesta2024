import getUserInfo from '@api/get-is-user-info';
import { Link } from '@components/common';
import Logo from '@icons/orbit_logo.png';
import Universe from '@images/stamp/universe_bg.jpeg';
import StampBoard from '@images/stamp/스탬프판_문체.png';
import { cn } from '@lib/utils';
import Image from 'next/image';

import { getStampMissions } from './action';

const stampPosition = [
  '-bottom-[1px] left-[8px]',
  'bottom-[64px] left-[42px]',
  'bottom-[77px] left-[118px]',
  'bottom-[180px] left-[202px]',
  'bottom-[190px] left-[286px]',
  'bottom-[269px] left-[313px]',
  'bottom-[323px] left-[243px]',
];

const titlePosition = [
  '-bottom-11',
  'bottom-7',
  '-bottom-11',
  '-bottom-11',
  '-bottom-11',
  'bottom-7',
  'top-1/2 -translate-y-1/2 -left-3',
];

export default async function StampPage() {
  const { studentId, username } = await getUserInfo();
  const missionInfos = await getStampMissions();

  return (
    <div className="w-full h-full relative flex flex-col items-center px-5">
      <Image
        src={Universe}
        alt="stamp board"
        className="h-screen fixed top-0 left-1/2 transform -translate-x-1/2 object-cover -z-10 brightness-50"
      />
      <div className="w-full flex flex-col justify-between rounded-2xl bg-neutral-700 bg-opacity-0 bg-clip-padding p-6 text-white backdrop-blur-xl backdrop-filter gap-2">
        <span className="w-full text-center text-xl font-medium mb-2">
          별자리를 터치해 미션을 알아보세요!
        </span>
        <div className="flex flex-col items-center text-neutral-400">
          <span>학번: {studentId}</span>
          <span>이름: {username}</span>
        </div>
      </div>
      <div className="w-[400px] h-[400px] relative">
        {missionInfos.map((mission, index) => (
          <Link
            key={index}
            className={cn(
              'w-auto h-auto min-w-[80px] min-h-[80px] absolute z-20 animate-pulse flex flex-col items-center text-white text-xs font-medium',
              stampPosition[index],
            )}
            href={`/stamp/${index + 1}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={mission.stampImage}
                className={cn(
                  'w-[80px] h-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover',
                  mission.done ? 'visible' : 'invisible',
                )}
                width={80}
                height={80}
                alt={`스탬프 ${index + 1}`}
              />
              <span
                className={cn(
                  'absolute left-1/2 -translate-x-1/2 w-full text-center text-ellipsis',
                  titlePosition[index],
                )}
              >
                {mission.title}
              </span>
            </div>
          </Link>
        ))}
        <Image
          src={StampBoard}
          alt="stamp board"
          className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 object-cover"
        />
      </div>
      <Image
        src={Logo}
        alt="orbit 로고"
        width={100}
        className="fixed bottom-4 left-4 z-10 opacity-75"
      />
    </div>
  );
}
