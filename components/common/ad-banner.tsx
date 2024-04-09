import Image from "next/image";

export default function AdBanner() {
  return (
    <div className="w-full overflow-hidden rounded-xl">
      <Image
        src={"https://via.placeholder.com/728x140.png"}
        alt={"Ad Banner"}
        width={728}
        height={140}
      />
    </div>
  );
}
