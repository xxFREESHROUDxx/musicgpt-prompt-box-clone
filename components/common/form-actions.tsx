import { Paperclip, AudioLines, Plus, ArrowRight, Loader2 } from "lucide-react";
import { ButtonVariants } from "./button";
import Button from "./button/button";
import { twclsx } from "@/utils/twclsx";
import { SongMode, Tool } from "@/hooks/useSongGeneration";
import { ToolsDropdown } from "./dropdown/tools-dropdown";
import { FC, useRef } from "react";

interface FormActionsProps {
  activeMode: SongMode;
  selectedTool: Tool;
  isButtonEnabled: boolean;
  isLoading?: boolean;
  showModeButtons?: boolean;
  onModeToggle: (mode: SongMode) => void;
  onToolChange: (tool: Tool) => void;
  onSubmit: () => void;
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormActions: FC<FormActionsProps> = ({
  activeMode,
  selectedTool,
  isButtonEnabled,
  isLoading = false,
  showModeButtons = true,
  onModeToggle,
  onToolChange,
  onSubmit,
  onFileChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex h-9 items-center justify-between">
      <div className="flex gap-2">
        {showModeButtons && selectedTool !== "Text to Speech" && (
          <>
            <Button
              variant={ButtonVariants.PRIMARY}
              onClick={handleFileButtonClick}
              type="button"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                className="hidden"
                onChange={onFileChange}
              />
              <Paperclip
                height={16}
                width={16}
                className="text-neutral-light"
              />
            </Button>
            <Button
              variant={ButtonVariants.PRIMARY}
              className={twclsx(
                "transform transition-all duration-300 ease-in-out",
                {
                  "scale-105 border-neutral-light bg-neutral-light/20 shadow-lg hover:border-neutral-light hover:!bg-neutral-light/20":
                    activeMode === "instrumental",
                  "hover:scale-105 active:scale-95":
                    activeMode !== "instrumental",
                },
              )}
              onClick={() => onModeToggle("instrumental")}
            >
              <AudioLines
                height={16}
                width={16}
                className={twclsx(
                  "text-neutral-light transition-transform duration-200",
                  {
                    "scale-110": activeMode === "instrumental",
                    "scale-100": activeMode !== "instrumental",
                  },
                )}
              />
              <span className="hidden sm:inline">Instrumental</span>
            </Button>
            <Button
              variant={ButtonVariants.PRIMARY}
              className={twclsx(
                "transform transition-all duration-300 ease-in-out",
                {
                  "scale-105 border-neutral-light bg-neutral-light/20 shadow-lg hover:border-neutral-light hover:!bg-neutral-light/20":
                    activeMode === "lyrics",
                  "hover:scale-105 active:scale-95": activeMode !== "lyrics",
                },
              )}
              onClick={() => onModeToggle("lyrics")}
            >
              <Plus
                height={16}
                width={16}
                className={twclsx(
                  "text-neutral-light transition-transform duration-200",
                  {
                    "rotate-45": activeMode === "lyrics",
                    "rotate-0": activeMode !== "lyrics",
                  },
                )}
              />
              <span className="hidden sm:inline">Lyrics</span>
            </Button>
          </>
        )}
      </div>
      <div className="flex gap-1">
        <ToolsDropdown
          onToolChange={onToolChange}
          selectedTool={selectedTool}
        />
        <Button
          type="button"
          className="relative h-9 w-9 overflow-hidden bg-neutral-base/50 !px-0 !py-0 transition-all duration-300 ease-in-out hover:scale-110"
          variant={ButtonVariants.PRIMARY}
          disabled={!isButtonEnabled || isLoading}
          onClick={onSubmit}
        >
          <div
            className={twclsx(
              "absolute inset-0 origin-center rounded-full bg-neutral-light transition-all duration-300 ease-in-out",
              {
                "scale-100": isButtonEnabled && !isLoading,
                "scale-0": !isButtonEnabled || isLoading,
              },
            )}
          ></div>
          <div
            className={twclsx(
              "absolute inset-0 origin-center rounded-full bg-neutral-light transition-all duration-300 ease-in-out",
              {
                "scale-100": isLoading,
                "scale-0": !isLoading,
              },
            )}
          ></div>
          {isLoading ? (
            <Loader2
              height={18}
              width={18}
              className="relative z-10 animate-spin text-neutral-black"
            />
          ) : (
            <ArrowRight
              height={20}
              width={20}
              className="relative z-10 text-neutral-black"
            />
          )}
        </Button>
      </div>
    </div>
  );
};
