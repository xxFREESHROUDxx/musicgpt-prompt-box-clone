"use client";

import { twclsx } from "@/utils/twclsx";
import { LANGUAGE_OPTIONS } from "@/constants";
import Dropdown from "./dropdown";
import { FC } from "react";

interface LanguageDropdownProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageDropdown: FC<LanguageDropdownProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  const selectedOption =
    LANGUAGE_OPTIONS?.find((option) => option?.value === selectedLanguage) ||
    LANGUAGE_OPTIONS[0];

  const handleLanguageSelect = (value: string) => {
    onLanguageChange(value);
  };

  return (
    <Dropdown
      label={
        <div className="flex items-center gap-2">
          <span className="text-sm">{selectedOption?.flag}</span>
          <span className="text-sm font-medium text-pure-white">
            {selectedOption?.label}
          </span>
        </div>
      }
      className="duration:100 group relative flex w-40 shrink-0 grow-0 select-none items-center justify-center gap-1 rounded-full border border-neutral-600 py-2 text-sm text-white transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-neutral-600"
      align="center"
    >
      {LANGUAGE_OPTIONS?.map((option) => (
        <div
          key={option?.value}
          className={twclsx(
            "dropdown-item mb-1 flex cursor-pointer items-center gap-3 rounded-lg px-4 py-2 transition-all duration-150 hover:bg-neutral-hover",
            selectedLanguage === option?.value && "bg-neutral-hover",
          )}
          onClick={() => handleLanguageSelect(option?.value)}
        >
          <span className="text-base">{option?.flag}</span>
          <span className="text-sm font-medium text-pure-white">
            {option?.label}
          </span>
        </div>
      ))}
    </Dropdown>
  );
};
