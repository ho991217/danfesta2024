import getUserInfo from '@/api/get-is-user-info';
import { cn } from '@/lib/utils';
import Logo from '@/public/icons/orbit_logo.png';
import Universe from '@/public/images/stamp/universe_bg.jpeg';
import Stamp1 from '@/public/images/stamp/스탬프판_문체-02.webp';
import Stamp2 from '@/public/images/stamp/스탬프판_문체-03.webp';
import Stamp3 from '@/public/images/stamp/스탬프판_문체-04.webp';
import Stamp4 from '@/public/images/stamp/스탬프판_문체-05.webp';
import Stamp5 from '@/public/images/stamp/스탬프판_문체-06.webp';
import Stamp6 from '@/public/images/stamp/스탬프판_문체-07.webp';
import Stamp7 from '@/public/images/stamp/스탬프판_문체-08.webp';
import StampBoard from '@/public/images/stamp/스탬프판_문체.png';
import Image from 'next/image';

const stampClassname = 'w-[80px] h-[80px] absolute z-20 animate-pulse';

const stamps = [
  <Image
    key={1}
    className={cn(stampClassname, 'bottom-[3px] left-[14px]')}
    src={Stamp1}
    alt="스탬프 1"
  />,
  <Image
    key={2}
    className={cn(stampClassname, 'bottom-[77px] left-[52px]')}
    src={Stamp2}
    alt="스탬프 2"
  />,
  <Image
    key={3}
    className={cn(stampClassname, 'bottom-[92px] left-[138px]')}
    src={Stamp3}
    alt="스탬프 3"
  />,
  <Image
    key={4}
    className={cn(stampClassname, 'bottom-[206px] left-[232px]')}
    src={Stamp4}
    alt="스탬프 4"
  />,
  <Image
    key={5}
    className={cn(stampClassname, 'bottom-[218px] left-[326px]')}
    src={Stamp5}
    alt="스탬프 5"
  />,
  <Image
    key={6}
    className={cn(stampClassname, 'bottom-[307px] left-[357px]')}
    src={Stamp6}
    alt="스탬프 6"
  />,
  <Image
    key={7}
    className={cn(stampClassname, 'bottom-[369px] left-[279px]')}
    src={Stamp7}
    alt="스탬프 7"
  />,
];

export default async function StampPage() {
  const { studentId } = await getUserInfo();
  // 스탬프 조회 기능 추가
  return (
    <div className="w-full h-full relative flex flex-col items-center px-5">
      <Image
        src={Universe}
        alt="stamp board"
        className="h-screen fixed top-0 left-1/2 transform -translate-x-1/2 object-cover -z-10 brightness-50"
      />
      <div className="w-full flex flex-col justify-between rounded-2xl bg-neutral-700 bg-opacity-0 bg-clip-padding p-4 text-white backdrop-blur-xl backdrop-filter">
        학번 {studentId}
      </div>
      <div className="w-[450px] h-[450px] relative">
        {stamps.map((stamp, index) => (
          <>{stamp}</>
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
