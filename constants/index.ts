// App Configuration
export const APP_NAME = "MusicGPT Prompt Box" as const;

// Currency Configuration
export const DEFAULT_CURRENCY = "USD" as const;

// Animation Configuration
export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: 200,
    NORMAL: 300,
    SLOW: 500,
    VERY_SLOW: 1000,
  },
  EASING: {
    EASE_IN_OUT: "ease-in-out",
    EASE_OUT: "ease-out",
    EASE_IN: "ease-in",
  },
  GRADIENT: {
    CYCLE_DURATION: 8000, // Increased from 4000ms to 8000ms for slower animation
    COLORS: {
      PURPLE_PRIMARY: "#4A0B4A",
      PURPLE_LIGHT: "#661067",
      BLACK: "#000000",
    },
  },
} as const;
