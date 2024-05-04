import { Link } from '@/app/components/common';
import FoodImg from '@/public/images/perspaleta2_0020.png';
import getJeomshim from 'jeom-mae-chu';
import Image from 'next/image';

export default function JeomshimPage() {
  const menu = getJeomshim();
  return (
    <>
      <header className="flex flex-col gap-2 mt-10">
        <span className="text-neutral-500 text-sm">
          이 곳에 도달한 당신을 위한 추천 점심 메뉴:
        </span>
        <h1 className="text-3xl font-bold">{menu}</h1>
      </header>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[300px]">
        <Image src={FoodImg} alt="점심 메뉴" width={1080} height={1080} />
      </div>
      <Link href="/" variant="bottom">
        홈으로
      </Link>
    </>
  );
}
