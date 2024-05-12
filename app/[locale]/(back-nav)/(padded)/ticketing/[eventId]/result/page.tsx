import { get, getServerSideToken } from '@api/.';
import { AnimatedWrapper, Link } from '@components/common';
import Confetti from '@components/common/confetti';
import { API_ROUTES } from '@lib/constants';
import { type Params } from '@lib/types';

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
    <div className="flex w-full flex-col items-start justify-start">
      <AnimatedWrapper
        delay={0.25}
        className="flex items-center justify-center gap-2 mt-10 mb-2"
      >
        <h1 className="text-3xl font-bold">티켓팅이 완료되었습니다.</h1>
      </AnimatedWrapper>
      <AnimatedWrapper delay={0.5}>
        <span className="text-neutral-500">
          <strong className="text-primary">{turn}</strong>번째로 티켓팅
          하셨습니다.
        </span>
      </AnimatedWrapper>
      <AnimatedWrapper delay={1} bottom>
        <Link
          href="/"
          variant="bottom"
          className="absolute bottom-5 mx-auto w-[calc(100%-2.5rem)] rounded-lg bg-primary p-4 text-center text-neutral-50"
        >
          메인으로 이동
        </Link>
      </AnimatedWrapper>
      <Confetti />
    </div>
  );
}
