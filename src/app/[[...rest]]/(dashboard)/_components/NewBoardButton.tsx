"use client";

import { useApiMutation } from "@/hooks/useApiMutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { api } from "~/convex/_generated/api";

export default function NewBoardButton({
  orgId,
  disabled,
}: {
  orgId: string;
  disabled?: boolean;
}) {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.createBoard);
  const handleCreateBoard = () => {
    mutate({
      orgId: orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created successfully");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={handleCreateBoard}
      className={cn(
        "col-span-1 flex aspect-[100/127] flex-col items-center justify-center rounded-lg bg-blue-600 py-6 hover:bg-blue-800",
        (pending || disabled) &&
          "cursor-not-allowed opacity-75 hover:bg-blue-600",
      )}>
      <Plus className="size-12 stroke-1 text-white" />
      <p className="text-[15px] font-light text-white">New Board</p>
    </button>
  );
}
