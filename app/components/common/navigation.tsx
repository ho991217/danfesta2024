'use client';

import { usePathname } from 'next/navigation';

const Hamburger = () => (
  <svg
    width='35'
    height='35'
    viewBox='0 0 35 35'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M30.625 10.2083H4.37496C3.49996 10.2083 2.91663 9.62501 2.91663 8.75001C2.91663 7.87501 3.49996 7.29167 4.37496 7.29167H30.625C31.5 7.29167 32.0833 7.87501 32.0833 8.75001C32.0833 9.62501 31.5 10.2083 30.625 10.2083Z'
      style={{
        fill: 'rgb(var(--foreground-rgb))',
      }}
    />
    <path
      d='M30.625 18.9583H4.37496C3.49996 18.9583 2.91663 18.375 2.91663 17.5C2.91663 16.625 3.49996 16.0417 4.37496 16.0417H30.625C31.5 16.0417 32.0833 16.625 32.0833 17.5C32.0833 18.375 31.5 18.9583 30.625 18.9583Z'
      style={{
        fill: 'rgb(var(--foreground-rgb))',
      }}
    />
    <path
      d='M30.625 27.7083H4.37496C3.49996 27.7083 2.91663 27.125 2.91663 26.25C2.91663 25.375 3.49996 24.7917 4.37496 24.7917H30.625C31.5 24.7917 32.0833 25.375 32.0833 26.25C32.0833 27.125 31.5 27.7083 30.625 27.7083Z'
      style={{
        fill: 'rgb(var(--foreground-rgb))',
      }}
    />
  </svg>
);

type NaviationItems = {
  path: string;
  title: string;
  description: string;
};

const items: NaviationItems[] = [
  {
    path: '/',
    title: 'danfesta'.toUpperCase(),
    description: '단국대학교 2024 대동제',
  },
  {
    path: '/login',
    title: '로그인',
    description: '서비스를 이용하려면 로그인해주세요.',
  },
];

export default function Navigation() {
  const pathname = usePathname();

  const { title, description } = items.find(
    (item) => item.path === pathname
  ) || {
    title: '404',
    description: 'Not found',
  };

  return (
    <nav className='flex w-full justify-between pt-5 pb-8 h-[110px]'>
      <div className='flex flex-col justify-start'>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <span className='text-neutral-500 dark:text-neutral-300 text-sm'>
          {description}
        </span>
      </div>
      <div>
        <Hamburger />
      </div>
    </nav>
  );
}
