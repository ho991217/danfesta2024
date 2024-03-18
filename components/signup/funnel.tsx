import { Children, isValidElement, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { variants } from './motion';
import { NonEmptyArray } from '@/types/util';

type StepType = Readonly<NonEmptyArray<string>>;

interface StepProps<Steps extends StepType> {
  name: Steps[number];
  onEnter?: () => void;
  children: React.ReactNode;
}

interface FunnelProps<Steps extends StepType> {
  steps: Steps;
  step: Steps[number];
  children:
    | Array<React.ReactElement<StepProps<Steps>>>
    | React.ReactElement<StepProps<Steps>>;
}

export default function Funnel<Steps extends StepType>({
  step,
  steps,
  children,
}: FunnelProps<Steps>) {
  const currentStep = steps.indexOf(step);

  if (currentStep === -1) {
    throw new Error(`Step "${step}" does not exist in the funnel`);
  }

  const validChildren = Children.toArray(children).filter((child) =>
    isValidElement(child)
  );
  const stepElements = steps
    .slice(0, currentStep + 1)
    .map((name) => {
      const child = validChildren.find(
        (child) =>
          (child as React.ReactElement<StepProps<Steps>>).props.name === name
      );
      return child;
    })
    .reverse();

  return stepElements;
}

export const Step = <Steps extends StepType>({
  onEnter,
  children,
}: StepProps<Steps>) => {
  useEffect(() => {
    onEnter?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='hidden'
      className='w-full'
    >
      {children}
    </motion.div>
  );
};

Funnel.Step = Step;
