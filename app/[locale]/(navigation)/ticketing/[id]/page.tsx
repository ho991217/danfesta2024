import { getCaptchaImage } from './action';
import Image from 'next/image';
import { Form, RefetchButton } from '@/components/ticketing';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { key, image } = await getCaptchaImage();

  return (
    <div>
      <h1 className='text-3xl font-bold'>티켓 예매</h1>
      <div className='w-full aspect-[7/2] grid grid-cols-[5fr,1fr] gap-2'>
        <div className='relative rounded-lg overflow-hidden'>
          <Image src={image} fill alt='캡챠 이미지' />
        </div>
        <RefetchButton />
      </div>
      <Form />
    </div>
  );
}
