'use client';

import { Link } from '@/components/common';
import { useAuth } from '@/hooks';
// import Glass from '@/public/videos/glass.mp4';
import { Button, Form } from '@components/common';
import APIError from '@lib/utils/error/api-error';
import { useLocale } from 'next-intl';
import Video from 'next-video';
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
    <>
      <div className="absolute top-0 left-0 -z-10">
        <Video
          className="object-cover w-full"
          src={'/videos/glass.mp4'}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        ></Video>
        <div className="flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute min-w-[300px]">
          <div className="flex items-center w-full justify-center">
            <h1 className="text-3xl font-bold text-center text-white">LOGIN</h1>
          </div>
          <span className="text-sm text-white">
            서비스를 이용하시려면 로그인해주세요.
          </span>
        </div>
      </div>
      <section className="w-full mt-[calc(100vw*0.5625-72px+1rem)]">
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
          <Form.Group className="mt-4">
            <Form.Button type="submit" variant="bottom" isLoading={isLoading}>
              로그인
            </Form.Button>
            <Button variant="transparent" animateOnClick>
              <Link
                href="/verify"
                className="grid h-full w-full place-items-center"
              >
                회원가입
              </Link>
            </Button>
          </Form.Group>
        </Form>
      </section>
    </>
  );
}
