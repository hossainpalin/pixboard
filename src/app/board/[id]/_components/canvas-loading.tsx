import { Loader } from "lucide-react";

export default function CanvasLoading() {
  return (
    <main className="relative flex size-full touch-none items-center justify-center bg-neutral-100">
      <Loader className="text-muted-foreground size-6 animate-spin" />
    </main>
  );
}
