'use client';

import { useQRCode } from 'next-qrcode';
import sign from 'jwt-encode';
import { useEffect, useRef, useState } from 'react';
import { parseMStoMinSec } from '@/lib/utils';

const SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;
const SECOND = 1000;

type QrCodeProps = {
  ticketId: number;
  validTime?: number;
};

type Payload = {
  ticketId: number;
  exp: number;
  iat: number;
};

export default function QrCode({
  ticketId,
  validTime = 1000 * 60 * 3,
}: QrCodeProps) {
  if (!SECRET) throw new Error('JWT 시크릿이 설정되지 않았습니다.');

  const { Canvas } = useQRCode();
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

    generateToken();
    setLeftTime(validTime);
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
    <div>
      <Canvas text={token} options={{ errorCorrectionLevel: 'L' }} />
      <div>유효 시간: {parseMStoMinSec(leftTime)}</div>
      <button onClick={startTimer}>재생성</button>
    </div>
  );
}
