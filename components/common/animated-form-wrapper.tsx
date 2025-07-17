"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedFormWrapperProps {
  children: ReactNode;
  isVisible: boolean;
  className?: string;
}

export const AnimatedFormWrapper: React.FC<AnimatedFormWrapperProps> = ({
  children,
  isVisible,
  className = "",
}) => {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={isVisible ? "visible" : "hidden"}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
