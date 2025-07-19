import { SongMode } from "@/hooks/useSongGeneration";
import { Textarea } from "../common/input/textarea";
import { FORM_PLACEHOLDERS } from "@/constants";
import { ChangeEvent, FC } from "react";

interface DefaultSongFormProps {
  prompt: string;
  lyrics: string;
  activeMode: SongMode;
  onPromptChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onLyricsChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const DefaultSongForm: FC<DefaultSongFormProps> = ({
  prompt,
  lyrics,
  activeMode,
  onPromptChange,
  onLyricsChange,
}) => {
  return (
    <div className="flex flex-col px-5 pt-5">
      <div>
        <Textarea
          name="description"
          id="description"
          placeholder={FORM_PLACEHOLDERS.SONG_DESCRIPTION}
          value={prompt}
          onChange={onPromptChange}
          autoResize={true}
          minHeight={64}
          maxHeight={120}
          className="p-0"
        />
      </div>

      {activeMode === "lyrics" && (
        <div className="animate-in fade-in-0 slide-in-from-top-2 duration-300">
          <div className="border-t border-neutral-hover pt-4">
            <Textarea
              name="lyrics"
              id="lyrics"
              placeholder={FORM_PLACEHOLDERS.LYRICS}
              value={lyrics}
              onChange={onLyricsChange}
              autoResize={true}
              minHeight={64}
              maxHeight={120}
              className="p-0"
            />
          </div>
        </div>
      )}
    </div>
  );
};
