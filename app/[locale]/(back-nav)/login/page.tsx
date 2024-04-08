'use client';

import { Button, Form } from '@/components/common';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { AuthInfoSchema, authInfoSchema } from './schema';
import { useState } from 'react';
import APIError from '@/lib/utils/error/api-error';
import { toast } from 'sonner';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/navigation';

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
    <section className='w-full flex flex-col justify-end items-center px-5'>
      <Form
        className='flex flex-col gap-2'
        onSubmit={onSubmit}
        schema={authInfoSchema}
      >
        <Form.ID label='단국대학교 포털 아이디' placeholder='32123456' />
        <Form.Password
          label='단국대학교 포털 비밀번호'
          placeholder='비밀번호'
        />
        <Form.Group className='mt-4'>
          <Form.Button type='submit' variant='bottom' isLoading={isLoading}>
            로그인
          </Form.Button>
          <Button variant='transparent' animateOnClick>
            <Link
              href={`/${locale}/verify`}
              className='w-full h-full grid place-items-center'
            >
              회원가입
            </Link>
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
}
