import { Loader } from "lucide-react";
import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";

export default function CanvasLoading() {
  return (
    <main className="relative flex size-full touch-none items-center justify-center bg-neutral-100">
      <Loader className="text-muted-foreground size-6 animate-spin" />
      <Info.Skeleton />
      <Participants.Skeleton />
      <Toolbar.Skeleton />
    </main>
  );
}
