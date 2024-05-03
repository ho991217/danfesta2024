'use client';

import { Button } from '@/app/components/common';
import { delayFn } from '@/app/lib/utils';
import { useEffect, useState } from 'react';

import Display from './display';
import Keys from './keys';

type KeypadProps = {
  onSubmit: (value: string) => void;
  slot?: number;
  title: string;
  button?: React.ReactNode;
  password?: boolean;
};

export default function Keypad({
  slot = 6,
  onSubmit,
  title,
  button,
  password,
}: KeypadProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value.length === slot) {
      onSubmit(value);
      delayFn(() => setValue(''));
    }
  }, [value, slot, onSubmit]);

  return (
    <div className="w-full h-full grid grid-rows-2 relative">
      <div className="flex flex-col gap-2 items-center justify-center">
        <span>{title}</span>
        <Display value={value} slot={slot} password={password} />
        {button}
      </div>
      <div className="px-5 pb-8">
        <Keys value={value} onChange={setValue} slot={slot} />
      </div>
    </div>
  );
}
