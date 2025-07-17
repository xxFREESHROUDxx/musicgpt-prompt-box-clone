import { Plus, AudioLines, Paperclip, ArrowRight } from "lucide-react";
import { ButtonVariants } from "./common/button";
import Button from "./common/button/button";
import { ToolsDropdown } from "./common/tools-dropdown";
import { FC } from "react";

const SearchBox: FC = () => {
  return (
    <div className="relative h-full w-full rounded-[27px] bg-neutral-base transition duration-200">
      <form className="overflow-hidden pb-14">
        <div>
          <textarea
            name="description"
            id="description"
            placeholder="Describe your song"
            className="font- text-body-big-medium block h-16 w-full resize-none bg-transparent px-5 py-5 text-base text-pure-white outline-none placeholder:text-neutral-sub-text"
          ></textarea>
        </div>
        <div className="absolute bottom-4 left-4 right-3 flex h-9 items-center justify-between">
          <div className="flex gap-1">
            <Button variant={ButtonVariants.PRIMARY}>
              <Paperclip
                height={16}
                width={16}
                className="text-neutral-light"
              />
            </Button>
            <Button variant={ButtonVariants.PRIMARY}>
              <AudioLines
                height={16}
                width={16}
                className="text-neutral-light"
              />
              Instrumental
            </Button>
            <Button variant={ButtonVariants.PRIMARY}>
              <Plus height={16} width={16} className="text-neutral-light" />
              Lyrics
            </Button>
          </div>
          <div className="flex gap-1">
            <ToolsDropdown />
            <Button
              className="h-9 w-9 px-0 py-0 text-neutral-light disabled:bg-neutral-base disabled:text-neutral-black"
              variant={ButtonVariants.PRIMARY}
              disabled
            >
              <ArrowRight height={20} width={20} />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
