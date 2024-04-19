'use client';

import Display from './display';
import Keys from './keys';

type KeypadProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function Keypad({ value, onChange }: KeypadProps) {
  return (
    <div className="w-full h-full grid grid-rows-2">
      <div className="flex flex-col gap-2 items-center justify-center">
        <span>SMS로 수신한 인증 코드를 입력 해주세요.</span>
        <Display value={value} slot={6} />
      </div>
      <div className="px-5 pb-8">
        <Keys value={value} onChange={onChange} />
      </div>
    </div>
  );
}
