"use client";

import { motion } from "framer-motion";
import { FC } from "react";

export const GradientBackground: FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0"
        initial={{
          background:
            "linear-gradient(to bottom, #16191C 0%, #16191C 50%, #16191C 100%)",
        }}
        animate={{
          background: [
            "linear-gradient(to bottom, #16191C 0%, #16191C 50%, #16191C 100%)",
            "linear-gradient(to bottom, #4A0B4A 0%, #4A0B4A 5%, #16191C 100%)",
            "linear-gradient(to bottom, #4A0B4A 0%, #4A0B4A 5%, #16191C 100%)",
            "linear-gradient(to bottom, #16191C 0%, #16191C 50%, #16191C 100%)",
          ],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.25, 0.75, 1],
        }}
        style={{
          background:
            "linear-gradient(to bottom, #16191C 0%, #16191C 50%, #16191C 100%)",
        }}
      />
    </div>
  );
};
