"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import Overlay from "./Overlay";

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}

export default function BoardCard({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });
  return (
    <Link href={`/board/${id}`}>
      <div className="group flex aspect-[100/127] flex-col justify-between overflow-hidden rounded-lg border">
        <div className="relative flex-1 bg-[#E2E2E2]">
          <Image src={imageUrl} alt="Doodle" fill />
          <Overlay />
        </div>
        <Footer
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          isFavorite={isFavorite}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
}

export function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] overflow-hidden rounded-lg">
      <Skeleton className="size-full" />
    </div>
  );
};
