'use client';

import { Button } from '@components/common';
import { delayFn } from '@lib/utils';
import { useEffect, useState } from 'react';

import Display from './display';
import Keys from './keys';

type KeypadProps = {
  onSubmit: (value: string) => void;
  slot?: number;
};

export default function Keypad({ slot = 6, onSubmit }: KeypadProps) {
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
        <span>SMS로 받은 인증 코드를 입력 해주세요.</span>
        <Display value={value} slot={slot} />
        <Button className=" bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-300 w-auto px-12 mt-2">
          재전송
        </Button>
      </div>
      <div className="px-5 pb-8">
        <Keys value={value} onChange={setValue} slot={slot} />
      </div>
    </div>
  );
}
