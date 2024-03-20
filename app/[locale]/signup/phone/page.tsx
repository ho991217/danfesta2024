'use client';

import { Funnel, Header } from '@/components/signup';
import { AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { TransformerSubtitle } from '@/components/signup/header';
import { Form } from '@/components/common';
import { useState } from 'react';
import { sendSMSCode } from './action';
import { useBottomSheet } from '@/hooks';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { SMSCodeSchema, smsCodeSchema } from './schema';

const steps = ['전화번호', '인증번호'] as const;

type Steps = (typeof steps)[number];

export default function Page() {
  const [BottomSheet, openBT, closeBT] = useBottomSheet();
  const [step, setStep] = useState<Steps>('전화번호');
  const currentStep = steps.indexOf(step);
  const isLastStep = currentStep === steps.length;
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  if (!token) {
    throw new Error('토큰이 필요합니다.');
  }

  const onNext = async (currentStep: Steps) => {
    if (isLastStep) return;
    if (currentStep === '전화번호') {
      await sendSMSCode({ phoneNumber: '010-8916-4754', token });
      setStep('인증번호');
    } else if (currentStep === '인증번호') {
      open();
    }
  };

  return (
    <AnimatePresence>
      <Header>
        <Header.Title>단국대학교 재학생 인증</Header.Title>
        <Header.Subtitle>
          <TransformerSubtitle text='전화번호를' />
          <div className='ml-1'>입력해주세요.</div>
        </Header.Subtitle>
      </Header>
      <Form
        onSubmit={(v) => {
          console.log(v);
        }}
        schema={smsCodeSchema}
      >
        <Funnel<typeof steps> step={step} steps={steps}>
          <Funnel.Step name='인증번호'>
            <Form.Text
              name='code'
              placeholder='숫자 4자리'
              label='발송된 인증번호 입력'
            />
          </Funnel.Step>
          <Funnel.Step name='전화번호'>
            <Form.Text
              name='phoneNumber'
              label='사용자 전화번호'
              placeholder='010-0000-0000'
            />
          </Funnel.Step>
        </Funnel>
        <Form.Button
          variant='bottom'
          type={isLastStep ? 'submit' : 'button'}
          onClick={() => onNext(steps[currentStep])}
        >
          다음
        </Form.Button>
        <BottomSheet>
          <span className='text-sm'>
            휴대폰으로 발송된 6자리 인증번호를 입력해주세요.
          </span>
          <InputOTP
            className='mx-1 mt-4 mb-10'
            maxLength={6}
            render={({ slots }) => (
              <>
                <InputOTPGroup>
                  {slots.slice(0, 3).map((slot, index) => (
                    <InputOTPSlot key={index} {...slot} />
                  ))}
                </InputOTPGroup>
                <InputOTPSeparator className='text-2xl' />
                <InputOTPGroup>
                  {slots.slice(3).map((slot, index) => (
                    <InputOTPSlot key={index + 3} {...slot} />
                  ))}
                </InputOTPGroup>
              </>
            )}
          />
          <Form.Button type='submit'>확인</Form.Button>
        </BottomSheet>
      </Form>
    </AnimatePresence>
  );
}
