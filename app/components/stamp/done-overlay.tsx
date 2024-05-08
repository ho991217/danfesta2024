'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { AnimatedCheck, AnimatedWrapper, Link } from '../common';
import Overlay from '../common/overlay';

type DoneOverlayProps = {
  isDone?: boolean;
};

export default function DoneOverlay({ isDone }: DoneOverlayProps) {
  const [isOpen, setIsOpen] = useState(isDone);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay onClick={() => setIsOpen(false)} />
          <div className="z-[999] text-white">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center">
              <AnimatedWrapper
                className="flex items-center justify-center w-full"
                delay={0.25}
              >
                <h2 className="text-center text-3xl font-bold">🎉 미션 완료</h2>
                <AnimatedCheck size={48} delay={0.5} />
              </AnimatedWrapper>
              <AnimatedWrapper delay={0.5}>
                축하합니다! 미션을 완료하셨습니다.
              </AnimatedWrapper>
            </div>
            <AnimatedWrapper
              delay={0.75}
              className="absolute bottom-0 left-0 w-full flex items-center justify-center"
            >
              <Link variant="bottom" href="/stamp">
                다른 미션도 하러 가기
              </Link>
            </AnimatedWrapper>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
