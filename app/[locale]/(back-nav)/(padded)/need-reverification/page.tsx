'use client';

import { AnimatedWrapper, Link } from '@components/common';
import { Header } from '@components/signup';
import Shield from '@icons/shield.png';
import Image from 'next/image';

export default function NeedReverificationPage() {
  return (
    <>
      <Header>
        <AnimatedWrapper delay={0.25}>
          <Header.Title>학사정보 재인증</Header.Title>
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.5}>
          <Header.Subtitle>
            학사정보가 만료되어 재인증이 필요해요.
          </Header.Subtitle>
        </AnimatedWrapper>
      </Header>
      <AnimatedWrapper
        delay={0.75}
        className="absolute top-1/2 left-1/2 -ml-[100px] -mt-[100px] flex items-center justify-center w-[200px] h-[200px]"
      >
        <Image
          src={Shield}
          alt="shield"
          className="drop-shadow-2xl"
          width={200}
          height={200}
        />
      </AnimatedWrapper>
      <AnimatedWrapper delay={1} className="fixed w-full bottom-0">
        <Link
          href={{ pathname: '/verify', query: { reverify: 'true' } }}
          variant="bottom"
        >
          재학생 인증하기
        </Link>
      </AnimatedWrapper>
    </>
  );
}
