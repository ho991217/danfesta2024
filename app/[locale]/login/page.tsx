'use client';

import { Form } from '@components/common';
import authenticate, { type AuthReq } from './actions';
import useToastStore from '@/app/stores/toast-state';

export default function LoginPage() {
  const { open } = useToastStore();

  const onSubmit = async (data: AuthReq) => {
    try {
      await authenticate(data);
    } catch (error) {
      const { message } = error as Error;
      open(message ?? '로그인에 실패했습니다.');
    }
  };

  return (
    <section className='h-full w-full flex flex-col justify-between'>
      <Form className='flex flex-col mb-10 gap-4' onSubmit={onSubmit}>
        <Form.ID />
        <Form.Password />
        <Form.Group>
          <Form.Button type='submit'>로그인</Form.Button>
          <Form.Button type='link' to='/signup' variant='transparent'>
            회원가입
          </Form.Button>
        </Form.Group>
      </Form>
    </section>
  );
}
