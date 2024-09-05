"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useApiMutation } from "@/hooks/useApiMutation";
import { useOrganization } from "@clerk/nextjs";
import { toast } from "sonner";
import { api } from "~/convex/_generated/api";
import { useRouter } from "next/navigation";

export default function EmptyBoard() {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.createBoard);

  const router = useRouter();

  const handleCreateBoard = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
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
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src="/assets/icons/empty-board.png"
        alt="Empty-board"
        width={160}
        height={160}
      />
      <h2 className="mt-6 text-2xl font-semibold text-limed-spruce-900">
        Create your first board!
      </h2>
      <p className="mt-2 text-sm text-limed-spruce-600">
        Start collaborating with your team by creating a board
      </p>

      <div className="mt-6">
        <Button
          disabled={pending}
          onClick={handleCreateBoard}
          size={"lg"}
          className="bg-limed-spruce-950">
          Create Board
        </Button>
      </div>
    </div>
  );
}
