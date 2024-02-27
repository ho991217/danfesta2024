import clsx from 'clsx';

export default function BottomSheet({
  children,
  className,
  ...props
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}>) {
  return (
    <div
      className={clsx(
        'fixed bottom-0 left-0 w-full p-5 bg-white rounded-t-3xl shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
