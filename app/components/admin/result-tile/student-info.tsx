import { type TicketInfo } from '@/app/[locale]/(back-nav)/admin/action';
import { If } from '@/app/components/util';

export default function StudentInfo({ info }: { info: TicketInfo | null }) {
  return (
    <div className="w-full flex flex-col p-8">
      <h2 className="text-3xl font-bold mb-6">QR 코드 정보</h2>
      <If condition={info === null}>
        <If.Then>
          <p className="text-neutral-500 w-full text-center">정보 없음</p>
        </If.Then>
        <If.Else>
          <div className="flex flex-col gap-2">
            <Data title="이름" value={info?.name} />
            <Data title="학과" value={info?.major} />
            <Data title="학번" value={info?.studentId} />
            <Data
              title="발급 여부"
              value={info?.issued ? '발급 완료' : '발급 전'}
            />
          </div>
        </If.Else>
      </If>
    </div>
  );
}

function Data({ title, value }: { title: string; value?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-neutral-400">{title}</p>
      <p className="text-lg">{value}</p>
    </div>
  );
}
