'use client';

import { cn } from '@/app/lib/utils';
import { OTPInput, SlotProps } from 'input-otp';
import { Dot } from 'lucide-react';
import * as React from 'react';
import { GoHorizontalRule } from 'react-icons/go';

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn('flex items-center justify-between', className)}
    {...props}
  />
));
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  SlotProps & React.ComponentPropsWithoutRef<'div'>
>(({ char, hasFakeCaret, isActive, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'relative flex h-11 w-11 items-center justify-center border-y border-r border-neutral-200 text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md dark:border-neutral-800',
        isActive &&
          'z-10 ring-2 ring-offset-white ring-neutral-950 dark:ring-offset-neutral-950 dark:ring-neutral-300',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-neutral-950 duration-1000 dark:bg-neutral-50" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
