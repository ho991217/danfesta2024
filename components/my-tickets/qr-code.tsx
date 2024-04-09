'use client';

import { Button } from '@components/common';
import { cn, parseMStoMinSec } from '@lib/utils';
import sign from 'jwt-encode';
import { useQRCode } from 'next-qrcode';
import { useEffect, useRef, useState } from 'react';

const SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn('flex flex-col w-full items-center ', className)}>
      <div className="rounded-2xl overflow-hidden">
        {!isLoading && (
          <Canvas
            text={token}
            options={{ errorCorrectionLevel: 'L', width: 300 }}
          />
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
