'use client';

import { post } from '@/api';
import { API_ROUTES, ROUTES } from '@/constants';
import { useBottomSheet } from '@/hooks';
import { BottomSheet, Form } from '@components/common';
import { Funnel, Header } from '@components/signup';
import { APIError, ErrorCause } from '@lib/utils';
import { AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

import { tokenSchema } from '../signup/schema';
import {
  PhoneNumberSchema,
  SMSCodeSchema,
  phoneNumberSchema,
  smsCodeSchema,
} from './schema';

const steps = ['전화번호', '인증번호'] as const;

type Steps = (typeof steps)[number];

export type SMSVerifyType = 'find-my-id' | 'find-my-password' | 'signup';

type SMSRequest = {
  phoneNumber: string;
};

export default function SMSPage({
  searchParams: { token: tokenParam, type },
}: {
  searchParams: { token: string; type: SMSVerifyType };
}) {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string>(tokenParam);
  const [isOpen, openBT, closeBT] = useBottomSheet();
  const [step, setStep] = useState<Steps>('전화번호');
  const [phoneNumberError, setPhoneNumberError] = useState<string>('');
  const currentStep = steps.indexOf(step);
  const isLastStep = currentStep === steps.length;
  const router = useRouter();
  const locale = useLocale();

  const validToken = tokenSchema.safeParse({ token });

  if (!type) {
    throw new Error('비정상적인 접근입니다.', {
      cause: ErrorCause['not-found'],
    });
  }

  if (type === 'signup' && (!token || !validToken.success)) {
    throw new Error('비정상적인 토큰입니다.', { cause: ErrorCause.invalid });
  }

  const handlePhoneNumberSubmit = async ({
    phoneNumber,
  }: PhoneNumberSchema) => {
    try {
      setLoading(true);

      switch (type) {
        case 'signup':
          await post(API_ROUTES.user.signup.sendSMS(token), { phoneNumber });
          onNext(step);
          break;
        case 'find-my-id':
          await post(API_ROUTES.user.findMy.id.sendSMS, { phoneNumber });
          router.push(`/${locale}${ROUTES.findMy.id.complete}`);
          break;
        case 'find-my-password':
          const { token: newToken } = await post<SMSRequest, { token: string }>(
            API_ROUTES.user.findMy.password.sendSMS,
            { phoneNumber },
          );
          setToken(newToken);
          onNext(step);
          break;
      }
    } catch (error) {
      const e = error as APIError;
      setPhoneNumberError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSMSCodeSubmit = async ({ code }: SMSCodeSchema) => {
    try {
      setLoading(true);

      switch (type) {
        case 'signup':
          await post(API_ROUTES.user.signup.verifySMS(token), { code });
          router.push(`/${locale}${ROUTES.signup.info(token)}`);
          break;
        case 'find-my-password':
          await post(API_ROUTES.user.findMy.password.verifySMS, {
            token,
            code,
          });
          router.push(`/${locale}${ROUTES.findMy.password(token)}`);
          break;
      }
    } catch (error) {
      const e = error as Error;
      toast.error(e.message[1]);
      setStep('전화번호');
    } finally {
      closeBT();
      setLoading(false);
    }
  };

  const onNext = (currentStep: Steps) => {
    if (isLastStep) return;
    if (currentStep === '전화번호') {
      setStep('인증번호');
      openBT();
    }
  };

  return (
    <AnimatePresence initial={false}>
      <Header>
        <Header.Title>휴대폰 인증</Header.Title>
        <Header.Subtitle>전화번호를 입력해주세요.</Header.Subtitle>
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
              customError={phoneNumberError}
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
