'use client';

import { Button } from '../common';
import { MdRefresh } from 'react-icons/md';
import { useRouter } from 'next/navigation';

export default function RefetchButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.refresh();
      }}
      className='h-full bg-neutral-500 text-neutral-100 flex items-center justify-center cursor-pointer rounded-lg'
      animateOnClick
    >
      <MdRefresh size={25} />
    </Button>
  );
}
