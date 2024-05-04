'use client';

import { post } from '@/app/api';
import { API_ROUTES } from '@/app/lib/constants';
import { APIError, CustomError, ErrorCause } from '@/app/lib/utils/validation';
import { useClientSideToken } from '@app/hooks';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button, Form, Input } from '../common';

const schema = z.object({
  captchaValue: z.string().trim().min(1, { message: '필수 입력 사항입니다.' }),
});

export type TicketApplyRequest = {
  eventId: string;
  captchaKey: string;
  captchaValue: string;
};

type Schema = z.infer<typeof schema>;

export default function TicketingForm({
  eventId,
  captchaKey,
}: Omit<TicketApplyRequest, 'captchaValue'>) {
  const router = useRouter();
  const locale = useLocale();
  const token = useClientSideToken();

  const handleSubmit = async (v: Schema) => {
    if (!token) throw new CustomError(ErrorCause.NOT_LOGGED_IN);

    try {
      const data = {
        eventId,
        captchaKey,
        captchaValue: v.captchaValue,
      };
      await post(API_ROUTES.ticket.apply, data, {
        token,
      });

      toast.success('신청이 완료되었습니다.');
      router.push(`/${locale}/ticketing/${eventId}/result`);
    } catch (error) {
      const e = error as APIError;
      console.error(e);
      toast.error(e.message);
      if (e.message !== '이미 신청했습니다.') router.refresh();
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      schema={schema}
      className="flex gap-0"
      validateOn="onSubmit"
    >
      <Input
        name="captchaValue"
        className="mb-4"
        placeholder="캡차를 입력하세요."
      />
      <Button type="submit" variant="filled" className="mb-2">
        신청
      </Button>
      <span className="text-[10px] text-neutral-500">
        이벤트 신청 시 개인정보 제공에 동의한 것으로 간주합니다.
      </span>
    </Form>
  );
}
