import { MotionProps, motion } from 'framer-motion';
import { variants } from './motion';
import clsx from 'clsx';
import PulseLoader from 'react-spinners/PulseLoader';
import { twMerge } from 'tailwind-merge';

type ButtonProps = MotionProps & {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  type?: 'submit' | 'reset' | 'button';
  to?: string;
  disabled?: boolean;
  variant?: 'filled' | 'outlined' | 'transparent' | 'bottom';
  animateOnClick?: boolean;
};

export default function Button({
  className,
  children,
  variant = 'filled',
  type = 'button',
  onClick,
  animateOnClick = false,
  isLoading = false,
  disabled,
}: ButtonProps) {
  const motionProps = {
    variants: variants.button,
    initial: 'initial',
    whileTap: animateOnClick ? 'dimmedAndSmaller' : 'dimmed',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={twMerge(
        'w-full rounded-md h-12 px-4 flex items-center justify-center',
        variant === 'filled' && 'bg-primary text-neutral-50',
        variant === 'outlined' && 'border border-primary',
        variant === 'transparent' &&
          'text-neutral-500 dark:text-neutral-500 bg-white dark:bg-[#0C0C0C]',
        variant === 'bottom' &&
          'absolute bottom-5 mx-auto w-[calc(100%-2.5rem)] bg-primary text-neutral-50',
        disabled && 'bg-neutral-500 cursor-not-allowed',
        className
      )}
      {...motionProps}
    >
      {isLoading ? <PulseLoader size={8} color='#f0f0f0' /> : children}
    </motion.button>
  );
}
