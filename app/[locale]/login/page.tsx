'use client';

import { Form } from '@components/common';

export default function LoginPage() {
  return (
    <section className='h-full w-full flex flex-col justify-between'>
      <Form className='flex flex-col mb-10 gap-4'>
        <Form.ID />
        <Form.Password />
        <Form.Group className='gap-1'>
          <Form.Button>로그인</Form.Button>
          <Form.Button type='link' to='/signup' variant='transparent'>
            회원가입
          </Form.Button>
        </Form.Group>
      </Form>
    </section>
  );
}
