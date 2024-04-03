'use client';

import {
  applyTicket,
  type TicketApplyRequest,
} from '@/app/[locale]/(back-nav)/ticketing/[eventId]/action';
import { Form } from '../common';
import { z } from 'zod';
import APIError from '@/lib/utils/error/api-error';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const schema = z.object({
  captchaValue: z.string().trim().min(1, { message: '필수 입력 사항입니다.' }),
});

type Schema = z.infer<typeof schema>;

export default function TicketingForm({
  eventId,
  captchaKey,
}: Omit<TicketApplyRequest, 'captchaValue'>) {
  const router = useRouter();
  const locale = useLocale();

  const handleSubmit = async (v: Schema) => {
    try {
      await applyTicket({
        eventId,
        captchaKey,
        captchaValue: v.captchaValue,
      });
      toast.success('신청이 완료되었습니다.');
      router.push(`/${locale}/ticketing/${eventId}/result`);
    } catch (error) {
      const e = error as APIError;
      toast.error(e.message);
      if (e.message !== '이미 신청했습니다.') router.refresh();
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      schema={schema}
      className='flex gap-0'
      validateOn='onSubmit'
    >
      <Form.Text name='captchaValue' className='mb-4' />
      <Form.Button type='submit' variant='filled' className='mb-2'>
        신청
      </Form.Button>
      <span className='text-neutral-500 text-[10px]'>
        이벤트 신청 시 개인정보 제공에 동의한 것으로 간주합니다.
      </span>
    </Form>
  );
}
