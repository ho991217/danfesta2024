import getUserInfo from '@api/get-is-user-info';
import Image from 'next/image';

export default async function MyPage() {
  const user = await getUserInfo();
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="overflow-hidden rounded-full w-[120px] h-[120px] flex items-center justify-center">
          <Image
            src={user.profileImage}
            alt="profile"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 mt-4">
        <label className="text-neutral-400">학번</label>
        <input
          value={user.studentId}
          className="bg-neutral-800 p-4 w-full rounded-xl"
        />
      </div>
    </>
  );
}
