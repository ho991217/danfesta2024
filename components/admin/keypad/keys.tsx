'use client';

import { motion } from 'framer-motion';
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
  slot: number;
};

export default function Keys({ value, onChange, slot }: KeysProps) {
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'Clear',
    '0',
    'Delete',
  ] as const;

  const onClick = (v: string) => {
    switch (v) {
      case 'Clear':
        onChange('');
        break;
      case 'Delete':
        onChange(value.slice(0, -1));
        break;
      default:
        if (value.length >= slot) return;
        onChange(value + v);
    }
  };

  return (
    <div className="w-full h-full grid grid-cols-3 grid-rows-4 gap-4">
      {values.map((v, i) => (
        <Key key={v} value={v} onClick={onClick}>
          {keys[i]}
        </Key>
      ))}
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
    <motion.button
      type="button"
      className="w-full h-full text-4xl flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900"
      onClick={() => onClick(value)}
      whileTap={{ scale: 0.95, filter: 'brightness(0.8)' }}
    >
      {children}
    </motion.button>
  );
}
