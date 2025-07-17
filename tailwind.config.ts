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
        // the font is not in our system
        SairaExtraCondensed: [
          '"Saira Extra Condensed", Arial, Verdana, Helvetica, sans-serif',
        ],
      },
      colors: {
        // * Primary
        "primary-clicked": "#256b3e",
        "primary-hover": "#328f53",
        "primary-default": "#3eb368",
        "primary-light": "#b2e1c3",
        "primary-lighter": "#d8f0e1",
        "primary-lightest": "#ecf8f0",

        // * Secondary
        "secondary-clicked": "#115b94",
        "secondary-hover": "#167ac6",
        "secondary-default": "#1c98f7",
        "secondary-light": "#d9edf7",
        "secondary-lighter": "#E8F5FE",

        // * Neutral
        "neutral-black": "#16191C",
        "neutral-dark": "#2d3033",
        "neutral-base": "#272A2E",
        "neutral-hover": "#3A3E42",
        "neutral-sub-text": "#6B7280",
        "neutral-disabled": "#D1D5DB",
        "neutral-light": "#E4E6E8",
        "neutral-lighter": "#F3F4F6",
        "neutral-lightest": "#F9FAFB",
        "pure-white": "#ffffff",
        "pure-black": "#000000",

        // * Orange
        "orange-light": "#FF62001A",
        "orange-dark": "#FF6100",

        // * Default Tailwind Colors
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
      spacing: {
        93: "23.25rem",
        128: "32rem",
        144: "36rem",
      },
    },
    keyframes: {
      show: {
        from: {
          height: "0",
        },
        to: {
          height: "100%",
        },
      },
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
      "slide-in": {
        "0%": {
          transform: "translateY(100%)",
          opacity: "0",
        },
        "100%": {
          transform: "translateY(0%)",
          opacity: "1",
        },
      },

      "slide-right-to-left": {
        "0%": {
          transform: "translateX(100%)",
          opacity: "0",
        },
        "100%": {
          transform: "translateX(0%)",
          opacity: "1",
        },
      },
      "slide-left-to-right": {
        "0%": {
          transform: "translateX(0%)",
          opacity: "0",
        },
        "100%": {
          transform: "translateX(100%)",
          opacity: "1",
        },
      },
      blinker: {
        "0%": {
          opacity: "1",
        },
        "50%": {
          opacity: "0",
        },

        "100%": {
          opacity: "1",
        },
      },

      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },

      "non-spin": {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(-360deg)" },
      },
      "scale-in": {
        "0%": {
          transform: "scale(0)",
          opacity: "0",
        },
        "100%": {
          transform: "scale(1)",
          opacity: "1",
        },
      },

      "scale-out": {
        "0%": {
          transform: "translateY(-100%)",
          opacity: "0",
        },
        "100%": {
          transform: "translateY(0)",
          opacity: "1",
        },
      },

      shakeX: {
        "0%, 100%": { transform: "translate3d(0, 0, 0)" },
        "10%, 30%, 50%, 70%, 90%": { transform: "translate3d(-10px, 0, 0)" },
        "20%, 40%, 60%, 80%": { transform: "translate3d(10px, 0, 0)" },
      },

      "slide-up": {
        from: {
          transform: "translateY(200%)",
          opacity: "0",
        },
        to: {
          transform: "translateY(0)",
          opacity: "1",
        },
      },

      "slide-down": {
        from: {
          transform: "translateY(0)",
          opacity: "1",
        },
        to: {
          transform: "translateY(100%)",
          opacity: "1",
        },
      },

      "hearts-animation": {
        "0%": {
          opacity: "1",
        },
        "100%": {
          opacity: "0",
        },
      },
    },

    animation: {
      "scroll-carousel": "scroll 40s linear infinite",
      "slide-up": "slide-up 0.3s ease-out forwards",
      "slide-down": "slide-down 0.3s ease-out forwards",
      spin: "spin 1s linear infinite",
      "non-spin": "non-spin 1s linear infinite",
      blink: "blinker 1s linear infinite",
      "slide-in": "slide-in 150ms ease-in;",
      "slide-right-to-left": "slide-right-to-left 150ms ease-in",
      "slide-left-to-right": "slide-left-to-right 150ms ease-in",
      "scale-in": "scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      "scale-out": "scale-out 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      "shake-x": "shakeX 1s ease-in-out",
      show: "show 0.4s ease-in-out",
      "heart-1": "hearts-animation 0.8s linear 0s infinite alternate",
      "heart-2": "hearts-animation 0.8s linear 0.4s infinite alternate",
      "heart-3": "hearts-animation 0.8s linear 1.2s infinite alternate",
      "heart-4": "hearts-animation 0.8s linear 2s infinite alternate",
    },
  },
  plugins: [
    plugin(({ addComponents }: { addComponents: any }) => {
      addComponents({
        ".container": {
          "@apply mx-auto max-w-[1180px] px-4 md:px-5 lg:px-6": {},
        },
        ".c-container": {
          "@apply mx-auto max-w-[1376px] px-4 sm:px-6 xl:px-20 3xl:px-0": {},
        },
        ".container-fluid": {
          "@apply max-w-full w-full lg:px-5": {},
        },
      });
    }),

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
          "&::-webkit-scrollbar-thumb": {
            background: "#3eb368",
            border: "4px solid transparent",
            borderRadius: "8px",
            backgroundClip: "paddingBox",
          },
        },
      });
    }),
  ],
};
export default config;
