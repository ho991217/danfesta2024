'use client';

import { AnimatePresence, motion } from 'framer-motion';

type DisplayProps = {
  value: string;
  slot: number;
  password?: boolean;
};

export default function Display({ value, slot, password }: DisplayProps) {
  return (
    <div className="flex gap-2 w-full px-8 items-center justify-center">
      {Array.from({ length: slot }).map((_, i) => (
        <Block key={i} value={value[i]} password={password} />
      ))}
    </div>
  );
}

function Block({ value, password }: { value: string; password?: boolean }) {
  return (
    <div className="aspect-[3/4] w-full rounded-md bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-3xl ">
      <AnimatePresence>
        {value !== undefined && (
          <motion.div
            layout
            className="w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.75, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: -10 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            {password ? <span>●</span> : value}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
