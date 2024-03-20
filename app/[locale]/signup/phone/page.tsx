'use client';

import { Funnel, Header } from '@/components/signup';
import { AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { TransformerSubtitle } from '@/components/signup/header';
import { Form } from '@/components/common';
import { useState } from 'react';
import { sendSMSCode } from './action';
import { useBottomSheet } from '@/hooks';
import { SMSCodeSchema, smsCodeSchema } from './schema';
import useToastStore from '@/stores/toast-state';

const steps = ['전화번호', '인증번호'] as const;

type Steps = (typeof steps)[number];

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [BottomSheet, openBT, closeBT] = useBottomSheet();
  const [step, setStep] = useState<Steps>('전화번호');
  const currentStep = steps.indexOf(step);
  const isLastStep = currentStep === steps.length;
  const searchParams = useSearchParams();
  const { open } = useToastStore();

  const token = searchParams.get('token');
  if (!token) {
    throw new Error('토큰이 필요합니다.');
  }

  const handleSubmit = async ({ phoneNumber }: SMSCodeSchema) => {
    switch (step) {
      case '전화번호':
        setLoading(true);
        await sendSMSCode({ phoneNumber, token });
        setLoading(false);
        open('인증번호가 발송되었습니다.');
        onNext(step);
        break;
      case '인증번호':
        break;
    }
  };

  const onNext = async (currentStep: Steps) => {
    if (isLastStep) return;
    if (currentStep === '전화번호') {
      setStep('인증번호');
      openBT();
    } else if (currentStep === '인증번호') {
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
      <Funnel<typeof steps> step={step} steps={steps}>
        <Funnel.Step name='전화번호'>
          <Form onSubmit={handleSubmit} schema={smsCodeSchema}>
            <Form.Text
              name='phoneNumber'
              label='사용자 전화번호'
              placeholder='01012345678'
            />
            <Form.Button variant='bottom' isLoading={loading}>
              다음
            </Form.Button>
          </Form>
        </Funnel.Step>
      </Funnel>
      <BottomSheet
        onDismiss={() => {
          setStep('전화번호');
          closeBT();
        }}
      >
        <span className='text-sm'>
          휴대폰으로 발송된 6자리 인증번호를 입력해주세요.
        </span>
        <Form onSubmit={handleSubmit} schema={smsCodeSchema}>
          <Form.SMSCode placeholder='숫자 6자리' label='발송된 인증번호 입력' />
          <Form.Button type='submit'>확인</Form.Button>
        </Form>
      </BottomSheet>
    </AnimatePresence>
  );
}
