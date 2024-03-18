export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <section className='w-full'>{children}</section>
    </div>
  );
}
