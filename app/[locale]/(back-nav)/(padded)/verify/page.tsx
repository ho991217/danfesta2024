'use client';

import { post } from '@app/api';
import { useBottomSheet } from '@app/hooks';
import { Button, Form, ID, Password, Terms } from '@components/common';
import { Funnel, Header, TransformerSubtitle } from '@components/signup';
import { API_ROUTES, COOKIE_KEYS } from '@lib/constants';
import { useRouter } from '@lib/navigation';
import { type SearchParams } from '@lib/types';
import { APIError, isStudentId } from '@lib/utils';
import { AnimatePresence } from 'framer-motion';
import { getJosaPicker } from 'josa';
import { useCookies } from 'next-client-cookies';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

import { DKUVerificationSchema, dkuVerificationSchema } from './schema';
import { reverifyTerms, signupTerms } from './terms';

const steps = ['학번', '비밀번호', '약관동의'] as const;

type DKUResponse = {
  signupToken: string;
  student: {
    studentName: string;
    studentId: string;
    age: string;
    gender: string;
    major: string;
  };
};

type Steps = (typeof steps)[number];

export default function VerifyPage({
  searchParams: { reverify },
}: SearchParams<{ reverify?: string }>) {
  const [step, setStep] = useState<Steps>('학번');
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isOpen, openTerm, closeTerm] = useBottomSheet();
  const passwordRef = useRef<HTMLInputElement>(null);
  const currentStep = steps.indexOf(step);
  const isLastStep = currentStep === steps.length;
  const router = useRouter();
  const cookies = useCookies();
  const josa = getJosaPicker('을');

  const verify = async (dkuData: DKUVerificationSchema) => {
    try {
      setIsLoading(true);
      const { signupToken } = await post<DKUVerificationSchema, DKUResponse>(
        API_ROUTES.user.dku.verify,
        dkuData,
      );
      setToken(signupToken);
      onNext(steps[currentStep]);
    } catch (error) {
      const err = error as APIError;
      toast.error(err.message);
      if (err.message === '이미 같은 학번으로 회원가입되어 있습니다.') {
        router.push('/login');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const reVerify = async (dkuData: DKUVerificationSchema) => {
    try {
      setIsLoading(true);
      await post<DKUVerificationSchema, {}>(
        API_ROUTES.user.dku.reverify,
        dkuData,
      );
      cookies.set(COOKIE_KEYS.verified, 'true');
      onNext(steps[currentStep]);
    } catch (error) {
      const message = error as APIError;
      toast.error(message.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (dkuData: DKUVerificationSchema) => {
    switch (step) {
      case '학번':
        onNext(step);
      case '비밀번호':
        reverify ? reVerify(dkuData) : verify(dkuData);
        break;
      case '약관동의':
        if (reverify) {
          toast.success('재인증이 완료되었습니다.');
          router.push('/');
          return;
        }
        router.push(`/sms?type=signup&token=${token}`);
    }
  };

  const onNext = (currentStep: Steps) => {
    if (isLastStep) return;
    if (currentStep === '학번') {
      setStep('비밀번호');
    } else if (currentStep === '비밀번호') {
      setStep('약관동의');
      openTerm();
    }
  };

  useEffect(() => {
    const t = requestAnimationFrame(() => {
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
    });
    return () => cancelAnimationFrame(t);
  }, [step]);

  return (
    <AnimatePresence initial={false}>
      <Header>
        <Header.Title>단국대학교 재학생 인증</Header.Title>
        <Header.Subtitle>
          {step !== '약관동의' ? (
            <>
              <Header.Transformer step={step} steps={steps} />
              <span>{josa(step)} 입력해주세요.</span>
            </>
          ) : (
            <TransformerSubtitle>약관에 동의해주세요.</TransformerSubtitle>
          )}
        </Header.Subtitle>
      </Header>
      <Form
        onSubmit={handleSubmit}
        schema={dkuVerificationSchema}
        validateOn="onChange"
      >
        <Funnel<typeof steps> step={step} steps={steps}>
          <Funnel.Step name="비밀번호">
            <Password
              ref={passwordRef}
              name="dkuPassword"
              label="단국대학교 포털 비밀번호"
              placeholder="8자 이상의 영문, 숫자"
            />
          </Funnel.Step>
          <Funnel.Step name="학번">
            <ID
              name="dkuStudentId"
              label="단국대학교 포털 아이디"
              placeholder="숫자 8자리"
              onChange={async (event) => {
                if (isStudentId(event.target.value) && step === '학번') {
                  onNext(steps[currentStep]);
                }
                return event.target.value;
              }}
            />
          </Funnel.Step>
        </Funnel>

        <Terms
          terms={reverify ? reverifyTerms : signupTerms}
          isOpen={isOpen}
          onDecline={() => {
            closeTerm();
            setStep('비밀번호');
          }}
        />

        <Button type="submit" variant="bottom" isLoading={isLoading}>
          다음
        </Button>
      </Form>
    </AnimatePresence>
  );
}
