"use client";

import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from "react";
import Toast from "./toast";
import { ToastMessage, ToastType } from "@/types/common";

const TOAST_TIMEOUT = 3000;

interface ToastContextType {
  fireToast: (type: ToastType, duration?: number, message?: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastContainer provider");
  }
  return context;
};

interface ToastContainerProps {
  children: ReactNode;
}

export const ToastContainer: FunctionComponent<ToastContainerProps> = ({
  children,
}) => {
  const [toastMessages, setToastMessages] = useState<ToastMessage[]>([]);

  const fireToast = (
    type: ToastType,
    duration = TOAST_TIMEOUT,
    message = "",
  ) => {
    const id = Date.now();
    setToastMessages((prev) => [...prev, { id, type, duration, message }]);
    setTimeout(() => {
      setToastMessages((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ fireToast }}>
      {children}
      <div className="fixed bottom-8 left-1/2 z-toast flex -translate-x-1/2 transform flex-col items-center gap-2 px-4 max-md:w-full">
        {toastMessages.map(({ id, type, message }) => (
          <div key={id} className="w-fit animate-slide-up">
            <Toast key={id} type={type} message={message} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
