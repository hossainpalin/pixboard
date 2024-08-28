"use client";

import { useApiMutation } from "@/hooks/useApiMutation";
import { useRenameModal } from "@/store/use-rename-modal";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { api } from "../../../convex/_generated/api";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";

export default function RenameModal() {
  const { mutate, pending } = useApiMutation(api.board.updateBoard);
  const { isOpen, onClose, onOpen, initialValues } = useRenameModal();
  const [title, setTitle] = useState(initialValues.title);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate({ id: initialValues.id, title })
      .then(() => {
        toast.success("Board title updated successfully");
        onClose();
      })
      .catch(() => {
        toast.error("Failed to update board title");
        onClose();
      });
  };

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Board Title</DialogTitle>
        </DialogHeader>

        <DialogDescription>Enter a new title for the board.</DialogDescription>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            disabled={pending}
            required
            maxLength={60}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Board title"
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={pending}>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
