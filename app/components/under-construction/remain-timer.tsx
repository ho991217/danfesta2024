'use client';

import { useEffect, useState } from 'react';

type RemainTimerProps = {
  targetDate: Date;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function RemainTimer({ targetDate }: RemainTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center">
      {timeLeft.days > 0 && (
        <>
          <span className="text-2xl font-semibold">{timeLeft.days}</span>
          <span className="text-xl mr-2">일</span>
        </>
      )}
      {timeLeft.hours > 0 && (
        <>
          <span className="text-2xl font-semibold">{timeLeft.hours}</span>
          <span className="text-xl mr-2">시간</span>
        </>
      )}
      {timeLeft.minutes > 0 && (
        <>
          <span className="text-2xl font-semibold">{timeLeft.minutes}</span>
          <span className="text-xl mr-2">분</span>
        </>
      )}

      <span className="text-2xl font-semibold">{timeLeft.seconds}</span>
      <span className="text-xl mr-2">초</span>
    </div>
  );
}
