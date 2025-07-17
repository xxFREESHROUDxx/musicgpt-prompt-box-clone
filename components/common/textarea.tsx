import React from "react";
import { twclsx } from "@/utils/twclsx";

interface TextareaProps {
  name?: string;
  id?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  name,
  id,
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={twclsx(
        "block min-h-[120px] w-full resize-none bg-transparent p-5 text-left text-base leading-relaxed text-pure-white outline-none scrollbar-hide placeholder:text-neutral-sub-text",
        className,
      )}
    />
  );
};
