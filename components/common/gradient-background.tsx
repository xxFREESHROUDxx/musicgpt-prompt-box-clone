"use client";

import { ANIMATION_CONFIG } from "@/constants";

export const GradientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="animate-gradient-shift absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #581c87 0%, #7c3aed 50%, #000000 100%)",
        }}
      />
      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background: linear-gradient(
              to bottom,
              #581c87 0%,
              #7c3aed 50%,
              #000000 100%
            );
          }
          25% {
            background: linear-gradient(
              to bottom,
              #581c87 0%,
              #581c87 50%,
              #000000 100%
            );
          }
          50% {
            background: linear-gradient(
              to bottom,
              #7c3aed 0%,
              #7c3aed 50%,
              #000000 100%
            );
          }
          75% {
            background: linear-gradient(
              to bottom,
              #581c87 0%,
              #581c87 50%,
              #000000 100%
            );
          }
          100% {
            background: linear-gradient(
              to bottom,
              #581c87 0%,
              #7c3aed 50%,
              #000000 100%
            );
          }
        }
        .animate-gradient-shift {
          animation: gradientShift ${ANIMATION_CONFIG.GRADIENT.CYCLE_DURATION}ms
            ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
