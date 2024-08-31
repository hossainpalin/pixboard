"use client";

import { useSelf } from "~/liveblocks.config";
import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";

interface CanvasProps {
  boardId: string;
}

export default function Canvas({ boardId }: CanvasProps) {
  const { name, picture } = useSelf((me) => me.info);

  return (
    <main className="relative size-full touch-none bg-neutral-100">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar />
    </main>
  );
}
