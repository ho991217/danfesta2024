'use client';

import { Form } from '@components/common';

export default function LoginPage() {
  return (
    <section className='h-full w-full flex flex-col justify-between'>
      <Form className='flex flex-col mb-10 gap-4'>
        <Form.Input type='text' />
        <Form.Input type='password' />
        <Form.Button type='submit'>로그인</Form.Button>
      </Form>
    </section>
  );
}
