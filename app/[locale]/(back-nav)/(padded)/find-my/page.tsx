import { Link } from '@components/common';
import { Card } from '@components/ui/card';

export default function FindMyPage() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="p-4 flex flex-col">
        <span className="text-sm text-neutral-500">아이디 찾기</span>
        <p className="mt-2 mb-4">
          단페스타 2024의 아이디는 단국대학교 학번으로 이루어져 있어요. 학번으로
          가입되어 있지 않은지 확인해보세요.
        </p>
        <Link
          href={{
            pathname: '/sms',
            query: {
              type: 'find-my-id',
            },
          }}
          variant="filled"
        >
          아이디(학번) 찾기
        </Link>
      </Card>
      <Card className="p-4 flex flex-col">
        <span className="text-sm text-neutral-500">비밀번호 재설정</span>
        <p className="mt-2 mb-4">비밀번호를 분실하셨다면 재설정이 필요해요.</p>
        <Link
          href={{
            pathname: '/sms',
            query: {
              type: 'find-my-password',
            },
          }}
          variant="filled"
        >
          비밀번호 재설정
        </Link>
      </Card>
      <Link href="/verify" variant="transparent">
        회원가입
      </Link>
    </div>
  );
}
