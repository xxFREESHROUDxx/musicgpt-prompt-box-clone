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
    selectedVoice,
    isLoading,
    isButtonEnabled,
    handleModeToggle,
    handlePromptChange,
    handleLyricsChange,
    handleToolChange,
    handleVoiceSelect,
    generateSong,
  } = useSongGeneration();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateSong();
  };

  const isTextToSpeech = selectedTool === "Text to Speech";

  // Get dynamic height class based on mode
  const getFormHeightClass = () => {
    if (isTextToSpeech) return "h-[290px]";
    if (activeMode === "lyrics") return "h-[240px]";
    return "h-[160px]";
  };

  return (
    <div className="relative w-full rounded-[27px] bg-neutral-base/80 backdrop-blur-sm transition-all duration-500 ease-in-out">
      <form
        onSubmit={handleFormSubmit}
        className={`w-full overflow-hidden pb-14 transition-all duration-500 ease-in-out ${getFormHeightClass()}`}
      >
        <div className="relative h-full transition-all duration-500 ease-in-out">
          <div
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              isTextToSpeech
                ? "translate-x-0 opacity-100"
                : "pointer-events-none -translate-x-full opacity-0"
            }`}
          >
            <TextToSpeechForm
              prompt={prompt}
              onPromptChange={handlePromptChange}
              selectedVoice={selectedVoice}
              onVoiceSelect={handleVoiceSelect}
            />
          </div>
          <div
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              !isTextToSpeech
                ? "translate-x-0 opacity-100"
                : "pointer-events-none translate-x-full opacity-0"
            }`}
          >
            <DefaultSongForm
              prompt={prompt}
              lyrics={lyrics}
              activeMode={activeMode}
              onPromptChange={handlePromptChange}
              onLyricsChange={handleLyricsChange}
            />
          </div>
        </div>

        <div className="transition-all duration-300 ease-in-out">
          <FormActions
            activeMode={activeMode}
            selectedTool={selectedTool}
            isButtonEnabled={isButtonEnabled}
            isLoading={isLoading}
            showModeButtons={!isTextToSpeech}
            onModeToggle={handleModeToggle}
            onToolChange={handleToolChange}
            onSubmit={generateSong}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
