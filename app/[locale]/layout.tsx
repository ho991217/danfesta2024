export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='max-w-[600px] min-w-[320px] m-auto h-[100dvh] overflow-x-hidden lg:hidden scrollbar-hide'>
        {children}
      </div>
      {/* <div className='max-w-[600px] min-w-[320px] m-auto px-5 pt-5 h-[100dvh] overflow-x-hidden lg:hidden scrollbar-hide'>
            {children}
          </div> */}
      <div className='hidden lg:block lg:fixed lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2'>
        모바일 환경에서 접속해주세요.
      </div>
    </>
  );
}
