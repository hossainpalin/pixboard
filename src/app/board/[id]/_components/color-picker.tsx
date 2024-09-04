"ue client";

import { colorToCss } from "@/lib/utils";
import { Color } from "~/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export default function ColorPicker({ onChange }: ColorPickerProps) {
  return (
    <div className="mr-2 flex max-w-[164px] flex-wrap items-center gap-2 border-r border-neutral-200 pr-2">
      <ColorButton color={{ r: 243, g: 82, b: 35 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 49, b: 177 }} onClick={onChange} />
      <ColorButton color={{ r: 68, g: 10, b: 150 }} onClick={onChange} />
      <ColorButton color={{ r: 39, g: 142, b: 237 }} onClick={onChange} />
      <ColorButton color={{ r: 252, g: 105, b: 245 }} onClick={onChange} />
      <ColorButton color={{ r: 102, g: 252, b: 42 }} onClick={onChange} />
      <ColorButton color={{ r: 0, g: 0, b: 0 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 255, b: 255 }} onClick={onChange} />
    </div>
  );
}

interface ColorButtonProps {
  color: Color;
  onClick: (color: Color) => void;
}

function ColorButton({ color, onClick }: ColorButtonProps) {
  return (
    <button
      className="flex size-8 items-center justify-center transition hover:opacity-75"
      onClick={() => onClick(color)}>
      <div
        className="size-8 rounded-md border border-neutral-300"
        style={{ background: colorToCss(color) }}
      />
    </button>
  );
}
