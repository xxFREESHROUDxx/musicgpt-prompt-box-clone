import React from "react";

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
      className={`h-full w-full resize-none bg-transparent px-5 py-5 text-base text-pure-white outline-none scrollbar-hide placeholder:text-neutral-sub-text ${className}`}
    />
  );
};
