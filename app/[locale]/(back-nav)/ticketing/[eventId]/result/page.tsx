import { get, getServerSideToken } from '@/app/api';
import { Link } from '@/app/components/common';
import { API_ROUTES, ROUTES } from '@/app/lib/constants';
import { Params } from '@/app/lib/types';
import Glass from '@/public/images/glass.jpeg';
import Image from 'next/image';

export default async function Page({
  params: { eventId },
}: Params<{ eventId: string }>) {
  const token = await getServerSideToken();
  const { turn } = await get<{ turn: number }>(
    API_ROUTES.ticket.reservation(Number(eventId)),
    {
      token,
    },
  );

  return (
    <div className="flex w-full flex-col items-start justify-start px-5">
      <h1 className="mb-2 mt-10 text-3xl font-bold">
        티켓팅이 완료되었습니다.
      </h1>
      <span className="text-neutral-500">
        <strong className="text-primary">{turn}</strong>번째로 티켓팅
        하셨습니다.
      </span>
      <Link
        href={ROUTES.home}
        variant="bottom"
        className="absolute bottom-5 mx-auto w-[calc(100%-2.5rem)] rounded-lg bg-primary p-4 text-center text-neutral-50"
      >
        메인으로 이동
      </Link>
      <Image
        src={Glass}
        alt="유리"
        className="absolute bottom-4 -z-20 mix-blend-difference h-[500px] object-cover left-0"
      />
    </div>
  );
}
