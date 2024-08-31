"use client";

import Actions from "@/components/Actions";
import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-modal";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/convex/_generated/api";
import { Id } from "~/convex/_generated/dataModel";

interface InfoProps {
  boardId: string;
}

function TabSeparator() {
  return <div className="px-1.5 text-neutral-300">|</div>;
}

export default function Info({ boardId }: InfoProps) {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute left-2 top-2 flex h-12 items-center rounded-md bg-white px-1.5 shadow-md">
      <Hint label="Go To Boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2">
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="Board logo"
              width={40}
              height={40}
            />
            <span
              className={cn(
                "ml-2 font-poppins text-xl font-semibold text-limed-spruce-900",
              )}>
              PixBoard
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label="Edit Title" side="bottom" sideOffset={10}>
        <Button
          onClick={() => onOpen(data._id, data.title)}
          variant="board"
          className="px-2 text-base font-normal text-limed-spruce-900">
          {data.title}
        </Button>
      </Hint>
      <TabSeparator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Edit Title" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board" className="text-limed-spruce-900">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
}

export function InfoSkeleton() {
  return (
    <div className="absolute left-2 top-2 flex h-12 w-[50px] items-center rounded-md bg-white shadow-md">
      <Skeleton className="size-full" />
    </div>
  );
}
