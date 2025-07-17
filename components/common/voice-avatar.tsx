import React from "react";

interface VoiceAvatarProps {
  name: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
  hideName?: boolean;
}

export const VoiceAvatar: React.FC<VoiceAvatarProps> = ({
  name,
  isSelected = false,
  onClick,
  className = "",
  hideName = false,
}) => {
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div
      className={`flex cursor-pointer flex-col items-center gap-2 transition-all duration-200 ${
        isSelected ? "scale-105" : "hover:scale-105"
      } ${className}`}
      onClick={onClick}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-medium transition-all duration-200 ${
          isSelected
            ? "bg-neutral-light text-neutral-black"
            : "bg-neutral-hover text-neutral-light hover:bg-neutral-light/20"
        }`}
      >
        {firstLetter}
      </div>
      {!hideName && (
        <span className="text-center text-body-small text-neutral-sub-text">
          {name.length > 12 ? `${name.substring(0, 12)}...` : name}
        </span>
      )}
    </div>
  );
};
