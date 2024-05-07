'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

import Funnel, { type StepType } from './funnel';

export default function Header({ children }: PropsWithChildren) {
  return <header className="flex flex-col gap-2 mb-10">{children}</header>;
}

Header.Title = function Title({ children }: PropsWithChildren) {
  return <h1 className="text-[27px] font-bold">{children}</h1>;
};

Header.Subtitle = function Subtitle({ children }: PropsWithChildren) {
  return <div className="text-base flex">{children}</div>;
};

type TransformerProps = {
  step: string;
  steps: StepType;
};

Header.Transformer = function Transformer({ step, steps }: TransformerProps) {
  return (
    <Funnel step={step} steps={steps} accumulate={false}>
      {steps.map((s) => (
        <Funnel.Step key={s} name={s} className="w-auto">
          <TransformerSubtitle>{s}</TransformerSubtitle>
        </Funnel.Step>
      ))}
    </Funnel>
  );
};

export function TransformerSubtitle({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ y: '-20%', opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: 'spring' }}
    >
      {children}
    </motion.div>
  );
}
