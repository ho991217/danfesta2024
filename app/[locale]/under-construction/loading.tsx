import { Card } from '@components/ui/card';
import { Skeleton } from '@components/ui/skeleton';
import { FaExclamation } from 'react-icons/fa6';

export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <section className="w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold flex gap-2 items-center">
          <Skeleton className="w-[250px] h-[2rem]" />
        </h1>
        <p className="text-sm mt-2 max-w-[400px] text-neutral-500 text-center">
          <Skeleton className="w-[20rem] h-[1rem]" />
        </p>
      </section>
      <Card className="mt-6 p-4 w-full flex items-center gap-4 justify-start text-neutral-500 text-sm">
        <FaExclamation />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[15rem] h-[1rem]" />
          <Skeleton className="w-[10rem] h-[1rem]" />
        </div>
      </Card>
      <div className="fixed bottom-5 w-full px-5">
        <Skeleton className="w-full h-[40px]" />
      </div>
    </main>
  );
}
