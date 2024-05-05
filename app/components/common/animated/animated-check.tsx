'use client';

import { motion } from 'framer-motion';

import { AnimatedIconProps } from './types';

export default function AnimatedCheck({
  size = 258,
  color = 'white',
  delay = 0,
  className,
}: AnimatedIconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 258 258"
      className={className}
    >
      <motion.path
        strokeLinecap="round"
        transform="translate(60 85)"
        d="M3 50L45 92L134 3"
        fill="transparent"
        stroke={color}
        strokeWidth={16}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.25, ease: 'easeInOut', delay: delay }}
      />
    </motion.svg>
  );
}
