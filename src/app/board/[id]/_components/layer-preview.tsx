"use client";

import { colorToCss } from "@/lib/utils";
import { useStorage } from "~/liveblocks.config";
import { LayerType } from "~/types/canvas";
import Ellipse from "./ellipse";
import Note from "./note";
import Path from "./path";
import Rectangle from "./rectangle";
import Text from "./text";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

export const LayerPreview = ({
  id,
  onLayerPointerDown,
  selectionColor,
}: LayerPreviewProps) => {
  const layer = useStorage((root) => root.layers.get(id));

  if (!layer) return null;

  switch (layer.type) {
    case LayerType.Rectangle:
      return (
        <Rectangle
          id={id}
          layer={layer}
          onLayerPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      );

    case LayerType.Ellipse:
      return (
        <Ellipse
          id={id}
          layer={layer}
          onLayerPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      );

    case LayerType.Text:
      return (
        <Text
          id={id}
          layer={layer}
          onLayerPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      );

    case LayerType.Note:
      return (
        <Note
          id={id}
          layer={layer}
          onLayerPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      );

    case LayerType.Path:
      return (
        <Path
          key={id}
          points={layer.points}
          onLayerPointerDown={(e) => onLayerPointerDown(e, id)}
          stroke={selectionColor}
          fill={layer.fill ? colorToCss(layer.fill) : "#000"}
          x={layer.x}
          y={layer.y}
        />
      );

    default:
      console.warn("Unknown layer type");
      return null;
  }
};

LayerPreview.displayName = "LayerPreview";
