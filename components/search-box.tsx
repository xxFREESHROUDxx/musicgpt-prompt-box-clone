"use client";

import { Plus, AudioLines, Paperclip, ArrowRight } from "lucide-react";
import { ButtonVariants } from "./common/button";
import Button from "./common/button/button";
import { ToolsDropdown } from "./common/tools-dropdown";
import { FC, useState } from "react";
import { twclsx } from "@/utils/twclsx";

type SongMode = "instrumental" | "lyrics" | null;

const SearchBox: FC = () => {
  const [activeMode, setActiveMode] = useState<SongMode>(null);

  const handleModeToggle = (mode: SongMode) => {
    setActiveMode((prev) => (prev === mode ? null : mode));
  };

  return (
    <div className="relative h-full w-full rounded-[27px] bg-neutral-base transition duration-200">
      <form className="overflow-hidden pb-[50px]">
        <div>
          <textarea
            name="description"
            id="description"
            placeholder="Describe your song"
            className="font- text-body-big-medium block h-16 w-full resize-none bg-transparent px-5 py-5 text-base text-pure-white outline-none placeholder:text-neutral-sub-text"
          ></textarea>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex h-9 items-center justify-between">
          <div className="flex gap-1">
            <Button variant={ButtonVariants.PRIMARY}>
              <Paperclip
                height={16}
                width={16}
                className="text-neutral-light"
              />
            </Button>
            <Button
              variant={ButtonVariants.PRIMARY}
              className={twclsx("transition-all duration-200", {
                "border-neutral-light bg-neutral-light/20 hover:border-neutral-light hover:bg-neutral-light/20":
                  activeMode === "instrumental",
              })}
              onClick={() => handleModeToggle("instrumental")}
            >
              <AudioLines
                height={16}
                width={16}
                className="text-neutral-light"
              />
              Instrumental
            </Button>
            <Button
              variant={ButtonVariants.PRIMARY}
              className={twclsx("transition-all duration-200", {
                "border-neutral-light bg-neutral-light/20 hover:border-neutral-light hover:bg-neutral-light/20":
                  activeMode === "lyrics",
              })}
              onClick={() => handleModeToggle("lyrics")}
            >
              <Plus height={16} width={16} className="text-neutral-light" />
              Lyrics
            </Button>
          </div>
          <div className="flex gap-1">
            <ToolsDropdown />
            <Button
              className="h-9 w-9 bg-neutral-light px-0 py-0"
              variant={ButtonVariants.PRIMARY}
              disabled
            >
              <ArrowRight
                height={20}
                width={20}
                className="text-neutral-black"
              />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
