import { Paperclip, AudioLines, Plus, ArrowRight } from "lucide-react";
import { ButtonVariants } from "./button";
import Button from "./button/button";
import { twclsx } from "@/utils/twclsx";
import { SongMode, Tool } from "@/hooks/useSongGeneration";
import { ToolsDropdown } from "./dropdown/tools-dropdown";
import { FC } from "react";

interface FormActionsProps {
  activeMode: SongMode;
  selectedTool: Tool;
  isButtonEnabled: boolean;
  isLoading?: boolean;
  showModeButtons?: boolean;
  onModeToggle: (mode: SongMode) => void;
  onToolChange: (tool: Tool) => void;
  onSubmit: () => void;
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
}) => {
  return (
    <div className="absolute bottom-2 left-3 right-3 mb-2 flex h-9 items-center justify-between">
      <div className="flex gap-1">
        {showModeButtons && selectedTool !== "Text to Speech" && (
          <>
            <Button variant={ButtonVariants.PRIMARY}>
              <input type="file" accept="audio/*" className="hidden" />
              <Paperclip
                height={16}
                width={16}
                className="text-neutral-light"
              />
            </Button>
            <Button
              variant={ButtonVariants.PRIMARY}
              className={twclsx("transition-all duration-200", {
                "border-neutral-light bg-neutral-light/20 hover:border-neutral-light hover:!bg-neutral-light/20":
                  activeMode === "instrumental",
              })}
              onClick={() => onModeToggle("instrumental")}
            >
              <AudioLines
                height={16}
                width={16}
                className="text-neutral-light"
              />
              <span className="hidden sm:inline">Instrumental</span>
            </Button>
            <Button
              variant={ButtonVariants.PRIMARY}
              className={twclsx("transition-all duration-200", {
                "border-neutral-light bg-neutral-light/20 hover:border-neutral-light hover:!bg-neutral-light/20":
                  activeMode === "lyrics",
              })}
              onClick={() => onModeToggle("lyrics")}
            >
              <Plus height={16} width={16} className="text-neutral-light" />
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
              isButtonEnabled ? "scale-100" : "scale-0",
            )}
          ></div>
          <ArrowRight
            height={20}
            width={20}
            className="relative z-10 text-neutral-black"
          />
        </Button>
      </div>
    </div>
  );
};
