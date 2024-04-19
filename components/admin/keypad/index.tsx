'use client';

import Display from './display';
import Keys from './keys';

type KeypadProps = {
  value: string;
  onChange: (value: string) => void;
  slot?: number;
};

export default function Keypad({ value, onChange, slot = 6 }: KeypadProps) {
  return (
    <div className="w-full h-full grid grid-rows-2">
      <div className="flex flex-col gap-2 items-center justify-center">
        <span>SMS로 받은 인증 코드를 입력 해주세요.</span>
        <Display value={value} slot={slot} />
      </div>
      <div className="px-5 pb-8">
        <Keys value={value} onChange={onChange} slot={slot} />
      </div>
    </div>
  );
}
