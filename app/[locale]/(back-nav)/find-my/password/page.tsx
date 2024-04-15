'use client';

import { post } from '@/api';
import { API_ROUTES } from '@/constants';
import { useBottomSheet } from '@/hooks';
import { BottomSheet, Form } from '@components/common';
import { Funnel, Header } from '@components/signup';
import APIError from '@lib/utils/error/api-error';
import { AnimatePresence } from 'framer-motion';
import { getJosaPicker } from 'josa';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

import {
  PhoneNumberSchema,
  SMSCodeSchema,
  phoneNumberSchema,
  smsCodeSchema,
} from '../../signup/phone/schema';

const steps = ['전화번호', '인증번호', '변경 할 비밀번호'] as const;

type Steps = (typeof steps)[number];

export default function FindMyPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');
  const [isOpen, openBT, closeBT] = useBottomSheet();
  const [step, setStep] = useState<Steps>('전화번호');
  const currentStep = steps.indexOf(step);
  const isLastStep = currentStep === steps.length;
  const codeRef = useRef<HTMLInputElement>(null);
  const josa = getJosaPicker('을');

  const handlePhoneNumberSubmit = async ({
    phoneNumber,
  }: PhoneNumberSchema) => {
    try {
      setLoading(true);
      const { token } = await post<{ phoneNumber: string }, { token: string }>(
        API_ROUTES.user.find.password.sms.send,
        { phoneNumber },
      );
      setToken(token);
      onNext(step);
    } catch (error) {
      const e = error as APIError;
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSMSCodeSubmit = async ({ code }: SMSCodeSchema) => {
    try {
      setLoading(true);
      await post<{ token: string; code: string }, {}>(
        API_ROUTES.user.find.password.sms.verify,
        { code, token },
      );
      onNext(step);
    } catch (error) {
      const e = error as APIError;
      toast.error(e.message);
      setStep('전화번호');
    } finally {
      closeBT();
      setLoading(false);
    }
  };

  const onNext = (currentStep: Steps) => {
    if (isLastStep) return;
    switch (currentStep) {
      case '전화번호':
        setStep('인증번호');
        openBT();
        break;
      case '인증번호':
        setStep('변경 할 비밀번호');
        break;
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
          <Header.Transformer step={step} steps={steps} />
          <span>{josa(step)} 입력해주세요.</span>
        </Header.Subtitle>
      </Header>
      <Funnel<typeof steps> step={step} steps={steps}>
        <Funnel.Step name="전화번호">
          <Form
            onSubmit={handlePhoneNumberSubmit}
            schema={phoneNumberSchema}
            validateOn="onChange"
          >
            <Form.Text
              name="phoneNumber"
              label="사용자 전화번호"
              placeholder="01012345678"
              inputMode="tel"
              onChange={async (e) => {
                if (e.target.value.length === 11) {
                  await handlePhoneNumberSubmit({
                    phoneNumber: e.target.value,
                  });
                }
                return e.target.value;
              }}
            />
            <Form.Button variant="bottom" isLoading={loading}>
              다음
            </Form.Button>
          </Form>
        </Funnel.Step>
      </Funnel>
      <BottomSheet
        isOpen={isOpen}
        header="인증번호 입력"
        onDismiss={() => {
          setStep('전화번호');
          closeBT();
        }}
      >
        <Form
          className="flex flex-col gap-0 mt-1"
          onSubmit={handleSMSCodeSubmit}
          schema={smsCodeSchema}
        >
          <Form.SMSCode
            ref={codeRef}
            placeholder="숫자 6자리"
            label="발송된 인증번호 입력"
            onChange={(v) => {
              if (v.length === 6) {
                handleSMSCodeSubmit({ code: v });
              }
              return v;
            }}
          />
          <span className="text-xs mt-4">
            휴대폰으로 발송된 6자리 인증번호를 입력해주세요.
          </span>
          <Form.Button
            type="submit"
            className="mt-14"
            variant="filled"
            isLoading={loading}
          >
            확인
          </Form.Button>
        </Form>
      </BottomSheet>
    </AnimatePresence>
  );
}
