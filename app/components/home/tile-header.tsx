import Link from 'next/link';

export default function TileHeader({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div>
      <div className='w-full flex justify-between items-end mb-4'>
        {children}
      </div>
    </div>
  );
}

function Head({ children }: { children: React.ReactNode }) {
  return <h3 className='text-2xl font-bold'>{children}</h3>;
}

TileHeader.Head = Head;

function SeeAll({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href} className='text-base font-normal text-primary'>
      {children}
    </Link>
  );
}

TileHeader.SeeAll = SeeAll;
