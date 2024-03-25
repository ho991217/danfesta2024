'use client';

import { Button, Form } from '../common';
import { z } from 'zod';

const schema = z.object({
  captchaValue: z.string(),
});

export default function TicketingForm() {
  return (
    <Form onSubmit={(v) => console.log(v)} schema={schema} className='grid'>
      <Form.Text name='captchaValue' />
      <Form.Button type='submit' variant='filled'>
        신청
      </Form.Button>
    </Form>
  );
}
