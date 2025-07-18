import { API_ROUTE_GENERATE_SONG } from "@/constants/routes";
import { useState } from "react";
import { Voice } from "./useVoices";

export type SongMode = "instrumental" | "lyrics" | null;
export type Tool = "Create anything" | "Text to Speech";

export interface SongGenerationRequest {
  prompt: string;
  type?: string;
  lyrics?: string;
}

export const useSongGeneration = () => {
  const [activeMode, setActiveMode] = useState<SongMode>(null);
  const [prompt, setPrompt] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [selectedTool, setSelectedTool] = useState<Tool>("Create anything");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);

  // Store previous input values for restoration
  const [previousPrompt, setPreviousPrompt] = useState("");
  const [previousLyrics, setPreviousLyrics] = useState("");
  const [previousMode, setPreviousMode] = useState<SongMode>(null);
  const [previousVoice, setPreviousVoice] = useState<Voice | null>(null);

  const handleModeToggle = (mode: SongMode) => {
    setActiveMode((prev) => (prev === mode ? null : mode));
    if (mode !== "lyrics") {
      setLyrics("");
    }
  };

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleLyricsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLyrics(e.target.value);
  };

  const handleToolChange = (tool: Tool) => {
    if (tool === "Text to Speech") {
      // Store current values before clearing
      setPreviousPrompt(prompt);
      setPreviousLyrics(lyrics);
      setPreviousMode(activeMode);
      setPreviousVoice(selectedVoice);

      // Clear inputs for text-to-speech
      setPrompt("");
      setLyrics("");
      setActiveMode(null);
      setSelectedVoice(null);
    } else {
      // Restore previous values when switching back to create anything
      setPrompt(previousPrompt);
      setLyrics(previousLyrics);
      setActiveMode(previousMode);
      setSelectedVoice(previousVoice);
    }

    setSelectedTool(tool);
  };

  const handleVoiceSelect = (voice: Voice | null) => {
    setSelectedVoice(voice);
  };

  const isButtonEnabled = () => {
    if (selectedTool === "Text to Speech") {
      return prompt.trim().length > 0 && selectedVoice !== null;
    }
    return prompt.trim().length > 0;
  };

  const generateSong = async (): Promise<void> => {
    if (!prompt.trim()) return;

    setIsLoading(true);

    try {
      let requestBody: SongGenerationRequest = {
        prompt: prompt.trim(),
        type: "create anything",
      };

      // Determine the type based on selected tool and mode
      if (selectedTool === "Text to Speech") {
        if (selectedVoice?.name) {
          requestBody.type = `text to speech: ${selectedVoice.name}`;
        } else {
          requestBody.type = "text to speech: default voice";
        }
      } else if (activeMode === "instrumental") {
        requestBody.type = "instrumental";
      } else if (activeMode === "lyrics") {
        requestBody.type = "lyrics";
        if (lyrics.trim()) {
          requestBody.lyrics = lyrics.trim();
        }
      }

      // Log the request body to frontend console
      console.log("Frontend Request Body:", requestBody);

      // Make the actual API call to backend
      const response = await fetch(`${API_ROUTE_GENERATE_SONG}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to generate song");
      }

      const data = await response.json();
      console.log("Backend Response:", data);

      // Clear all inputs after successful submission
      setPrompt("");
      setLyrics("");
      setActiveMode(null);
      setSelectedVoice(null);
      setPreviousPrompt("");
      setPreviousLyrics("");
      setPreviousMode(null);
      setPreviousVoice(null);
    } catch (error) {
      console.error("Error generating song:", error);
      // Handle error - you might want to show a toast notification here
    } finally {
      setIsLoading(false);
    }
  };

  return {
    activeMode,
    prompt,
    lyrics,
    selectedTool,
    selectedVoice,
    isLoading,
    isButtonEnabled: isButtonEnabled(),
    handleModeToggle,
    handlePromptChange,
    handleLyricsChange,
    handleToolChange,
    handleVoiceSelect,
    generateSong,
  };
};
