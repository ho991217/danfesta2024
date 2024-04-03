import { checkResult } from './action';
import Link from 'next/link';

export default async function Page({
  params: { eventId },
}: {
  params: { eventId: string };
}) {
  const turn = await checkResult(Number(eventId));

  return (
    <div className='w-full flex flex-col items-start justify-start'>
      <h1 className='text-2xl font-bold mt-10'>티켓팅이 완료되었습니다.</h1>
      <span className=''>
        <strong className='text-primary'>{turn}</strong>번째로 티켓팅
        하셨습니다.
      </span>
      <Link
        href='/'
        className='absolute bottom-5 mx-auto w-[calc(100%-2.5rem)] bg-primary text-neutral-50 p-4 rounded-lg text-center'
      >
        메인으로 이동
      </Link>
    </div>
  );
}
