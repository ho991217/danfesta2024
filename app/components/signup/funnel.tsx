'use client';

import { type NonEmptyArray } from '@lib/types';
import { cn } from '@lib/utils';
import { motion } from 'framer-motion';
import { Children, isValidElement, useEffect } from 'react';

import { variants } from './motion';

export type StepType = Readonly<NonEmptyArray<string>>;

interface StepProps<Steps extends StepType> {
  name: Steps[number];
  onEnter?: () => void;
  children: React.ReactNode;
  className?: string;
}

interface FunnelProps<Steps extends StepType> {
  steps: Steps;
  step: Steps[number];
  children:
    | Array<React.ReactElement<StepProps<Steps>>>
    | React.ReactElement<StepProps<Steps>>;
  accumulate?: boolean;
}

export default function Funnel<Steps extends StepType>({
  step,
  steps,
  children,
  accumulate = true,
}: FunnelProps<Steps>) {
  const currentStep = steps.indexOf(step);

  if (currentStep === -1) {
    throw new Error(`Step "${step}" does not exist in the funnel`);
  }

  const validChildren = Children.toArray(children).filter((child) =>
    isValidElement(child),
  );
  if (accumulate) {
    const stepElements = steps
      .slice(0, currentStep + 1)
      .map((name) => {
        const child = validChildren.find(
          (child) =>
            (child as React.ReactElement<StepProps<Steps>>).props.name === name,
        );
        return child;
      })
      .reverse();

    return stepElements;
  } else {
    return validChildren[currentStep];
  }
}

export const Step = <Steps extends StepType>({
  onEnter,
  children,
  className,
}: StepProps<Steps>) => {
  useEffect(() => {
    onEnter?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={cn('w-full', className)}
    >
      {children}
    </motion.div>
  );
};

Funnel.Step = Step;
