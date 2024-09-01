"use client";

import { getUserColor } from "@/lib/utils";
import { MousePointer2 } from "lucide-react";
import { memo } from "react";
import { useOther } from "~/liveblocks.config";

interface CursorProps {
  connectionId: number;
}

export const Cursor = memo(({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user.info);
  const cursor = useOther(connectionId, (user) => user.presence.cursor);
  const name = info?.name || "Anonymous";

  if (!cursor) return null;

  const { x, y } = cursor;

  return (
    <foreignObject
      height={50}
      width={name.length * 10 + 24}
      className="relative drop-shadow-md"
      style={{ transform: `translate(${x}px, ${y}px)` }}>
      <MousePointer2
        className="z-50 size-5"
        style={{
          fill: getUserColor(connectionId.toString()),
          color: getUserColor(connectionId.toString()),
        }}
      />
      <div
        style={{ backgroundColor: getUserColor(connectionId.toString()) }}
        className="absolute left-5 rounded-md px-1.5 pb-0.5 text-sm font-semibold text-white">
        {name}
      </div>
    </foreignObject>
  );
});

Cursor.displayName = "Cursor";
