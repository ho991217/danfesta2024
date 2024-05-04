'use client';

import { post } from '@app/api';
import { useBottomSheet } from '@app/hooks';
import { API_ROUTES } from '@lib/constants';
import { useRouter } from '@lib/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

import BottomSheet from '../../bottom-sheet';
import Button from '../../button';
import Form from '../form';
import Input from '../input';
import OTP from './otp';

export const phoneNumberSchema = z.object({
  phoneNumber: z.string().length(11, '전화번호는 11자리로 입력해주세요.'),
});

export type PhoneNumberSchema = z.infer<typeof phoneNumberSchema>;

export const smsCodeSchema = z.object({
  code: z.string().length(6, '인증번호는 6자리로 입력해주세요.'),
});

export type SMSCodeSchema = z.infer<typeof smsCodeSchema>;

export type SMSVerificationType = 'find-my-id' | 'find-my-password' | 'signup';

type PhoneProps = {
  type: SMSVerificationType;
  token: string;
};

export default function Phone({ type, token: tokenParam }: PhoneProps) {
  const [token, setToken] = useState<string>(tokenParam);
  const [isOpen, open, close] = useBottomSheet();
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const locale = useLocale();

  const handlePhoneNumberSubmit = async ({
    phoneNumber,
  }: PhoneNumberSchema) => {
    try {
      setLoading(true);

      switch (type) {
        case 'signup':
          await post(API_ROUTES.user.signup.sendSMS(token), { phoneNumber });
          open();
          break;
        case 'find-my-id':
          await post(API_ROUTES.user.findMy.id.sendSMS, { phoneNumber });

          router.push('/find-my/id/complete');
          break;
        case 'find-my-password':
          const { token: newToken } = await post<
            { phoneNumber: string },
            { token: string }
          >(API_ROUTES.user.findMy.password.sendSMS, { phoneNumber });
          setToken(newToken);
          open();
          break;
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const handleSMSCodeSubmit = async ({ code }: SMSCodeSchema) => {
    if (type === 'find-my-id') return;

    try {
      setLoading(true);

      switch (type) {
        case 'signup':
          await post(API_ROUTES.user.signup.verifySMS(token), { code });
          break;
        case 'find-my-password':
          await post(API_ROUTES.user.findMy.password.verifySMS, {
            token,
            code,
          });
          break;
      }
      router.push(`/password?token=${token}&type=${type}`);
    } catch (error) {
      const e = error as Error;
      toast.error(e.message[1]);
    } finally {
      close();
      setLoading(false);
    }
  };

  return (
    <>
      <Form
        className="flex flex-col gap-0 mt-1"
        onSubmit={handlePhoneNumberSubmit}
        schema={phoneNumberSchema}
      >
        <Input
          name="phoneNumber"
          placeholder="01012345678"
          label="전화번호"
          onChange={(e) => {
            if (e.target.value.length === 11) {
              handlePhoneNumberSubmit({ phoneNumber: e.target.value });
              return;
            }
            return e.target.value;
          }}
        />
        <Button type="submit" variant="bottom">
          다음
        </Button>
      </Form>

      <BottomSheet
        isOpen={isOpen}
        header="인증번호 입력"
        onDismiss={() => {
          close();
        }}
      >
        <Form
          className="flex flex-col gap-0 mt-1"
          onSubmit={handleSMSCodeSubmit}
          schema={smsCodeSchema}
        >
          <OTP onSubmit={(v) => handleSMSCodeSubmit({ code: v })} />
          <span className="text-xs mt-4">
            휴대폰으로 발송된 6자리 인증번호를 입력해주세요.
          </span>
          <Button
            type="submit"
            className="mt-14"
            variant="filled"
            isLoading={loading}
          >
            확인
          </Button>
        </Form>
      </BottomSheet>
    </>
  );
}
