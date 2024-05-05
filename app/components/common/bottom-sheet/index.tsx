'use client';

import { cn } from '@/app/lib/utils';
import clsx from 'clsx';
import {
  AnimatePresence,
  PanInfo,
  motion,
  useDragControls,
} from 'framer-motion';
import { PointerEvent, useEffect, useState } from 'react';

import Overlay from '../overlay';
import { transition, variants } from './motion';
import { Height } from './types';

export interface BottomSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onDismiss: () => void;
  header?: React.ReactNode | string;
  height?: Height;
  expandTo?: Height;
}

const DRAG_TRESHOLD = 5;

export default function BottomSheet({
  isOpen,
  children,
  header,
  height = 'auto',
  expandTo,
  onDismiss,
  className,
}: BottomSheetProps) {
  const controls = useDragControls();
  const [dragging, setDragging] = useState(false);
  const [touching, setTouching] = useState(false);
  const [currentHeight, setCurrentHeight] = useState<Height>(height);

  const startDrag = (e: PointerEvent<HTMLDivElement>) => {
    controls.start(e);
    setDragging(true);
  };

  const handleDragend = (_: Event, info: PanInfo) => {
    if (info.offset.y > DRAG_TRESHOLD) onDismiss();
    else if (info.offset.y < -DRAG_TRESHOLD) expand();

    setDragging(false);
  };

  const expand = () => {
    if (expandTo !== undefined && height !== 'auto') setCurrentHeight(expandTo);
  };

  useEffect(() => {
    if (!isOpen) setCurrentHeight(height);
  }, [isOpen, height]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed top-0 left-0 bottom-0 right-0 touch-none z-[9999]">
          <motion.div
            drag
            dragConstraints={{
              top: 0,
              bottom: 99999,
              left: 0,
              right: 0,
            }}
            dragElastic={0.1}
            dragControls={controls}
            dragListener={false}
            onDragEnd={handleDragend}
            initial="hidden"
            animate={touching ? 'smaller' : 'visible'}
            exit="hidden"
            variants={variants.bottomSheet.container}
            transition={transition.container}
            className={cn(
              'z-[999] fixed bg-white dark:bg-neutral-900 rounded-2xl bottom-4 left-4 right-4 box-border px-7 transition-[top] overflow-hidden shadow-xl lg:max-w-[500px] lg:bottom-8 lg:mx-auto',
              className,
            )}
          >
            <div
              onPointerDown={startDrag}
              onTouchStart={() => setTouching(true)}
              onTouchEnd={() => setTouching(false)}
              className="flex justify-center flex-col"
            >
              <motion.div className="w-[50px] h-1 mx-auto mt-2 mb-10 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
              {!!header && (
                <motion.h2
                  initial="initial"
                  animate="animate"
                  variants={variants.bottomSheet.content}
                  transition={transition.content}
                  className="mb-7 text-xl font-bold text-neutral-900 dark:text-neutral-100"
                >
                  {header}
                </motion.h2>
              )}
            </div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={variants.bottomSheet.content}
              transition={transition.content}
              className={clsx(
                'w-full transition-[height] touch-pan-x touch-pan-y',
                currentHeight === 'auto' && 'h-auto',
                currentHeight === '1/3' && 'h-[33svh]',
                currentHeight === '2/3' && 'h-[66svh]',
                height !== 'auto' && expandTo !== undefined
                  ? 'overflow-scroll pb-0'
                  : 'overflow-hidden pb-7',
              )}
            >
              {children}
            </motion.div>
          </motion.div>
          <Overlay onClick={onDismiss} darker={dragging} />
        </div>
      )}
    </AnimatePresence>
  );
}
