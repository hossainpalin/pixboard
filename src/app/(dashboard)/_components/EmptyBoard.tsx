import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EmptyBoard() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src="/assets/icons/empty-board.png"
        alt="Empty-board"
        width={160}
        height={160}
      />
      <h2 className="mt-6 text-2xl font-semibold text-limed-spruce-900">
        Create your first board!
      </h2>
      <p className="mt-2 text-sm text-limed-spruce-600">
        Start collaborating with your team by creating a board
      </p>

      <div className="mt-6">
        <Button size={"lg"} className="bg-limed-spruce-950">
          Create Board
        </Button>
      </div>
    </div>
  );
}
