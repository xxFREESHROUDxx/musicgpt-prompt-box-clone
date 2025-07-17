// API Routes for MusicGPT Application

// Voice Routes
export const API_ROUTE_VOICES = "/api/voices";
export const API_ROUTE_VOICES_SEARCH = "/api/voices/search";
export const API_ROUTE_VOICE_BY_ID = "/api/voices/:id";

// Music Generation Routes
export const API_ROUTE_GENERATE_SONG = "/api/generate/song";
export const API_ROUTE_GENERATE_LYRICS = "/api/generate/lyrics";
export const API_ROUTE_TEXT_TO_SPEECH = "/api/generate/tts";
export const API_ROUTE_GENERATION_STATUS = "/api/generate/status/:id";

// Logging Routes
export const API_ROUTE_LOG_ACTIVITY = "/api/log/activity";

// Utility Routes
export const API_ROUTE_HEALTH_CHECK = "/api/health";
export const API_ROUTE_APP_CONFIG = "/api/config";
