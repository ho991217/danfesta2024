'use client';

import { cn } from '@/app/lib/utils';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

type AnimatedWrapperProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  bottom?: boolean;
}>;

export default function AnimatedWrapper({
  children,
  className,
  delay = 0,
  bottom = false,
}: AnimatedWrapperProps) {
  const variants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.div
      className={cn(
        bottom &&
          'absolute bottom-0 left-0 w-full flex items-center justify-center',
        className,
      )}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ delay, ease: 'easeOut', duration: delay }}
    >
      {children}
    </motion.div>
  );
}
