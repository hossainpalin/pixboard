"use client";

import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

export default function ToolButton({
  label,
  icon: Icon,
  onClick,
  isActive,
  isDisabled,
}: ToolButtonProps) {
  return (
    <Hint label={label} side="right" sideOffset={14}>
      <Button
        className="text-limed-spruce-900"
        onClick={onClick}
        disabled={isDisabled}
        size="icon"
        variant={isActive ? "boardActive" : "board"}>
        <Icon />
      </Button>
    </Hint>
  );
}
