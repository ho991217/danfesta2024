'use client';

import { Button } from '@components/common';
import { cn, parseMStoMinSec } from '@lib/utils';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { getQRCode } from './actions';

const SECOND = 1000;

type QrCodeProps = {
  ticketId: number;
  lifetime?: number;
  className?: string;
};

export default function QrCode({
  ticketId,
  lifetime = 1000 * 60 * 3,
  className,
}: QrCodeProps) {
  const [qrcode, setQrcode] = useState('');
  const [leftTime, setLeftTime] = useState(lifetime);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (interval.current) clearInterval(interval.current);
    if (timer.current) clearInterval(timer.current);

    setLeftTime(lifetime);
    getQRCode(ticketId, lifetime).then(setQrcode);
    interval.current = setInterval(() => {
      setLeftTime(lifetime);
      getQRCode(ticketId, lifetime).then(setQrcode);
    }, lifetime);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn('flex flex-col w-full items-center ', className)}>
      <div className="rounded-2xl overflow-hidden">
        {qrcode ? (
          <Image src={qrcode} alt="qr 코드 이미지" width={300} height={300} />
        ) : (
          <div className="w-[300px] h-[300px] bg-neutral-100 dark:bg-neutral-900 rounded-2xl animate-pulse" />
        )}
      </div>
      <div className="flex flex-col py-4 w-full gap-4">
        <span className="text-sm text-neutral-400 w-full text-center">
          유효 시간: {parseMStoMinSec(leftTime)}
        </span>
        <Button variant="filled" onClick={startTimer} animateOnClick>
          재생성
        </Button>
      </div>
    </div>
  );
}
