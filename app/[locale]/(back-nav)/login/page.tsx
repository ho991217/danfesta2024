'use client';

import { Button, Form, ID, Link, Password } from '@components/common';
import { useAuth } from '@hooks/.';
import { type Params, type SearchParams } from '@lib/types';
import { APIError } from '@lib/utils/validation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { toast } from 'sonner';

import { AuthInfoSchema, authInfoSchema } from './schema';

export default function LoginPage({
  searchParams: { redirect },
}: SearchParams<{ redirect?: string }>) {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const t = useTranslations('LoginPage');

  const onSubmit = async (data: AuthInfoSchema) => {
    try {
      setIsLoading(true);
      await login(data, redirect);
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
        <h1 className="text-3xl font-bold text-center">{t('title')}</h1>
        <span className="text-sm">{t('subTitle')}</span>
      </div>
      <Form
        className="flex flex-col gap-2 px-5 mt-3 z-50"
        onSubmit={onSubmit}
        schema={authInfoSchema}
      >
        <ID label={t('username')} placeholder="32123456" />
        <Password label={t('password')} placeholder="비밀번호" />
        <Form.Group>
          <div className="w-full flex items-end justify-end">
            <Link
              href="/find-my"
              className="text-neutral-500 text-sm w-auto"
              variant="transparent"
            >
              {t('forgot')}
            </Link>
          </div>
          <Link href="/verify" className="flex" variant="transparent">
            {t('signup')}
          </Link>
        </Form.Group>
        <Button type="submit" variant="bottom" isLoading={isLoading}>
          {t('login')}
        </Button>
      </Form>
    </section>
  );
}
