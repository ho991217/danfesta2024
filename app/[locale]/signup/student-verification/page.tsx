'use client';

import { Form } from '@/app/components';
import { useState } from 'react';

const steps = ['id', 'password'] as const;

export default function Page() {
  const [step, setStep] = useState<(typeof steps)[number]>(steps[0]);

  return (
    <Form onSubmit={(v) => console.log(v)} className='gap-4'>
      {step === steps[1] && <Form.Password placeholder='비밀번호' />}
      <Form.ID placeholder='32123456' />
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
  );
}
