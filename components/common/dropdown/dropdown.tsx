"use client";

import { useNavigationEvent } from "@/utils/use-navigation-event";
import useClickOutsideEvent from "@/utils/use-outside-click-event";
import useVisibility from "@/utils/use-visibility";
import { twclsx } from "@/utils/twclsx";
import { ChevronDown } from "lucide-react";
import { FunctionComponent, ReactNode, useRef } from "react";
import DropDownChildren from "./dropdown-children";

interface DropdownProps {
  label: string | ReactNode;
  children: ReactNode;
  showDropdownIcon?: boolean;
  className?: string;
  align?: "left" | "right" | "center";
  isRelative?: boolean;
}
const Dropdown: FunctionComponent<DropdownProps> = ({
  label,
  children,
  showDropdownIcon = true,
  className,
  align = "right",
  isRelative = true,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    isVisible,
    toggle: toggleDropdown,
    hide: hideDropdown,
  } = useVisibility();

  useNavigationEvent(() => hideDropdown());
  useClickOutsideEvent(dropdownRef, () => hideDropdown());

  return (
    <div
      className={twclsx(`dropdown dropdown-toggle h-9 select-none`, {
        relative: isRelative,
      })}
      ref={dropdownRef}
      tabIndex={0}
      onKeyDown={(e) => {
        e.key === "Enter" &&
          dropdownRef.current == document.activeElement &&
          toggleDropdown();
      }}
    >
      <span
        className={twclsx(
          "dropdown-toggle relative flex max-w-[90vw] cursor-pointer items-center justify-center gap-1 rounded-full hover:bg-neutral-sub-text/20",
          className,
        )}
        onClick={toggleDropdown}
      >
        {label ? label : null}
        {showDropdownIcon && (
          <ChevronDown
            className={twclsx(
              "dropdown-toggle absolute right-2 h-5 w-5 transform text-neutral-light transition-all duration-300 ease-in-out sm:relative sm:right-0",
              { "rotate-180": isVisible },
            )}
          />
        )}
      </span>

      <div
        className={twclsx(
          "absolute top-full z-50 transform overflow-hidden rounded-2xl border border-neutral-base bg-neutral-black/85 p-1.5 shadow-lg transition-all duration-300 ease-in-out max-sm:w-full",
          {
            "right-1/2 w-full translate-x-1/2": align === "center",
            "left-0": align === "left",
            "right-0": align === "right",
          },
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0",
        )}
      >
        <DropDownChildren hideDropdown={hideDropdown}>
          {children}
        </DropDownChildren>
      </div>
    </div>
  );
};

export default Dropdown;
