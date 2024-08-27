import Image from "next/image";

export default function EmptySearch() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src="/assets/icons/empty-search.png"
        alt="Empty-search"
        width={160}
        height={160}
      />
      <h2 className="mt-6 text-2xl font-semibold text-limed-spruce-900">
        No boards found
      </h2>
      <p className="mt-2 text-sm text-limed-spruce-600">
        Try searching with different keywords
      </p>
    </div>
  );
}
