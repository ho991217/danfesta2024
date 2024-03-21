'use client';

import { Funnel, Header } from '@/components/signup';
import { AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { TransformerSubtitle } from '@/components/signup/header';
import { Form } from '@/components/common';
import { useEffect, useRef, useState } from 'react';
import { sendSMSCode, verifySMSCode } from './action';
import { useBottomSheet } from '@/hooks';
import {
  type PhoneNumberSchema,
  type SMSCodeSchema,
  phoneNumberSchema,
  smsCodeSchema,
} from './schema';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { tokenSchema } from '../schema';

const steps = ['전화번호', '인증번호'] as const;

type Steps = (typeof steps)[number];

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [BottomSheet, openBT, closeBT] = useBottomSheet();
  const [step, setStep] = useState<Steps>('전화번호');
  const currentStep = steps.indexOf(step);
  const isLastStep = currentStep === steps.length;
  const searchParams = useSearchParams();
  const codeRef = useRef<HTMLInputElement>(null);

  const token = searchParams.get('token');
  const validToken = tokenSchema.safeParse({ token });
  const locale = useLocale();
  const router = useRouter();

  if (!token || !validToken.success) {
    throw new Error('비정상적인 토큰입니다.');
  }

  const handlePhoneNumberSubmit = async ({
    phoneNumber,
  }: PhoneNumberSchema) => {
    setLoading(true);
    await sendSMSCode({ phoneNumber, token });
    setLoading(false);

    onNext(step);
    openBT();
  };

  const handleSMSCodeSubmit = async ({ code }: SMSCodeSchema) => {
    try {
      setLoading(true);
      await verifySMSCode({ code, token });

      closeBT();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const onNext = async (currentStep: Steps) => {
    if (isLastStep) return;
    if (currentStep === '전화번호') {
      setStep('인증번호');
      openBT();
    }
  };

  useEffect(() => {
    if (codeRef.current && step === '인증번호') {
      codeRef.current.focus();
    }
  }, [codeRef, step]);

  return (
    <AnimatePresence initial={false}>
      <Header>
        <Header.Title>휴대폰 인증</Header.Title>
        <Header.Subtitle>
          <TransformerSubtitle text='전화번호를' />
          <div className='ml-1'>입력해주세요.</div>
        </Header.Subtitle>
      </Header>
      <Funnel<typeof steps> step={step} steps={steps}>
        <Funnel.Step name='전화번호'>
          <Form
            onSubmit={handlePhoneNumberSubmit}
            schema={phoneNumberSchema}
            validateOn='onChange'
          >
            <Form.Text
              name='phoneNumber'
              label='사용자 전화번호'
              placeholder='01012345678'
              inputMode='tel'
              onChange={async (e) => {
                if (e.target.value.length === 11) {
                  setLoading(true);
                  await handlePhoneNumberSubmit({
                    phoneNumber: e.target.value,
                  });
                  setLoading(false);
                }
                return e.target.value;
              }}
            />
            <Form.Button variant='bottom' isLoading={loading}>
              다음
            </Form.Button>
          </Form>
        </Funnel.Step>
      </Funnel>
      <BottomSheet
        header='인증번호 입력'
        onDismiss={() => {
          setStep('전화번호');
          closeBT();
        }}
      >
        <Form
          className='flex flex-col gap-0 mt-1'
          onSubmit={handleSMSCodeSubmit}
          schema={smsCodeSchema}
        >
          <Form.SMSCode
            ref={codeRef}
            placeholder='숫자 6자리'
            label='발송된 인증번호 입력'
            onChange={(v) => {
              if (v.length === 6) {
                setLoading(true);
                handleSMSCodeSubmit({ code: v });
                setLoading(false);
              }
              return v;
            }}
          />
          <span className='text-xs mt-4'>
            휴대폰으로 발송된 6자리 인증번호를 입력해주세요.
          </span>
          <Form.Button
            type='submit'
            className='mt-14'
            variant='filled'
            isLoading={loading}
          >
            확인
          </Form.Button>
        </Form>
      </BottomSheet>
    </AnimatePresence>
  );
}
