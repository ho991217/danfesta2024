import Stamp1 from '@/public/images/stamp/스탬프판_문체-02.webp';
import Stamp2 from '@/public/images/stamp/스탬프판_문체-03.webp';
import Stamp3 from '@/public/images/stamp/스탬프판_문체-04.webp';
import Stamp4 from '@/public/images/stamp/스탬프판_문체-05.webp';
import Stamp5 from '@/public/images/stamp/스탬프판_문체-06.webp';
import Stamp6 from '@/public/images/stamp/스탬프판_문체-07.webp';
import Stamp7 from '@/public/images/stamp/스탬프판_문체-08.webp';
import StampBoard from '@/public/images/stamp/스탬프판_문체_배경.webp';
import Image from 'next/image';

const stamps = [
  Stamp1,
  Stamp2,
  Stamp3,
  Stamp4,
  Stamp5,
  Stamp6,
  Stamp7,
] as const;

export default async function StampPage() {
  return (
    <div>
      <Image src={StampBoard} alt="stamp board" />
    </div>
  );
}
