import Image from "next/image";

export default function EmptyFavorites() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src="/assets/icons/empty-favorites.png"
        alt="Empty-favorites"
        width={160}
        height={160}
      />
      <h2 className="mt-6 text-2xl font-semibold text-limed-spruce-900">
        No favorites board found
      </h2>
      <p className="mt-2 text-sm text-limed-spruce-600">
        Try adding some boards to favorites
      </p>
    </div>
  );
}
