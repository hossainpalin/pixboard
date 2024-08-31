"use client";

import { useApiMutation } from "@/hooks/useApiMutation";
import { useRenameModal } from "@/store/use-rename-modal";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { api } from "../../convex/_generated/api";
import ConfirmModal from "./ConfirmModal";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export default function Actions({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionsProps) {
  const { onOpen } = useRenameModal();
  const { mutate, pending } = useApiMutation(api.board.removeBoard);

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link copied to clipboard"))
      .catch(() => toast.error("Failed to copy link"));
  };

  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success("Board deleted successfully"))
      .catch(() => toast.error("Failed to delete board"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60">
        <DropdownMenuItem onClick={onCopyLink} className="cursor-pointer p-3">
          <Link2 className="mr-2 size-4" />
          <span>Copy Link</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => onOpen(id, title)}
          className="cursor-pointer p-3">
          <Pencil className="mr-2 size-4" />
          <span>Rename</span>
        </DropdownMenuItem>

        <ConfirmModal
          header="Delete Board?"
          description="This will delete the board and all of its content"
          disabled={pending}
          onConfirm={onDelete}>
          <Button
            variant="ghost"
            className="w-full cursor-pointer justify-start p-3 text-sm font-normal">
            <Trash2 className="mr-2 size-4" />
            <span>Delete</span>
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
