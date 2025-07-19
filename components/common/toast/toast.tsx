"use client";

import { FunctionComponent } from "react";
import { twclsx } from "@/utils/twclsx";
import { Check, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { ToastType } from "@/types/common";

interface ToastProps {
  type: ToastType;
  message?: string;
  className?: string;
}

const Toast: FunctionComponent<ToastProps> = ({
  type,
  message = "",
  className,
}) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <Check className="text-green-500" width={20} height={20} />;
      case "error":
        return <AlertCircle className="text-red-500" width={20} height={20} />;
      case "warning":
        return (
          <AlertTriangle className="text-yellow-500" width={20} height={20} />
        );
      case "info":
        return <Info className="text-blue-500" width={20} height={20} />;
      default:
        return <Check className="text-green-500" width={20} height={20} />;
    }
  };

  return (
    <div
      className={twclsx(
        "rounded-full bg-neutral-base px-6 py-3 text-pure-white",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-body-small md:text-body-base">{message}</span>
        {getIcon()}
      </div>
    </div>
  );
};

export default Toast;
