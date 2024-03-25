import { checkResult } from './action';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { turn } = await checkResult(Number(id));

  return <div className='flex flex-col gap-4 mb-20'>{turn}</div>;
}
