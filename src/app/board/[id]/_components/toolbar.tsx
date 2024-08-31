import { Skeleton } from "@/components/ui/skeleton";
import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";
import ToolButton from "./tool-button";

export default function Toolbar() {
  return (
    <div className="absolute left-2 top-[50%] flex -translate-y-[50%] flex-col gap-y-4">
      <div className="flex flex-col items-center gap-y-1 rounded-md bg-white p-1.5 shadow-md">
        <ToolButton
          label="Select"
          icon={MousePointer2}
          onClick={() => {}}
          isActive={false}
        />

        <ToolButton
          label="Type"
          icon={Type}
          onClick={() => {}}
          isActive={false}
        />

        <ToolButton
          label="Sticky Note"
          icon={StickyNote}
          onClick={() => {}}
          isActive={false}
        />

        <ToolButton
          label="Rectangle"
          icon={Square}
          onClick={() => {}}
          isActive={false}
        />

        <ToolButton
          label="Ellipse"
          icon={Circle}
          onClick={() => {}}
          isActive={false}
        />

        <ToolButton
          label="Pen"
          icon={Pencil}
          onClick={() => {}}
          isActive={false}
        />
      </div>
      <div className="flex flex-col items-center rounded-md bg-white p-1.5 shadow-md">
        <ToolButton
          label="Undo"
          icon={Undo2}
          onClick={() => {}}
          isActive={false}
          isDisabled={true}
        />

        <ToolButton
          label="Redo"
          icon={Redo2}
          onClick={() => {}}
          isActive={false}
          isDisabled={true}
        />
      </div>
    </div>
  );
}

export function ToolbarSkeleton() {
  return (
    <div className="absolute left-2 top-[50%] flex h-[360px] w-[52px] -translate-y-[50%] flex-col gap-y-4 bg-white shadow-md">
      <Skeleton className="size-full" />
    </div>
  );
}
