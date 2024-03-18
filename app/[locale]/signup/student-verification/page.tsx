'use client';

import { Form } from '@/components/common';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const steps = ['id', 'password'] as const;

const motionProps = {
  layout: true,
  initial: { opacity: 0, height: 0, scale: 0.9 },
  animate: { opacity: 1, height: 'auto', scale: 1 },
  exit: { opacity: 0, height: 0, scale: 0.9 },
  transition: { duration: 0.75, type: 'spring' },
};

export default function Page() {
  const [step, setStep] = useState<(typeof steps)[number]>(steps[0]);

  return (
    <AnimatePresence initial={false} mode='popLayout'>
      <Form onSubmit={(v) => console.log(v)} className='gap-4'>
        {step === steps[1] && (
          <Form.Password
            label='단국대학교 포털 비밀번호'
            placeholder='비밀번호'
            wrapperMotionProps={motionProps}
          />
        )}
        <Form.ID
          placeholder='학번'
          label='단국대학교 포털 아이디'
          wrapperMotionProps={motionProps}
        />
        {step === 'id' && (
          <Form.Button variant='bottom' onClick={() => setStep(steps[1])}>
            다음
          </Form.Button>
        )}
        {step === steps[1] && (
          <Form.Button type='submit' variant='bottom'>
            인증하기
          </Form.Button>
        )}
      </Form>
    </AnimatePresence>
  );
}
