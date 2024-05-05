'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

type AnimatedWrapperProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export default function AnimatedWrapper({
  children,
  className,
  delay = 0,
}: AnimatedWrapperProps) {
  const variants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.div
      className={className}
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
