import { IoIosMenu } from 'react-icons/io';

// type NaviationItems = {
//   path: string;
//   title: string;
//   description: string;
// };

export default function Navigation({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <nav className='flex w-full justify-between items-center pt-5 pb-8 h-[110px]'>
      <div className='flex flex-col justify-start'>
        <h1 className='font-bold text-lg'>{title}</h1>
        <span className='text-neutral-500 dark:text-neutral-400 text-sm font-normal'>
          {description}
        </span>
      </div>
      <div>
        <IoIosMenu size={40} />
      </div>
    </nav>
  );
}
