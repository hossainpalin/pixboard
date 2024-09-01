"use client";

import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react/suspense";
import { ReactNode } from "react";
import { RoomProvider } from "~/liveblocks.config";
import { Layer } from "~/types/canvas";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

export default function Room({ children, roomId, fallback }: RoomProps) {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        cursor: null,
        selection: [],
      }}
      initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList<string>([]),
      }}>
      <ClientSideSuspense fallback={fallback}>{children}</ClientSideSuspense>
    </RoomProvider>
  );
}
