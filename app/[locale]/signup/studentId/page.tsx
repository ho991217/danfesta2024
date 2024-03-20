'use client';

import { useEffect, useRef, useState } from 'react';
import { BottomSheet, Form } from '@/components/common';
import { Funnel, Header } from '@/components/signup';
import { useBottomSheet } from '@/hooks';
import { AnimatePresence } from 'framer-motion';
import { DKUPortalAuthInfo, verifyDKUStudent } from './action';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { isStudentId } from '@/lib/utils/validators';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { TransformerSubtitle } from '@/components/signup/header';
import { z } from 'zod';
import useToastStore from '@/stores/toast-state';

const steps = ['학번', '비밀번호', '약관동의'] as const;

type Steps = (typeof steps)[number];

export const verificationSchema = z.object({
  dkuStudentId: z
    .string({ required_error: '학번을 입력해주세요.' })
    .length(8, '학번은 8자리로 입력해주세요.')
    .startsWith('3', '학번은 3으로 시작합니다.'),
  dkuPassword: z.string({ required_error: '비밀번호를 입력해주세요.' }),
});

export type VerificationSchema = z.infer<typeof verificationSchema>;

export default function Page() {
  const [step, setStep] = useState<Steps>('학번');
  const [isLoading, setIsLoading] = useState(false);
  const { open, isOpen, close } = useBottomSheet();
  const passwordRef = useRef<HTMLInputElement>(null);
  const currentStep = steps.indexOf(step);
  const isLastStep = currentStep === steps.length;
  const router = useRouter();
  const locale = useLocale();
  const { open: openToast } = useToastStore();

  const verify = async (dkuData: DKUPortalAuthInfo) => {
    try {
      setIsLoading(true);
      const { signupToken } = await verifyDKUStudent(dkuData);
      setIsLoading(false);
      close();
      router.push(`/${locale}/signup/phone?token=${signupToken}`);
    } catch (error) {
      const e = error as Error;
      openToast(e.message);
    }
  };

  const handleSubmit = async (dkuData: DKUPortalAuthInfo) => {
    switch (step) {
      case '학번':
        onNext(steps[currentStep]);
        break;
      case '비밀번호':
        onNext(steps[currentStep]);
        break;
      case '약관동의':
        verify(dkuData);
    }
  };

  const onNext = (currentStep: Steps) => {
    if (isLastStep) return;
    if (currentStep === '학번') {
      setStep('비밀번호');
    } else if (currentStep === '비밀번호') {
      open();
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
          {step === '학번' && <TransformerSubtitle text='학번을' />}
          {step === '비밀번호' && <TransformerSubtitle text='비밀번호를' />}
          <div className='ml-1'>입력해주세요.</div>
        </Header.Subtitle>
      </Header>
      <Form<VerificationSchema>
        onSubmit={handleSubmit}
        schema={verificationSchema}
      >
        <Funnel<typeof steps> step={step} steps={steps}>
          <Funnel.Step name='비밀번호'>
            <Form.Password
              ref={passwordRef}
              label='단국대학교 포털 비밀번호'
              name='dkuPassword'
              placeholder='8자 이상의 영문, 숫자'
            />
          </Funnel.Step>
          <Funnel.Step name='학번'>
            <Form.ID
              name='dkuStudentId'
              placeholder='숫자 8자리'
              label='단국대학교 포털 아이디'
              onChange={async (event) => {
                if (isStudentId(event.target.value) && step === '학번') {
                  onNext(steps[currentStep]);
                }
                return event.target.value;
              }}
            />
          </Funnel.Step>
          <Funnel.Step name='약관동의' onEnter={open}>
            <BottomSheet isOpen={isOpen} onDismiss={close} header='이용동의'>
              <Terms />
              <Form.Button isLoading={isLoading}>동의</Form.Button>
            </BottomSheet>
          </Funnel.Step>
        </Funnel>
        <Form.Button variant='bottom' disabled={isLoading}>
          다음
        </Form.Button>
      </Form>
    </AnimatePresence>
  );
}

function Terms() {
  return (
    <Accordion type='single' collapsible className='w-full mb-10 text-sm'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>어떤 정보를 제공해야 하나요?</AccordionTrigger>
        <AccordionContent>
          단페스타 2024 서비스를 이용하기 위해서는 다음과 같은 정보를
          제공해야합니다.
          <ul>
            <li> - 학번</li>
            <li> - 단국대학교 포털 비밀번호</li>
            <li> - 전화번호</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>제공한 정보는 어디에 사용되나요?</AccordionTrigger>
        <AccordionContent>
          제공된 정보는 단페스타 2024 서비스 이용을 위한 목적으로만 사용되며
          다른 목적으로 사용되지 않습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>포털 비밀번호도 제공해야 하나요?</AccordionTrigger>
        <AccordionContent>
          단국대학교 포털 비밀번호는 학생 인증을 위한 목적으로만 사용되며 즉시
          삭제됩니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
