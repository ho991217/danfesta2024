'use client';

import { PropsWithChildren } from 'react';

type DisplayProps = {
  value: string;
  slot: number;
};

export default function Display({ value, slot }: DisplayProps) {
  return (
    <div className="flex gap-2 w-full px-8">
      {Array.from({ length: slot }).map((_, i) => (
        <Block key={i}>{value[i] || ' '}</Block>
      ))}
    </div>
  );
}

function Block({ children }: PropsWithChildren) {
  return (
    <span className="aspect-[3/4] w-full rounded-md bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-3xl">
      {children}
    </span>
  );
}
