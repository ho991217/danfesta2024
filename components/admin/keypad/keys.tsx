'use client';

import {
  PiArrowArcLeftBold,
  PiNumberEightBold,
  PiNumberFiveBold,
  PiNumberFourBold,
  PiNumberNineBold,
  PiNumberOneBold,
  PiNumberSevenBold,
  PiNumberSixBold,
  PiNumberThreeBold,
  PiNumberTwoBold,
  PiNumberZeroBold,
  PiXBold,
} from 'react-icons/pi';

const keys = [
  <PiNumberOneBold key="1" />,
  <PiNumberTwoBold key="2" />,
  <PiNumberThreeBold key="3" />,
  <PiNumberFourBold key="4" />,
  <PiNumberFiveBold key="5" />,
  <PiNumberSixBold key="6" />,
  <PiNumberSevenBold key="7" />,
  <PiNumberEightBold key="8" />,
  <PiNumberNineBold key="9" />,
  <PiXBold key="X" />,
  <PiNumberZeroBold key="0" />,
  <PiArrowArcLeftBold key="leftarr" />,
] as const;

type KeysProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function Keys({ value, onChange }: KeysProps) {
  return (
    <div className="w-full h-full grid grid-cols-3 grid-rows-4 gap-4">
      {Array.from({ length: 12 }).map((_, i) => {
        const v = i + 1;
        return (
          <Key
            key={i}
            value={v === 10 ? 'C' : v === 11 ? '0' : v === 12 ? 'D' : String(v)}
            onClick={(v) => {
              if (v === 'C') {
                onChange('');
              } else if (v === 'D') {
                onChange(value.slice(0, -1));
              } else {
                onChange(value + v);
              }
            }}
          >
            {keys[i]}
          </Key>
        );
      })}
    </div>
  );
}

function Key({
  value,
  onClick,
  children,
}: {
  value: string;
  onClick: (value: string) => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      className="w-full h-full text-4xl flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900"
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
}
