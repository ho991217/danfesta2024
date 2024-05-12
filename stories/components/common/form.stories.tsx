import { Form, Input, Password } from '@components/common';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';

export default {
  title: 'COMMON/Form',
  component: Form,
  args: { onSubmit: fn() },
  tags: ['autodocs'],
} as Meta<typeof Form>;

type Template = StoryObj<typeof Form>;

export const Default: Template = {
  render: (args) => (
    <Form {...args}>
      <Input label="닉네임" placeholder="nickname" name="nickname" />
      <Password label="패스워드" placeholder="password" name="password" />
      <Input label="disabled" placeholder="disabled" name="disabled" disabled />
    </Form>
  ),
};

export const Error: Template = {
  render: (args) => (
    <Form {...args}>
      <Input
        label="닉네임"
        placeholder="nickname"
        name="nickname"
        customError="중복된 아이디는 사용하실 수 없습니다."
      />
      <Password
        label="패스워드"
        placeholder="password"
        name="password"
        customError="비밀번호는 대소문자, 특수기호 포함 8자리 이상이어야 합니다."
      />
      <Password
        label="패스워드2"
        placeholder="password"
        name="password2"
        customError="비밀번호가 일치하지 않습니다."
      />
    </Form>
  ),
};
