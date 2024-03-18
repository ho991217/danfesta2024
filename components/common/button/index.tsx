import { MotionProps, motion } from 'framer-motion';
import { variants } from './motion';
import clsx from 'clsx';

type ButtonProps = MotionProps & {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  to?: string;
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
}: ButtonProps) {
  const motionProps = {
    variants: variants.button,
    initial: 'initial',
    whileTap: animateOnClick ? 'dimmedAndSmaller' : 'dimmed',
    className: clsx(
      'w-full rounded-md h-12 px-4 flex items-center justify-center',
      variant === 'filled' && 'bg-primary text-neutral-50',
      variant === 'outlined' && 'border border-primary',
      variant === 'transparent' &&
        'text-neutral-500 dark:text-neutral-500 bg-white dark:bg-[#0C0C0C]',
      variant === 'bottom' &&
        'absolute bottom-0 bg-primary text-neutral-50 rounded-none',
      className
    ),
  };

  return (
    <motion.button type={type} {...motionProps} onClick={onClick}>
      {children}
    </motion.button>
  );
}
