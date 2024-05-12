'use client';

import { AnimatedWrapper, Link } from '@components/common';
import { Header } from '@components/signup';
import Verification from '@icons/verification.png';
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
        className="absolute top-1/2 left-1/2 -ml-[120px] -mt-[120px] flex items-center justify-center w-[240px] h-[240px]"
      >
        <Image
          src={Verification}
          alt="shield"
          className="w-full aspect-square"
          width={300}
          height={300}
        />
      </AnimatedWrapper>
      <AnimatedWrapper delay={1} bottom>
        <div className="absolute bottom-5 mx-auto w-[calc(100%-2.5rem)]">
          <Link
            variant="filled"
            href={{ pathname: '/verify', query: { reverify: 'true' } }}
          >
            재학생 인증하기
          </Link>
          <Link href="/" variant="transparent">
            나중에 하기
          </Link>
        </div>
      </AnimatedWrapper>
    </>
  );
}
