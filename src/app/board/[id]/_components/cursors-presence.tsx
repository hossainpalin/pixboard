"use client";

import { colorToCss } from "@/lib/utils";
import { shallow } from "@liveblocks/client";
import { memo } from "react";
import { useOthersConnectionIds, useOthersMapped } from "~/liveblocks.config";
import { Cursor } from "./cursor";
import Path from "./path";

const Cursors = () => {
  const ids = useOthersConnectionIds();
  return (
    <>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
};

const Draft = () => {
  const others = useOthersMapped(
    (other) => ({
      pencilDraft: other.presence.pencilDraft,
      pencilColor: other.presence.pencilColor,
    }),
    shallow,
  );

  return (
    <>
      {others.map(([key, other]) => {
        if (other.pencilDraft) {
          return (
            <Path
              key={key}
              x={0}
              y={0}
              points={other.pencilDraft}
              fill={other.pencilColor ? colorToCss(other.pencilColor) : "#000"}
            />
          );
        }

        return null;
      })}
    </>
  );
};

export const CursorsPresence = memo(() => {
  return (
    <>
      <Draft />
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = "CursorsPresence";
