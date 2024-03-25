'use client';

import { Funnel, Header } from '@/components/signup';
import { AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { TransformerSubtitle } from '@/components/signup/header';
import { Button, Form } from '@/components/common';
import { useEffect, useRef, useState } from 'react';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { tokenSchema } from '../schema';
import { nickNameSchema, passwordSchema, signUpSchema } from './schema';
import { checkNicknameDuplicate, signUp } from './action';
import APIError from '@/lib/utils/error/api-error';
import useToastStore from '@/stores/toast-state';

const steps = ['닉네임', '비밀번호'] as const;

type Steps = (typeof steps)[number];

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<Steps>('닉네임');
  const currentStep = steps.indexOf(step);
  const isLastStep = currentStep === steps.length;
  const [nicknameError, setNicknameError] = useState<string>('');
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  const { open: openToast } = useToastStore();

  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const validToken = tokenSchema.safeParse({ token });
  const locale = useLocale();
  const router = useRouter();

  if (!token || !validToken.success) {
    throw new Error('비정상적인 토큰입니다.');
  }

  const handleSubmit = async (data: any) => {
    switch (step) {
      case '닉네임':
        setLoading(true);
        const unique = await verifyNickname(data.nickname);
        setLoading(false);
        unique && onNext(step);
        break;
      case '비밀번호':
        setLoading(true);
        try {
          await signUp({
            nickname: data.nickname,
            password: data.password,
            token,
          });
          router.push(`/${locale}/signup/complete`);
        } catch (error) {
          const e = error as APIError;
          openToast(e.message);
        } finally {
          setLoading(false);
        }
        break;
    }
  };

  const verifyNickname = async (nickname: string) => {
    try {
      await checkNicknameDuplicate(nickname);
      if (nicknameError) setNicknameError('');
      return true;
    } catch (error) {
      setNicknameError('이미 사용중인 닉네임입니다.');
      return false;
    }
  };

  const onNext = async (currentStep: Steps) => {
    if (isLastStep) return;
    if (currentStep === '닉네임') {
      setStep('비밀번호');
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
          {step === '닉네임' && <TransformerSubtitle text='닉네임을' />}
          {step === '비밀번호' && <TransformerSubtitle text='비밀번호를' />}
          <div className='ml-1'>입력해주세요.</div>
        </Header.Subtitle>
      </Header>
      <Form
        schema={step === '닉네임' ? nickNameSchema : signUpSchema}
        onSubmit={handleSubmit}
        validateOn='onChange'
      >
        <Funnel<typeof steps> step={step} steps={steps}>
          <Funnel.Step name='비밀번호'>
            <Form.Password
              className='mb-4'
              ref={passwordRef}
              label='비밀번호'
              placeholder='8자 이상'
            />
            <Form.Password
              ref={passwordCheckRef}
              label='비밀번호 확인'
              name='passwordCheck'
              placeholder='8자 이상'
            />
          </Funnel.Step>
          <Funnel.Step name='닉네임'>
            <Form.Text
              label='닉네임'
              placeholder='날으는 다람쥐'
              name='nickname'
              customError={nicknameError}
            />
          </Funnel.Step>
        </Funnel>
        <Form.Button variant='bottom' isLoading={loading}>
          다음
        </Form.Button>
      </Form>
    </AnimatePresence>
  );
}
