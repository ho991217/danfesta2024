'use client';

import { Form } from '@components/common';
import authenticate, { AuthData } from './actions';
import { FormEvent } from 'react';

export default function LoginPage() {
  const onSubmit = async (data: AuthData) => {
    const response = await authenticate(data);
    console.log(response);
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
