"use client";

import { useRef, useCallback } from "react";
import { Textarea } from "../common/textarea";
import { VoiceAvatar } from "../common/voice-avatar";
import { useVoices, Voice } from "@/hooks/useVoices";

interface TextToSpeechFormProps {
  prompt: string;
  onPromptChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  selectedVoice?: Voice | null;
  onVoiceSelect?: (voice: Voice | null) => void;
}

// Skeleton component for loading state
const VoiceSkeleton = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="animate-pulse h-12 w-12 rounded-full bg-neutral-hover"></div>
    <div className="animate-pulse h-3 w-16 rounded bg-neutral-hover"></div>
  </div>
);

export const TextToSpeechForm: React.FC<TextToSpeechFormProps> = ({
  prompt,
  onPromptChange,
  selectedVoice,
  onVoiceSelect,
}) => {
  const {
    voices,
    pagination,
    loading,
    error,
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
    <div className="flex h-full w-full flex-col justify-between gap-5 p-5 pb-0 sm:flex-row">
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <div className="flex gap-3">
          <div className="relative min-w-0 flex-1">
            <input
              type="text"
              placeholder="Search voices"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full rounded-lg bg-neutral-hover px-4 py-2 text-pure-white placeholder:text-neutral-sub-text"
            />
            <svg
              className="absolute right-3 top-2.5 h-4 w-4 text-neutral-sub-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <select
            className="min-w-[140px] rounded-lg bg-neutral-hover px-4 py-2 text-pure-white"
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="all">All languages</option>
            <option value="english">English</option>
            <option value="nepali">Nepali</option>
            <option value="indian">Indian</option>
          </select>
        </div>

        <div className="grid max-h-48 grid-cols-4 gap-4 overflow-y-auto pt-2 scrollbar-hide">
          {loading && currentPage === 1
            ? // Show skeletons for initial load
              Array.from({ length: 8 }).map((_, index) => (
                <VoiceSkeleton key={index} />
              ))
            : voices.map((voice, index) => {
                const isLast = index === voices.length - 1;
                return (
                  <div
                    key={`${voice.name}-${index}`}
                    ref={isLast ? lastVoiceRef : undefined}
                  >
                    <VoiceAvatar
                      name={voice.name}
                      isSelected={selectedVoice?.name === voice.name}
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
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-bounce h-2 w-2 rounded-full bg-neutral-light"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex w-full max-w-[350px] flex-col gap-4">
        <div className="flex items-center gap-2">
          {selectedVoice ? (
            <>
              <VoiceAvatar
                name={selectedVoice.name}
                isSelected={true}
                hideName
                className="flex-row gap-2"
              />
              <span className="text-body-base text-pure-white">
                {selectedVoice.name}
              </span>
            </>
          ) : (
            <>
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
              <span className="text-body-base text-pure-white">
                Default Voice
              </span>
            </>
          )}
        </div>

        <div className="flex-1">
          <Textarea
            name="text-to-speech"
            id="text-to-speech"
            placeholder="Enter text.."
            value={prompt}
            onChange={onPromptChange}
          />
        </div>
      </div>
    </div>
  );
};
