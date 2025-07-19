"use client";

import { useRef, useCallback, FC, ChangeEvent, useEffect } from "react";
import { Textarea } from "../common/input/textarea";
import { VoiceAvatar } from "../common/voice-avatar";
import { LanguageDropdown } from "../common/dropdown/language-dropdown";
import { useVoices, Voice } from "@/hooks/useVoices";
import { FORM_PLACEHOLDERS } from "@/constants";
import { Search } from "lucide-react";
import VoiceSkeleton from "@/components/common/skeletons/voice-skeleton";

interface TextToSpeechFormProps {
  prompt: string;
  onPromptChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  selectedVoice?: Voice | null;
  onVoiceSelect?: (voice: Voice | null) => void;
}

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
    isSearching,
    handleLanguageChange,
    handleSearchChange,
    handlePageChange,
  } = useVoices();

  const observerRef = useRef<IntersectionObserver | null>(null);

  // Cleanup intersection observer on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

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

  const renderVoiceContent = () => {
    // Show skeleton during initial load or when search is being typed
    if (loading && currentPage === 1) {
      return <VoiceSkeleton />;
    }

    // Show no results state
    if (voices.length === 0 && !loading && !isSearching) {
      return (
        <div className="col-span-4 flex flex-col items-center justify-center py-8 text-center">
          <div className="mb-2 text-sm text-neutral-sub-text">
            No voices found
          </div>
          {searchQuery ? (
            <div className="text-xs text-neutral-sub-text">
              No voices match &quot;{searchQuery}&quot;. Try a different search
              term or clear the filter.
            </div>
          ) : selectedLanguage !== "all" ? (
            <div className="text-xs text-neutral-sub-text">
              No voices available for the selected language.
            </div>
          ) : (
            <div className="text-xs text-neutral-sub-text">
              No voices available at the moment.
            </div>
          )}
        </div>
      );
    }

    // Show voices
    return (
      <>
        {voices.map((voice, index) => {
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
          <div className="col-span-4 flex justify-center py-4">
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
      </>
    );
  };

  return (
    <div className="flex h-full w-full flex-col justify-between gap-6 p-5 pb-0 sm:flex-row">
      <div className="hidden min-w-0 flex-1 flex-col gap-6 sm:flex">
        <div className="flex gap-3">
          <div className="relative flex w-full">
            <input
              type="text"
              placeholder={FORM_PLACEHOLDERS.VOICE_SEARCH}
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="block w-full rounded-full bg-neutral-hover px-4 py-2 pr-10 text-pure-white transition-all duration-200 placeholder:text-neutral-sub-text"
            />
            {isSearching ? (
              <div className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-sub-text border-t-neutral-light"></div>
              </div>
            ) : (
              <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-sub-text" />
            )}
          </div>
          <LanguageDropdown
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>

        <div className="grid max-h-48 min-h-48 grid-cols-4 gap-4 overflow-y-auto pt-1 transition-all duration-200 ease-in-out scrollbar-hide">
          {renderVoiceContent()}
        </div>
      </div>

      <div className="mt-1 flex w-full flex-col gap-6 sm:w-1/3">
        <div className="flex items-center gap-2">
          {selectedVoice ? (
            <>
              <VoiceAvatar
                name={selectedVoice?.name || "Default Voice"}
                isSelected={true}
                hideName
                size={24}
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
            autoResize={true}
            minHeight={80}
            maxHeight={150}
          />
        </div>
      </div>
    </div>
  );
};
