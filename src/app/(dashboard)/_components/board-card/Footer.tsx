import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

export default function Footer({
  title,
  authorLabel,
  createdAtLabel,
  isFavorite,
  onClick,
  disabled,
}: FooterProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onClick();
  };

  return (
    <div className="relative bg-white p-3">
      <p className="max-w-[calc(100%-20px)] truncate text-[15px] font-semibold text-limed-spruce-900">
        {title}
      </p>
      <p className="truncate text-[13px] text-limed-spruce-600 opacity-0 transition-opacity group-hover:opacity-100">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "absolute right-3 top-6 text-limed-spruce-700 opacity-0 transition-opacity hover:text-blue-600 group-hover:opacity-100",
          disabled && "cursor-not-allowed opacity-75",
        )}>
        <Star
          className={cn("size-5", isFavorite && "fill-blue-600 text-blue-600")}
        />
      </button>
    </div>
  );
}
