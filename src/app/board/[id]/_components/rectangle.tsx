import { colorToCss } from "@/lib/utils";
import { RectangleLayer } from "~/types/canvas";

interface RectangleProps {
  id: string;
  layer: RectangleLayer;
  onLayerPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export default function Rectangle({
  id,
  layer,
  onLayerPointerDown,
  selectionColor,
}: RectangleProps) {
  const { x, y, width, height, fill } = layer;
  return (
    <rect
      className="drop-shadow-md"
      onPointerDown={(e) => onLayerPointerDown(e, id)}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      x={0}
      y={0}
      width={width}
      height={height}
      fill={fill ? colorToCss(fill) : "#000"}
      stroke={selectionColor || "transparent"}
      strokeWidth={1}
    />
  );
}
