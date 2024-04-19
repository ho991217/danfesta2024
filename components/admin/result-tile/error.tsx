export default function Error({ error }: { error: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center text-xl">
      {error}
    </div>
  );
}
