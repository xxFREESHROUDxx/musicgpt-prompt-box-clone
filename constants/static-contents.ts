export interface Voice {
  name: string;
  language: string;
}

export const VOICES_DATA: Voice[] = [
  { name: "Emma Watson", language: "english" },
  { name: "Morgan Freeman", language: "english" },
  { name: "Scarlett Johansson", language: "english" },
  { name: "Tom Hanks", language: "english" },
  { name: "Jennifer Lawrence", language: "english" },
  { name: "Leonardo DiCaprio", language: "english" },
  { name: "Meryl Streep", language: "english" },
  { name: "Brad Pitt", language: "english" },
  { name: "Angelina Jolie", language: "english" },
  { name: "Johnny Depp", language: "english" },

  { name: "Narayan Gopal", language: "nepali" },
  { name: "Ambar Gurung", language: "nepali" },
  { name: "Tara Devi", language: "nepali" },
  { name: "Kumar Basnet", language: "nepali" },
  { name: "Sabin Rai", language: "nepali" },
  { name: "Deepak Bajracharya", language: "nepali" },
  { name: "Nepathya", language: "nepali" },
  { name: "Phiroj Shyangden", language: "nepali" },
  { name: "Adrian Pradhan", language: "nepali" },
  { name: "Swoopna Suman", language: "nepali" },

  { name: "Amitabh Bachchan", language: "indian" },
  { name: "Lata Mangeshkar", language: "indian" },
  { name: "Shah Rukh Khan", language: "indian" },
  { name: "Aishwarya Rai", language: "indian" },
  { name: "Priyanka Chopra", language: "indian" },
  { name: "Deepika Padukone", language: "indian" },
  { name: "Ranbir Kapoor", language: "indian" },
  { name: "Alia Bhatt", language: "indian" },
  { name: "Aamir Khan", language: "indian" },
  { name: "Kajol", language: "indian" },
];

export interface LanguageOption {
  value: string;
  label: string;
  flag: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { value: "all", label: "All languages", flag: "🌍" },
  { value: "english", label: "English", flag: "🇺🇸" },
  { value: "nepali", label: "Nepali", flag: "🇳🇵" },
  { value: "indian", label: "Indian", flag: "🇮🇳" },
];

export interface Tool {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  isPlus?: boolean;
  heading: string;
}

export const FORM_PLACEHOLDERS = {
  SONG_DESCRIPTION: "Describe your song",
  LYRICS: "Enter your lyrics here",
  TEXT_TO_SPEECH: "Enter text..",
  VOICE_SEARCH: "Search voices",
} as const;

export const DEFAULT_VALUES = {
  VOICE_LIMIT: 8,
  SEARCH_DEBOUNCE_DELAY: 300,
  API_DELAY: 2000,
} as const;

export const FORM_HEIGHTS = {
  DEFAULT: "h-[150px]",
  LYRICS: "h-[230px]",
  TEXT_TO_SPEECH: "h-[280px]",
} as const;
