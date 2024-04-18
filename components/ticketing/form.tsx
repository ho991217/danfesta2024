'use client';

import { post } from '@/api';
import { API_ROUTES, API_URL, COOKIE_KEYS } from '@/lib/constants';
import APIError from '@/lib/utils/error/api-error';
import { useCookies } from 'next-client-cookies';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { z } from 'zod';

import { Form } from '../common';

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
  const cookies = useCookies();

  const handleSubmit = async (v: Schema) => {
    const token = cookies.get(COOKIE_KEYS.accessToken);
    if (!token) throw new Error('로그인이 필요합니다.');

    try {
      await post(
        API_ROUTES.ticket.apply,
        {
          eventId,
          captchaKey,
          captchaValue: v.captchaValue,
        },
        {
          token,
        },
      );

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
      className="flex gap-0"
      validateOn="onSubmit"
    >
      <Form.Text name="captchaValue" className="mb-4" />
      <Form.Button type="submit" variant="filled" className="mb-2">
        신청
      </Form.Button>
      <span className="text-[10px] text-neutral-500">
        이벤트 신청 시 개인정보 제공에 동의한 것으로 간주합니다.
      </span>
    </Form>
  );
}
