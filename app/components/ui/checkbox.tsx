'use client';

import { cn } from '@/app/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';

import { AnimatedCheck } from '../common';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-neutral-200 border-neutral-900 ring-offset-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-neutral-50 dark:border-neutral-800 dark:border-neutral-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-primary dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-neutral-900 data-[state=checked]:border-none transition-colors',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <AnimatedCheck className="h-4 w-4" />
      {/* <Check className="h-4 w-4" /> */}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
