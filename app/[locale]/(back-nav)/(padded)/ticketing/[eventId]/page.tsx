import { get, getImage, getServerSideToken } from '@api/.';
import { Form, RefetchButton } from '@components/ticketing';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { API_ROUTES } from '@lib/constants';
import { type Params } from '@lib/types';
import Image from 'next/image';
import { Suspense } from 'react';

import { getCaptchaImage } from './action';

type Term = {
  index: string;
  content: string;
};

const terms: Term[] = [
  {
    index: '제공받는 자',
    content: '단국대학교 총학생회',
  },
  {
    index: '제공 목적',
    content: '단페스타 티켓팅',
  },
  {
    index: '보유기간',
    content: '가입일로 부터 4년',
  },
  {
    index: '제공 항목',
    content:
      '이름, 전화번호, 단국대학교 학번, 아이디, 비밀번호, 재학여부, 소속단과대, 소속 학과',
  },
  {
    index: '동의 거부권',
    content:
      '개인정보 제공에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 단페스타 티켓팅 이용에 제한을 받습니다.',
  },
];

export default async function Page({
  params: { eventId },
}: Params<{ eventId: string }>) {
  const captcha = await getCaptchaImage();

  if (captcha === null) {
    return <span>캡차 키를 받아오는중에 오류가 발생했습니다.</span>;
  }

  const { image, key } = captcha;

  return (
    <div className="flex flex-col gap-4 mb-20">
      <Card className="overflow-hidden">
        <CardHeader>개인정보 제 3자 제공 동의</CardHeader>
        <CardContent className="text-neutral-500">
          ㈜무진정보기술 단버리 회원님의 개인정보를 개인정보 처리방침에서 고지한
          제 3 자 제공범위 내에서 제공하며, 정보주체의 사전동의 없이 동 범위를
          초과하여 제 3자에게 제공하지 않습니다.
        </CardContent>
        <Accordion type="multiple">
          {terms.map(({ index, content }) => (
            <AccordionItem
              key={index}
              value={index}
              className="px-6 last:border-b-0"
            >
              <AccordionTrigger>{index}</AccordionTrigger>
              <AccordionContent className="text-neutral-500">
                {content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle>
            <div className="w-full aspect-[7/2] grid grid-cols-[5fr,1fr] gap-4">
              <div className="relative rounded-lg overflow-hidden">
                {image.length > 0 && (
                  <Image src={image} fill alt="캡챠 이미지" />
                )}
              </div>
              <RefetchButton />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={null}>
            {key.length > 0 && eventId.length > 0 && (
              <Form captchaKey={key} eventId={eventId} />
            )}
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
