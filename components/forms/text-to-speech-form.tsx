"use client";

import { useRef, useCallback, FC, ChangeEvent } from "react";
import { Textarea } from "../common/input/textarea";
import { VoiceAvatar } from "../common/voice-avatar";
import { LanguageDropdown } from "../common/dropdown/language-dropdown";
import { useVoices, Voice } from "@/hooks/useVoices";
import { FORM_PLACEHOLDERS } from "@/constants";
import { Search } from "lucide-react";

interface TextToSpeechFormProps {
  prompt: string;
  onPromptChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  selectedVoice?: Voice | null;
  onVoiceSelect?: (voice: Voice | null) => void;
}

// Skeleton component for loading state
const VoiceSkeleton = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="h-12 w-12 animate-pulse rounded-full bg-neutral-hover"></div>
    <div className="h-3 w-16 animate-pulse rounded bg-neutral-hover"></div>
  </div>
);

export const TextToSpeechForm: FC<TextToSpeechFormProps> = ({
  prompt,
  onPromptChange,
  selectedVoice,
  onVoiceSelect,
}) => {
  const {
    voices,
    pagination,
    loading,
    currentPage,
    selectedLanguage,
    searchQuery,
    handleLanguageChange,
    handleSearchChange,
    handlePageChange,
  } = useVoices();

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  const lastVoiceRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && pagination?.hasNextPage) {
          handlePageChange(currentPage + 1);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, pagination?.hasNextPage, currentPage, handlePageChange],
  );

  const handleVoiceClick = (voice: Voice) => {
    onVoiceSelect?.(voice);
  };

  return (
    <div className="flex h-full w-full flex-col justify-between gap-6 p-6 pb-0 sm:flex-row">
      <div className="flex min-w-0 flex-1 flex-col gap-6 max-sm:pb-20">
        <div className="flex gap-3">
          <div className="relative flex w-full">
            <input
              type="text"
              placeholder={FORM_PLACEHOLDERS.VOICE_SEARCH}
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="block w-full rounded-full bg-neutral-hover px-4 py-2 text-pure-white placeholder:text-neutral-sub-text"
            />
            <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-sub-text" />
          </div>
          <LanguageDropdown
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>

        <div className="grid max-h-48 grid-cols-4 gap-4 overflow-y-auto pt-1 scrollbar-hide">
          {loading && currentPage === 1
            ? Array.from({ length: 8 }).map((_, index) => (
                <VoiceSkeleton key={index} />
              ))
            : voices.map((voice, index) => {
                const isLast = index === voices?.length - 1;
                return (
                  <div
                    key={`${voice?.name}-${index}`}
                    ref={isLast ? lastVoiceRef : undefined}
                  >
                    <VoiceAvatar
                      name={voice?.name}
                      isSelected={selectedVoice?.name === voice?.name}
                      onClick={() => handleVoiceClick(voice)}
                    />
                  </div>
                );
              })}

          {loading && currentPage > 1 && (
            <div
              ref={loadingRef}
              className="col-span-4 flex justify-center py-4"
            >
              <div className="flex gap-2">
                {Array.from({ length: 3 })?.map((_, index) => (
                  <div
                    key={index}
                    className="h-2 w-2 animate-bounce rounded-full bg-neutral-light"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="my-1 flex w-1/3 flex-col gap-6">
        <div className="flex items-center gap-2">
          {selectedVoice ? (
            <>
              <VoiceAvatar
                name={selectedVoice?.name || "Default Voice"}
                isSelected={true}
                hideName
                className="flex-row gap-2"
              />
              <span className="text-body-base text-neutral-light">
                {selectedVoice?.name || "Default Voice"}
              </span>
            </>
          ) : (
            <>
              <div className="h-6 w-6 rounded-full bg-neutral-light"></div>
              <span className="text-body-base text-neutral-light">
                Default Voice
              </span>
            </>
          )}
        </div>

        <div className="flex-1">
          <Textarea
            name="text-to-speech"
            id="text-to-speech"
            placeholder={FORM_PLACEHOLDERS.TEXT_TO_SPEECH}
            value={prompt}
            onChange={onPromptChange}
          />
        </div>
      </div>
    </div>
  );
};
