'use client';

import { ROUTES } from '@/constants';
import { useAuth } from '@/hooks';
import { Button, Form, Link } from '@components/common';
import APIError from '@lib/utils/error/api-error';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

import { AuthInfoSchema, authInfoSchema } from './schema';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const locale = useLocale();
  const { login } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: AuthInfoSchema) => {
    try {
      setIsLoading(true);
      await login(data);
      router.push(`/${locale}/`);
    } catch (error) {
      const e = error as APIError;
      toast.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full">
      <div className="flex flex-col items-center w-full pt-6 pb-10">
        <h1 className="text-3xl font-bold text-center">LOGIN</h1>
        <span className="text-sm">서비스를 이용하시려면 로그인해주세요.</span>
      </div>
      <Form
        className="flex flex-col gap-2 px-5 mt-3 z-50"
        onSubmit={onSubmit}
        schema={authInfoSchema}
      >
        <Form.ID label="단국대학교 포털 아이디" placeholder="32123456" />
        <Form.Password
          label="단국대학교 포털 비밀번호"
          placeholder="비밀번호"
        />
        <Form.Group>
          <div className="w-full flex items-center justify-end">
            <Link
              href={ROUTES.findMy.password}
              className="text-neutral-500 text-sm"
            >
              <Button
                variant="transparent"
                animateOnClick
                className="py-2 h-auto"
              >
                <span>비밀번호를 잊으셨나요?</span>
              </Button>
            </Link>
          </div>
          <Button variant="transparent" animateOnClick>
            <Link href={ROUTES.verify} className="flex">
              회원가입
            </Link>
          </Button>
        </Form.Group>
        <Form.Button type="submit" variant="bottom" isLoading={isLoading}>
          로그인
        </Form.Button>
      </Form>
    </section>
  );
}
