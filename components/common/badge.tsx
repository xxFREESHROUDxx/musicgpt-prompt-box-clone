import { twclsx } from "@/utils/twclsx";
import { FunctionComponent, ReactNode, useState } from "react";

interface BadgeProps {
  label: string;
  icon?: ReactNode;
  className?: string;
}

const Badge: FunctionComponent<BadgeProps> = ({ label, icon, className }) => {
  return (
    <span
      className={twclsx(
        "text-orange-dark bg-orange-light mx-1.5 rounded-3xl px-[3px] text-xs font-medium leading-4 tracking-tight",
        {
          "gap-1": icon,
        },
        className,
      )}
    >
      {icon}
      {label}
    </span>
  );
};

export default Badge;
