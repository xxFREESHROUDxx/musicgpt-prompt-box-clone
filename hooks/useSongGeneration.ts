import { useState } from "react";

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

  // Store previous input values for restoration
  const [previousPrompt, setPreviousPrompt] = useState("");
  const [previousLyrics, setPreviousLyrics] = useState("");
  const [previousMode, setPreviousMode] = useState<SongMode>(null);

  const handleModeToggle = (mode: SongMode) => {
    setActiveMode((prev) => (prev === mode ? null : mode));
    if (mode !== "lyrics") {
      setLyrics(""); // Clear lyrics when switching away from lyrics mode
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

      // Clear inputs for text-to-speech
      setPrompt("");
      setLyrics("");
      setActiveMode(null);
    } else {
      // Restore previous values when switching back to create anything
      setPrompt(previousPrompt);
      setLyrics(previousLyrics);
      setActiveMode(previousMode);
    }

    setSelectedTool(tool);
  };

  const isButtonEnabled = prompt.trim().length > 0;

  const generateSong = async (): Promise<void> => {
    if (!prompt.trim()) return;

    setIsLoading(true);

    try {
      let requestBody: SongGenerationRequest = {
        prompt: prompt.trim(),
        type: "create anything", // Default type
      };

      // Determine the type based on selected tool and mode
      if (selectedTool === "Text to Speech") {
        requestBody.type = "text to speech: default voice";
      } else if (activeMode === "instrumental") {
        requestBody.type = "instrumental";
      } else if (activeMode === "lyrics") {
        requestBody.type = "lyrics";
        if (lyrics.trim()) {
          requestBody.lyrics = lyrics.trim();
        }
      }

      // Log the request body (replace with actual API call)
      console.log("API Request Body:", requestBody);

      // Here you would make the actual API call
      // const response = await fetch('/api/generate-song', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(requestBody)
      // });

      // const data = await response.json();
      // Handle success response

      // Clear all inputs after successful submission
      setPrompt("");
      setLyrics("");
      setActiveMode(null);
      setPreviousPrompt("");
      setPreviousLyrics("");
      setPreviousMode(null);
    } catch (error) {
      console.error("Error generating song:", error);
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  return {
    activeMode,
    prompt,
    lyrics,
    selectedTool,
    isLoading,
    isButtonEnabled,
    handleModeToggle,
    handlePromptChange,
    handleLyricsChange,
    handleToolChange,
    generateSong,
  };
};
