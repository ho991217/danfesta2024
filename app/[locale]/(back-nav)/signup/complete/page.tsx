'use client';

import { ROUTES } from '@/lib/constants';
import { Button, Link } from '@components/common';
import useDimensions from '@hooks/use-dimensions';
import { useLocale } from 'next-intl';
import Confetti from 'react-confetti';

export default function Page() {
  const { width, height } = useDimensions();
  const locale = useLocale();

  return (
    <>
      <header className="flex flex-col gap-2 mt-8">
        <h1 className="text-3xl font-bold">회원가입 완료</h1>
        <h4 className="text-base text-neutral-500">
          단페스타 회원가입이 완료되었습니다. 🎉
        </h4>
        <Confetti
          width={width}
          height={height}
          confettiSource={{
            x: 0,
            y: height / 2,
            w: width,
            h: height,
          }}
          numberOfPieces={100}
        />
      </header>
      <div className="absolute bottom-5 mx-auto flex w-[calc(100%-2.5rem)] flex-col gap-2">
        <Link href={ROUTES.login}>
          <Button variant="filled">로그인 하기</Button>
        </Link>
        <Link href={ROUTES.home}>
          <Button variant="outlined" className="text-primary">
            홈으로 돌아가기
          </Button>
        </Link>
      </div>
    </>
  );
}
