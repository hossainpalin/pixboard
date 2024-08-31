import Room from "@/components/room";
import Canvas from "./_components/canvas";
import CanvasLoading from "./_components/canvas-loading";

interface BoardIdPageProps {
  params: {
    id: string;
  };
}

export default function BoardIdPage({ params }: BoardIdPageProps) {
  return (
    <Room roomId={params.id} fallback={<CanvasLoading />}>
      <Canvas boardId={params.id} />
    </Room>
  );
}
