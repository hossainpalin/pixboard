"use client";

import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { useDeleteLayer } from "@/hooks/use-delete-layer";
import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { BringToFrontIcon, SendToBack, Trash2 } from "lucide-react";
import { memo } from "react";
import { useMutation, useSelf } from "~/liveblocks.config";
import { Camera, Color } from "~/types/canvas";
import ColorPicker from "./color-picker";

interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

function SelectionTools({ camera, setLastUsedColor }: SelectionToolsProps) {
  const selection = useSelf((self) => self.presence.selection);
  const selectionBounds = useSelectionBounds();

  // Move selected layers to the back
  const moveToBack = useMutation(
    ({ storage }) => {
      const liveLayerIds = storage.get("layerIds");
      const indices: number[] = [];

      const arr = liveLayerIds.toImmutable();

      for (let i = 0; i < arr.length; i++) {
        if (selection.includes(arr[i])) {
          indices.push(i);
        }
      }

      for (let i = 0; i < indices.length; i++) {
        liveLayerIds.move(indices[i], i);
      }
    },
    [selection],
  );

  // Move selected layers to the front
  const moveToFront = useMutation(
    ({ storage }) => {
      const liveLayerIds = storage.get("layerIds");
      const indices: number[] = [];

      const arr = liveLayerIds.toImmutable();

      for (let i = 0; i < arr.length; i++) {
        if (selection.includes(arr[i])) {
          indices.push(i);
        }
      }

      for (let i = indices.length - 1; i >= 0; i--) {
        liveLayerIds.move(
          indices[i],
          arr.length - 1 - (indices.length - 1 - i),
        );
      }
    },
    [selection],
  );

  // Set fill color of selected layers
  const setFillColor = useMutation(
    ({ storage }, fill: Color) => {
      const liveLayers = storage.get("layers");
      setLastUsedColor(fill);

      selection.forEach((id) => {
        const layer = liveLayers.get(id);

        if (layer) {
          layer.set("fill", fill);
        }
      });
    },
    [selection, setLastUsedColor],
  );

  const deleteLayer = useDeleteLayer();

  if (!selectionBounds) {
    return null;
  }

  const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
  const y = selectionBounds.y + camera.y;

  return (
    <div
      className="absolute flex select-none rounded-xl bg-white p-3 shadow-sm"
      style={{
        transform: `translate(calc(${x}px - 50%), calc(${y - 16}px - 100%))`,
      }}>
      <ColorPicker onChange={setFillColor} />
      <div className="mr-2 flex flex-col gap-y-0.5">
        <Hint label="Bring To Front">
          <Button onClick={moveToFront} variant="board" size="icon">
            <BringToFrontIcon />
          </Button>
        </Hint>

        <Hint label="Send To Back" side="bottom">
          <Button onClick={moveToBack} variant="board" size="icon">
            <SendToBack />
          </Button>
        </Hint>
      </div>
      <div className="flex items-center border-l border-neutral-200 pl-2">
        <Hint label="Delete">
          <Button variant="board" size="icon" onClick={deleteLayer}>
            <Trash2 />
          </Button>
        </Hint>
      </div>
    </div>
  );
}

export default memo(SelectionTools);
