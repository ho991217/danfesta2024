'use client';

import { post } from '@/api';
import { API_ROUTES, ROUTES } from '@/constants';
import { Form } from '@components/common';
import { Funnel, Header } from '@components/signup';
import APIError from '@lib/utils/error/api-error';
import getRandomNickname from '@lib/utils/generator/generate-random-nickname';
import { AnimatePresence } from 'framer-motion';
import { getJosaPicker } from 'josa';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

import { tokenSchema } from '../signup/schema';
import { SignUpSchema, signUpSchema } from './schema';

const steps = ['비밀번호', '동일한 비밀번호'] as const;

type SignupReqeust = {
  nickname: string;
  password: SignUpSchema['password'];
};

type PasswordResetReqeust = {
  token: string;
  password: SignUpSchema['password'];
};

type SignupResponse = {
  message: string;
};

type Steps = (typeof steps)[number];

export type PasswordSetType = 'signup' | 'find-my-password';

export default function PasswordSetPage({
  searchParams: { token, type },
}: {
  searchParams: { token: string; type: PasswordSetType };
}) {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<Steps>('비밀번호');
  const currentStep = steps.indexOf(step);
  const isLastStep = currentStep === steps.length;
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);

  const validToken = tokenSchema.safeParse({ token });
  const locale = useLocale();
  const router = useRouter();
  const josa = getJosaPicker('을');

  if (!token || !validToken.success) {
    throw new Error('비정상적인 토큰입니다.');
  }

  const handleSubmit = async ({ password }: SignUpSchema) => {
    switch (step) {
      case '비밀번호':
        setLoading(true);
        setLoading(false);
        onNext(step);
        break;
      case '동일한 비밀번호':
        setLoading(true);
        try {
          switch (type) {
            case 'signup':
              await post<SignupReqeust, SignupResponse>(
                API_ROUTES.user.signup.register(token),
                {
                  nickname: getRandomNickname(),
                  password,
                },
              );
              router.push(`/${locale}${ROUTES.signup.complete}`);
              break;
            case 'find-my-password':
              await post<PasswordResetReqeust, {}>(
                API_ROUTES.user.findMy.password.reset,
                {
                  token,
                  password,
                },
              );
              router.push(`/${locale}${ROUTES.findMy.password.complete}`);
              break;
          }
        } catch (error) {
          const e = error as APIError;
          toast.error(e.message);
        } finally {
          setLoading(false);
        }
        break;
    }
  };

  const onNext = async (currentStep: Steps) => {
    if (isLastStep) return;
    if (currentStep === '비밀번호') {
      setStep('동일한 비밀번호');
    }
  };

  useEffect(() => {
    if (passwordRef.current && step === '비밀번호') {
      passwordRef.current.focus();
    }
  }, [passwordRef, step]);

  return (
    <AnimatePresence initial={false}>
      <Header>
        <Header.Title>사용자 정보 설정</Header.Title>
        <Header.Subtitle>
          <Header.Transformer step={step} steps={steps} />
          <span>{josa(step)} 입력해주세요.</span>
        </Header.Subtitle>
      </Header>
      <Form schema={signUpSchema} onSubmit={handleSubmit} validateOn="onChange">
        <Funnel<typeof steps> step={step} steps={steps}>
          <Funnel.Step name="비밀번호">
            <Form.Password
              className="mb-4"
              ref={passwordRef}
              label="비밀번호"
              placeholder="8자 이상"
            />
          </Funnel.Step>
          <Funnel.Step name="동일한 비밀번호">
            <Form.Password
              ref={passwordCheckRef}
              label="비밀번호 확인"
              name="passwordCheck"
              placeholder="8자 이상"
            />
          </Funnel.Step>
        </Funnel>
        <Form.Button variant="bottom" isLoading={loading}>
          다음
        </Form.Button>
      </Form>
    </AnimatePresence>
  );
}
