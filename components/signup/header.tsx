type PropsWithChildren = { children?: React.ReactNode };

export default function Header({ children }: PropsWithChildren) {
  return <header className='flex flex-col gap-2 mb-10 mt-6'>{children}</header>;
}

Header.Title = function Title({ children }: PropsWithChildren) {
  return <h1 className='text-[27px] font-bold'>{children}</h1>;
};

Header.Subtitle = function Subtitle({ children }: PropsWithChildren) {
  return <p className='text-base'>{children}</p>;
};
