import { DoneOverlay } from '@components/stamp';
import { type Params } from '@lib/types';
import { getStampMission } from '@page/(dark-scheme)/stamp/action';
import Image from 'next/image';

export default async function StampDetailPage({
  params: { missionId },
}: Params<{ missionId: string }>) {
  const missionInfo = await getStampMission(Number(missionId));
  return (
    <>
      <header className="flex flex-col gap-1">
        <span className="text-xs text-neutral-500">
          단페스타 스탬프 미션 이벤트
        </span>
        <h1 className="text-2xl font-bold">{missionInfo.title}</h1>
        <div className="text-neutral-500 mt-2">
          {missionInfo.location.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </header>
      <main className="flex flex-col py-4 gap-4 mb-20">
        <Image
          src={missionInfo.image}
          alt={missionInfo.title}
          className="rounded-xl"
        />
        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-5">
          {missionInfo.description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </main>
      <DoneOverlay isDone={missionInfo.done} />
    </>
  );
}
