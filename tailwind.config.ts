import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "376px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1366px",
        "2xl": "1440px",
        "3xl": "1600px",
      },
      fontFamily: {
        Roboto: ["var(--font-Roboto)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        SairaExtraCondensed: [
          '"Saira Extra Condensed", Arial, Verdana, Helvetica, sans-serif',
        ],
      },
      zIndex: {
        toast: "9999",
      },
      keyframes: {
        "slide-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slide-up": "slide-up 0.3s ease-out forwards",
      },
      colors: {
        // * Neutral (used throughout the app)
        "neutral-black": "#16191C",
        "neutral-base": "#272A2E",
        "neutral-hover": "#3A3E42",
        "neutral-sub-text": "#6B7280",
        "neutral-light": "#E4E6E8",
        "pure-white": "#ffffff",
        "pure-black": "#000000",

        "purple-primary": "#4A0B4A",
        "purple-light": "#661067",
        "purple-dark": "#2D072D",

        "orange-light": "#FF62001A",
        "orange-dark": "#FF6100",

        // * Default Tailwind Colors used when needed
        gray: colors.gray,
        orange: colors.orange,
        lime: colors.lime,
        green: colors.green,
        cyan: colors.cyan,
        purple: colors.purple,
        neutral: colors.neutral,
      },
      fontSize: {
        "title-1": [
          "3rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "title-2": [
          "2.5rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "title-3": [
          "2.25rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "title-4": [
          "2rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "title-4-light": [
          "2rem",
          {
            fontWeight: 300,
            lineHeight: "1.5",
          },
        ],
        "title-5": [
          "1.5rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "title-5-light": [
          "1.5rem",
          {
            fontWeight: 300,
            lineHeight: "1.5",
          },
        ],

        "body-big-bold": [
          "1.25rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "body-big": [
          "1.25rem",
          {
            fontWeight: 400,
            lineHeight: "1.5",
          },
        ],
        "body-base-bold": [
          "1rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "body-base-medium": [
          "1rem",
          {
            fontWeight: 500,
            lineHeight: "1.5",
          },
        ],
        "body-base": [
          "1rem",
          {
            fontWeight: 400,
            lineHeight: "1.5",
          },
        ],
        "body-base-italic": [
          "1rem",
          {
            fontWeight: 400,
            lineHeight: "1.5",
          },
        ],
        "body-small-bold": [
          "0.875rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "body-small-medium": [
          ".875rem",
          {
            fontWeight: 500,
            lineHeight: "1.5",
          },
        ],
        "body-small": [
          "0.875rem",
          {
            fontWeight: 400,
            lineHeight: "1.5",
          },
        ],
        "body-small-italic": [
          "0.875rem",
          {
            fontWeight: 400,
            lineHeight: "1.5",
          },
        ],
        "body-small-strikethrough": [
          "0.875rem",
          {
            fontWeight: 500,
            lineHeight: "1.5",
          },
        ],
        "body-tiny-bold": [
          "0.75rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "body-tiny-medium": [
          "0.75rem",
          {
            fontWeight: 500,
            lineHeight: "1.5",
          },
        ],
        "body-tiny": [
          "0.75rem",
          {
            fontWeight: 400,
            lineHeight: "1.5",
          },
        ],

        "button-base": [
          "1rem",
          {
            fontWeight: 500,
            lineHeight: "1.5",
          },
        ],
        "button-small": [
          "0.875rem",
          {
            fontWeight: 500,
            lineHeight: "1.5",
          },
        ],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },

        ".scrollbar-light": {
          "&::-webkit-scrollbar": {
            width: "5px",
            marginTop: "10px",
            height: "6px",
            background: "#E4E5E5",
            border: "4px solid transparent",
            borderRadius: "8px",
            cursor: "pointer",
          },
        },
      });
    }),
  ],
};
export default config;
