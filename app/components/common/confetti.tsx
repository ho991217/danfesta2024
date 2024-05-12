'use client';

import { useDimensions } from '@/app/hooks';
import ReactConfetti from 'react-confetti';

export default function Confetti() {
  const { width, height } = useDimensions();
  return (
    <ReactConfetti
      width={width}
      height={height}
      confettiSource={{
        x: 0,
        y: height / 2,
        w: width,
        h: height,
      }}
      colors={['#0073E5', '#DD2DE7', '#00E7E7', '#C892EA', '#0262E9']}
      numberOfPieces={100}
    />
  );
}
