import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";

export default function CanvasLoading() {
  return (
    <main className="relative flex size-full touch-none items-center justify-center bg-neutral-100">
      <Loader className="text-muted-foreground size-6 animate-spin" />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
}
