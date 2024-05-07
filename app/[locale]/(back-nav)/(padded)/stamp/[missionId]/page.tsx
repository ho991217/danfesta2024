import { DoneOverlay } from '@components/stamp';
import { type Params } from '@lib/types';
import { getStampMission } from '@page/(dark-scheme)/stamp/action';

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
        <span className="text-neutral-500 mt-2">{missionInfo.location}</span>
      </header>
      <main className="py-4">
        <p className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-5">
          {missionInfo.description}
        </p>
      </main>
      <DoneOverlay isDone={missionInfo.done} />
    </>
  );
}
