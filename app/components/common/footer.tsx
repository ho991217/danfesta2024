import { cn } from '@/app/lib/utils';
import FeastaLogo from '@/public/icons/feasta-logo.png';
import GithubLogo from '@/public/icons/github.svg';
import DanfestaLogo from '@/public/icons/logo.svg';
import UMateLogo from '@/public/icons/u-mate-logo.webp';
import Image from 'next/image';
import Link from 'next/link';

import Button from './button';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col px-5 pt-10 pb-20 items-center rounded-t-3xl border-neutral-200 border-[1px] dark:border-neutral-800 lg:max-w-full">
      <Block className="-translate-x-3 py-5">
        <DanfestaLogo className="w-16" />
        <div className="flex flex-col items-start">
          <h6 className="text-lg font-bold">
            단페스타 <strong className="text-primary">DANFESTA</strong>
          </h6>
          <span className="text-neutral-500 text-xs">
            2024학년도 단국대학교 대동제
          </span>
        </div>
      </Block>
      <p className="text-xs text-neutral-500 text-center mt-5">
        <br /> <b>프론트엔드 엔지니어</b> | 단국대학교 이호연
        <br /> <b>백엔드 엔지니어</b> | 단국대학교 차현민
        <br /> <b>주최</b> | 단국대학교 총학생회 두드림
      </p>
      <Block align="vertical" className="py-5 min-h-[140px]">
        <Image
          className="object-cover"
          src={FeastaLogo}
          alt="피스타 로고"
          width={140}
          height={30}
        />
        <span className="text-sm text-neutral-500">
          대학 축제 통합 솔루션 <em>Feasta</em>
        </span>
      </Block>
      <Block className="py-4 flex gap-2 my-2">
        <Image
          src={UMateLogo}
          alt="유메이트"
          width={512}
          height={512}
          className="object-cover w-14"
        />
        <span className="text-neutral-500 text-sm">U-Mate</span>
      </Block>
      <Block
        href="https://github.com/ho991217/danfesta2024"
        className="py-2 my-2"
      >
        <div className="flex items-center gap-2">
          <GithubLogo />
          <span className="text-neutral-500">소스코드</span>
        </div>
      </Block>
    </footer>
  );
}

function Block({
  children,
  className,
  href,
  align = 'horizontal',
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  align?: 'horizontal' | 'vertical';
}) {
  return (
    <Link
      href={href ?? '#'}
      className={cn('flex items-center relative rounded-2xl w-full')}
    >
      <Button
        variant="transparent"
        animateOnClick
        className={cn(
          'w-full gap-2',
          align === 'vertical' && 'flex-col',
          className,
        )}
      >
        {children}
      </Button>
    </Link>
  );
}
