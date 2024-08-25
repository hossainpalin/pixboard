import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image
        className="animate-pulse duration-700"
        src="/assets/icons/logo.svg"
        alt="Loading"
        width={100}
        height={100}
      />
    </div>
  );
}
