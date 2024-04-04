'use client';

import { useQRCode } from 'next-qrcode';
import sign from 'jwt-encode';
import { Suspense, useEffect, useRef, useState } from 'react';
import { cn, parseMStoMinSec } from '@/lib/utils';
import { Button } from '@/components/common';

const SECRET =
  'fcd5dc55c10cb893143c58cc80d152005e7fd753031acfc34637330d03716fdff6b9a2bc86c11d3209cd969f1b14954afc3ad57cab97abb392e1b2270e1185aaf66b25f4dc807c898c489cbfd3370df16d966bccdb5e3a8b7533461bd3ef477ffd0ac989ae0a8615f9881533cba80284e6c79c3929dc6a2f1c43945250649c2c40e7b09ddd60bc8732063f54ca518aac3f1e36cba52f2d63242f675473e47eabe26b5d9ec37ac57500bf8c907bfd65e0001c5f2726f2dfa8420c3a01a3e6292fa33c3f85064efd88361e5177a36b0873a6effdd3808890407d0ff4a96a1471d66b145513e45575803191e96b505f58ee32f85d57d4f604d330f213a4419c90a4';
const SECOND = 1000;

type QrCodeProps = {
  ticketId: number;
  validTime?: number;
  className?: string;
};

type Payload = {
  ticketId: number;
  exp: number;
  iat: number;
};

export default function QrCode({
  ticketId,
  validTime = 1000 * 60 * 3,
  className,
}: QrCodeProps) {
  if (!SECRET) throw new Error('JWT 시크릿이 설정되지 않았습니다.');

  const { Canvas } = useQRCode();
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string>('no token');
  const [leftTime, setLeftTime] = useState<number>(validTime);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const generateToken = () => {
    const iat = Date.now();
    const exp = iat + validTime;
    const payload: Payload = { ticketId, iat, exp };
    const newToken = sign(payload, SECRET, { algorithm: 'HS256' });
    setToken(newToken);
  };

  const startTimer = () => {
    if (interval.current) clearInterval(interval.current);
    if (timer.current) clearInterval(timer.current);

    setLeftTime(validTime);
    generateToken();
    setIsLoading(false);
    interval.current = setInterval(() => {
      setLeftTime(validTime);
      generateToken();
    }, validTime);

    timer.current = setInterval(() => {
      setLeftTime((prev) => prev - SECOND);
    }, SECOND);
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (interval.current) clearInterval(interval.current);
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <div className={cn('flex flex-col w-full items-center', className)}>
      <Suspense fallback={<div>로딩중</div>}>
        {!isLoading && (
          <Canvas
            text={token}
            options={{ errorCorrectionLevel: 'L', width: 300 }}
          />
        )}
      </Suspense>
      <div className='flex flex-col p-4 w-full gap-4'>
        <span className='text-sm text-neutral-400 w-full text-center'>
          유효 시간: {parseMStoMinSec(leftTime)}
        </span>
        <Button variant='filled' onClick={startTimer} animateOnClick>
          재생성
        </Button>
      </div>
    </div>
  );
}
