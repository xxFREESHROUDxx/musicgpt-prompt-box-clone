"use client";

import { FC, FormEvent, useEffect } from "react";
import { useSongGeneration } from "@/hooks/useSongGeneration";
import { FormActions } from "./common/form-actions";
import { DefaultSongForm } from "./forms/default-song-form";
import { TextToSpeechForm } from "./forms/text-to-speech-form";

const SongCreationInterface: FC = () => {
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

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    generateSong();
  };

  // keyboard event listener for Ctrl+Enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        if (isButtonEnabled && !isLoading) {
          generateSong();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isButtonEnabled, isLoading, generateSong]);

  const isTextToSpeech = selectedTool === "Text to Speech";

  const getFormHeightClass = () => {
    if (isTextToSpeech) return "h-[280px]";
    if (activeMode === "lyrics") return "h-[230px]";
    return "h-[150px]";
  };

  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h1 className="text-title-4 font-normal">
          {isTextToSpeech ? "Text to speech" : "What song to create?"}
        </h1>
        {isTextToSpeech && (
          <div className="text-body-base-medium text-neutral-sub-text">
            This is part of our premium tools.&nbsp;
            <span className="cursor-pointer text-orange-dark underline">
              Upgrade to unlock
            </span>
          </div>
        )}
      </div>

      {/* Form Container */}
      <div className="relative w-full rounded-[27px] bg-neutral-base/80 shadow-lg backdrop-blur-sm transition-all duration-500 ease-in-out">
        <form
          onSubmit={handleFormSubmit}
          className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${getFormHeightClass()}`}
        >
          <div className="relative h-full pb-16 transition-all duration-500 ease-in-out">
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

      {/* Bottom Subtitle for Text-to-Speech */}
      {isTextToSpeech && (
        <div className="mt-4 text-center">
          <p className="text-sm text-neutral-sub-text">
            Voices are optimized for english but can work in any language
          </p>
        </div>
      )}
    </div>
  );
};

export default SongCreationInterface;
