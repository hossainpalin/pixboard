import { Skeleton } from "@/components/ui/skeleton";

export default function Toolbar() {
  return (
    <div className="absolute left-2 top-[50%] flex -translate-y-[50%] flex-col gap-y-4">
      <div className="flex flex-col items-center gap-y-1 rounded-md bg-white p-1.5 shadow-md">
        <div>TET</div>
      </div>
      <div className="flex flex-col items-center rounded-md bg-white p-1.5 shadow-md">
        <div>UNDO</div>
        <div>REDO</div>
      </div>
    </div>
  );
}

Toolbar.Skeleton = function ToolbarSkeleton() {
  return (
    <div className="absolute left-2 top-[50%] flex h-[360px] w-[52px] -translate-y-[50%] flex-col gap-y-4 bg-white shadow-md">
      <Skeleton className="size-full" />
    </div>
  );
};
