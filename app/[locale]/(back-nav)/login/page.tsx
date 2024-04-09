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
      <div className="absolute top-0 -z-10 object-cover w-full">
        <Video
          className="object-cover w-full"
          src={'/videos/glass.mp4'} // 비디오 파일 경로
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        ></Video>
      </div>
      <section className="flex w-full flex-col items-center justify-end px-5">
        <div className="flex flex-col mb-24 mt-4 items-center">
          <div className="flex items-center w-full justify-center">
            <h1 className="text-3xl font-bold text-center">LOGIN</h1>
          </div>
          <span className="text-sm">서비스를 이용하시려면 로그인해주세요.</span>
        </div>
        <Form
          className="flex flex-col gap-2"
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
