"use client";

import { FC } from "react";
import { useSongGeneration } from "@/hooks/useSongGeneration";
import { FormActions } from "./common/form-actions";
import { DefaultSongForm } from "./forms/default-song-form";
import { TextToSpeechForm } from "./forms/text-to-speech-form";

const SearchBox: FC = () => {
  const {
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
  } = useSongGeneration();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateSong();
  };

  return (
    <div className="relative w-full rounded-[27px] bg-neutral-base transition-all duration-200">
      <form
        onSubmit={handleFormSubmit}
        className="h-full overflow-hidden pb-14"
        style={{ height: selectedTool === "Text to Speech" ? "290px" : "auto" }}
      >
        {selectedTool === "Text to Speech" ? (
          <TextToSpeechForm
            prompt={prompt}
            onPromptChange={handlePromptChange}
          />
        ) : (
          <DefaultSongForm
            prompt={prompt}
            lyrics={lyrics}
            activeMode={activeMode}
            onPromptChange={handlePromptChange}
            onLyricsChange={handleLyricsChange}
          />
        )}

        <FormActions
          activeMode={activeMode}
          selectedTool={selectedTool}
          isButtonEnabled={isButtonEnabled}
          isLoading={isLoading}
          showModeButtons={selectedTool !== "Text to Speech"}
          onModeToggle={handleModeToggle}
          onToolChange={handleToolChange}
          onSubmit={generateSong}
        />
      </form>
    </div>
  );
};

export default SearchBox;
