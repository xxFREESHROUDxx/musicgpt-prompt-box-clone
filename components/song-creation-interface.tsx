"use client";

import { FC, FormEvent, useEffect } from "react";
import { useSongGeneration } from "@/hooks/useSongGeneration";
import { FormActions } from "./common/form-actions";
import { DefaultSongForm } from "./forms/default-song-form";
import { TextToSpeechForm } from "./forms/text-to-speech-form";
import { twclsx } from "@/utils/twclsx";

const SongCreationInterface: FC = () => {
  const {
    activeMode,
    prompt,
    lyrics,
    selectedTool,
    selectedVoice,
    selectedFile,
    isLoading,
    isButtonEnabled,
    handleModeToggle,
    handlePromptChange,
    handleLyricsChange,
    handleToolChange,
    handleVoiceSelect,
    handleFileChange,
    handleFileRemove,
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

      <div className="group/PromptConfigurator relative z-10 w-full rounded-[27px] bg-neutral-base/80 shadow-lg backdrop-blur-sm transition duration-200">
        <form onSubmit={handleFormSubmit} className="overflow-hidden pb-[50px]">
          <div className="relative min-h-0 transition-all duration-500 ease-in-out">
            <div
              className={twclsx("transition-all duration-500 ease-in-out", {
                "translate-x-0 opacity-100": isTextToSpeech,
                "pointer-events-none absolute inset-0 -translate-x-full opacity-0":
                  !isTextToSpeech,
              })}
            >
              {isTextToSpeech && (
                <TextToSpeechForm
                  prompt={prompt}
                  onPromptChange={handlePromptChange}
                  selectedVoice={selectedVoice}
                  onVoiceSelect={handleVoiceSelect}
                />
              )}
            </div>
            <div
              className={twclsx("transition-all duration-500 ease-in-out", {
                "translate-x-0 opacity-100": !isTextToSpeech,
                "pointer-events-none absolute inset-0 translate-x-full opacity-0":
                  isTextToSpeech,
              })}
            >
              {!isTextToSpeech && (
                <DefaultSongForm
                  prompt={prompt}
                  lyrics={lyrics}
                  activeMode={activeMode}
                  selectedFile={selectedFile}
                  onPromptChange={handlePromptChange}
                  onLyricsChange={handleLyricsChange}
                  onFileRemove={handleFileRemove}
                />
              )}
            </div>
          </div>

          <div className="absolute bottom-3 left-3 right-3">
            <FormActions
              activeMode={activeMode}
              selectedTool={selectedTool}
              isButtonEnabled={isButtonEnabled}
              isLoading={isLoading}
              showModeButtons={!isTextToSpeech}
              onModeToggle={handleModeToggle}
              onToolChange={handleToolChange}
              onFileChange={handleFileChange}
              onSubmit={generateSong}
            />
          </div>
        </form>
      </div>

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
