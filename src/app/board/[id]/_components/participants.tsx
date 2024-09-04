"use client";

import { getUserColor } from "@/lib/utils";
import { useOthers, useSelf } from "~/liveblocks.config";
import UserAvatar from "./user-avatar";

const MAX_SHOWN_USER = 1;

export default function Participants() {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUser = users.length > MAX_SHOWN_USER;

  return (
    <div className="absolute right-2 top-2 flex h-12 items-center rounded-md bg-white p-3 shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_USER).map(({ connectionId, info }) => (
          <UserAvatar
            key={connectionId}
            src={info?.picture}
            name={info?.name}
            fallback={info?.name?.[0] || "A"}
            borderColor={getUserColor(connectionId.toString())}
          />
        ))}

        {currentUser && (
          <UserAvatar
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
            borderColor={getUserColor(currentUser.connectionId.toString())}
          />
        )}

        {hasMoreUser && (
          <UserAvatar
            name={users.length - MAX_SHOWN_USER + " more"}
            fallback={`+${users.length - MAX_SHOWN_USER}`}
          />
        )}
      </div>
    </div>
  );
}
