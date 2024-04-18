import { Button, Link } from '@/components/common';
import { ROUTES } from '@/lib/constants';

export default function FindMyPasswordCompletePage() {
  return (
    <>
      <header className="flex flex-col gap-2 mt-8">
        <h1 className="text-[27px] font-bold">비밀번호가 변경되었습니다.</h1>
        <span className="text-base flex text-neutral-500">
          변경하신 비밀번호로 로그인 해 주세요.
        </span>
      </header>
      <Button variant="bottom">
        <Link
          href={ROUTES.login}
          className="w-full h-full flex items-center justify-center"
        >
          로그인하러 가기
        </Link>
      </Button>
    </>
  );
}
