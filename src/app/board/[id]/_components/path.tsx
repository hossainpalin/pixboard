import { getSvgPathFromStroke } from "@/lib/utils";
import getStroke from "perfect-freehand";

interface PathProps {
  x: number;
  y: number;
  points: number[][];
  fill: string;
  onLayerPointerDown?: (event: React.PointerEvent) => void;
  stroke?: string;
}

export default function Path({
  x,
  y,
  points,
  fill,
  onLayerPointerDown,
  stroke,
}: PathProps) {
  return (
    <path
      className="drop-shadow-md"
      onPointerDown={onLayerPointerDown}
      d={getSvgPathFromStroke(
        getStroke(points, {
          size: 16,
          thinning: 0.5,
          smoothing: 0.5,
          streamline: 0.5,
        }),
      )}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      fill={fill}
      stroke={stroke}
      x={0}
      y={0}
      strokeWidth={1}
    />
  );
}
