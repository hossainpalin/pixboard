"use client";

import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";

interface CanvasProps {
  boardId: string;
}

export default function Canvas({ boardId }: CanvasProps) {
  return (
    <main className="relative size-full touch-none bg-neutral-100">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
}
