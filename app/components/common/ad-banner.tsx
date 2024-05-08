import Image from 'next/image';

export default function AdBanner() {
  return (
    <div className="flex gap-4 w-full overflow-hidden lg:max-w-full lg:w-full lg:gap-8">
      <Image
        className="object-cover w-full h-full rounded-xl"
        src={'https://via.placeholder.com/728x140.png'}
        alt={'Ad Banner'}
        width={728}
        height={140}
      />
      <Image
        className="object-cover w-full h-full rounded-xl"
        src={'https://via.placeholder.com/728x140.png'}
        alt={'Ad Banner'}
        width={728}
        height={140}
      />
    </div>
  );
}
