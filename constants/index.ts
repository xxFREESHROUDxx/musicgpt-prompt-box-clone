// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;

// Voice API Configuration
export const VOICE_CONFIG = {
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 8,
    MAX_LIMIT: 20,
  },
  LANGUAGES: {
    ALL: "all",
    ENGLISH: "english",
    NEPALI: "nepali",
    INDIAN: "indian",
  },
  SEARCH: {
    DEBOUNCE_DELAY: 300,
    MIN_QUERY_LENGTH: 1,
  },
} as const;

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
    CYCLE_DURATION: 4000,
    COLORS: {
      PURPLE_900: "#581c87",
      PURPLE_800: "#7c3aed",
      BLACK: "#000000",
    },
  },
} as const;

// Form Configuration
export const FORM_CONFIG = {
  HEIGHTS: {
    DEFAULT: "160px",
    LYRICS: "240px",
    TEXT_TO_SPEECH: "290px",
  },
  VALIDATION: {
    MIN_PROMPT_LENGTH: 1,
    MAX_PROMPT_LENGTH: 1000,
    MAX_LYRICS_LENGTH: 2000,
  },
} as const;

// UI Configuration
export const UI_CONFIG = {
  COLORS: {
    NEUTRAL: {
      BASE: "bg-neutral-base",
      HOVER: "bg-neutral-hover",
      LIGHT: "text-neutral-light",
      SUB_TEXT: "text-neutral-sub-text",
      BLACK: "text-neutral-black",
    },
    PURPLE: {
      GRADIENT: "from-purple-400 to-pink-400",
    },
  },
  SPACING: {
    GAP: {
      SM: "gap-1",
      MD: "gap-3",
      LG: "gap-4",
      XL: "gap-5",
    },
    PADDING: {
      SM: "p-2",
      MD: "p-3",
      LG: "p-4",
      XL: "p-5",
    },
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  FETCH_VOICES: "Failed to fetch voices",
  GENERATE_SONG: "Failed to generate song",
  NETWORK_ERROR: "Network error occurred",
  VALIDATION: {
    PROMPT_REQUIRED: "Please enter a prompt",
    VOICE_REQUIRED: "Please select a voice",
  },
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  SONG_GENERATED: "Song generation request sent successfully",
  VOICE_SELECTED: "Voice selected successfully",
} as const;
