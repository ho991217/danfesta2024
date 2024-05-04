'use client';

import { type SMSVerificationType } from '@/app/components/common/form/phone';
import { Phone } from '@components/common';
import { Header } from '@components/signup';
import { type SearchParams } from '@lib/types';
import { assert } from '@lib/utils';

export default function SMSPage({
  searchParams: { token: tokenParam, type },
}: SearchParams<{ token: string; type: SMSVerificationType }>) {
  assert('params', type);
  if (type === 'signup') {
    assert('params', tokenParam);
    assert('uuid', tokenParam);
  }

  return (
    <>
      <Header>
        <Header.Title>휴대폰 인증</Header.Title>
        <Header.Subtitle>전화번호를 입력해주세요.</Header.Subtitle>
      </Header>
      <Phone type={type} token={tokenParam} />
    </>
  );
}
