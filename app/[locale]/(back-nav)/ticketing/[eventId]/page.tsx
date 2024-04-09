import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { get, getImage } from '@/api';
import { API_ROUTES } from '@/constants';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import getServerSideToken from '@/api/get-server-side-token';

const Form = dynamic(() => import('@/components/ticketing/form'));
const RefetchButton = dynamic(
  () => import('@/components/ticketing/refetch-button')
);

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

type Term = {
  index: string;
  content: string;
};

export default async function Page({
  params: { eventId },
}: {
  params: { eventId: string };
}) {
  let captchaKey = '';
  let captchaImage = '';

  try {
    const token = await getServerSideToken();
    const { key } = await get<{ key: string }>(API_ROUTES.ticket.captcha.key, {
      token,
    });
    const image = await getImage(API_ROUTES.ticket.captcha.image(key), {
      token,
    });
    captchaKey = key;
    captchaImage = image;

    return (
      <div className='flex flex-col gap-4 mb-20 px-5'>
        <Card className='overflow-hidden'>
          <CardHeader>개인정보 제 3자 제공 동의</CardHeader>
          <CardContent className='text-neutral-500'>
            ㈜무진정보기술 단버리 회원님의 개인정보를 개인정보 처리방침에서
            고지한 제 3 자 제공범위 내에서 제공하며, 정보주체의 사전동의 없이 동
            범위를 초과하여 제 3자에게 제공하지 않습니다.
          </CardContent>
          <Accordion type='multiple'>
            {terms.map(({ index, content }) => (
              <AccordionItem
                key={index}
                value={index}
                className='px-6 last:border-b-0'
              >
                <AccordionTrigger>{index}</AccordionTrigger>
                <AccordionContent className='text-neutral-500'>
                  {content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <Card>
          <CardHeader className='pb-4'>
            <CardTitle>
              <div className='w-full aspect-[7/2] grid grid-cols-[5fr,1fr] gap-4'>
                <div className='relative rounded-lg overflow-hidden'>
                  <Suspense fallback={null}>
                    {captchaImage.length > 0 && (
                      <Image src={captchaImage} fill alt='캡챠 이미지' />
                    )}
                  </Suspense>
                </div>
                <RefetchButton />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={null}>
              {captchaKey.length > 0 && eventId.length > 0 && (
                <Form captchaKey={captchaKey} eventId={eventId} />
              )}
            </Suspense>
          </CardContent>
        </Card>
      </div>
    );
  } catch (e) {
    const error = e as Error;
    console.error(e);
    return (
      <div className='flex flex-col gap-4 px-5'>
        <span className='text-neutral-300 dark:text-neutral-800'>
          {/* 이벤트가 없습니다. */}
          {error.message}
        </span>
      </div>
    );
  }
}
