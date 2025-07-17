import { SongMode } from "@/hooks/useSongGeneration";
import { Textarea } from "../common/textarea";
import { twclsx } from "@/utils/twclsx";

interface DefaultSongFormProps {
  prompt: string;
  lyrics: string;
  activeMode: SongMode;
  onPromptChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onLyricsChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const DefaultSongForm: React.FC<DefaultSongFormProps> = ({
  prompt,
  lyrics,
  activeMode,
  onPromptChange,
  onLyricsChange,
}) => {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="min-h-0 flex-1">
        <Textarea
          name="description"
          id="description"
          placeholder="Describe your song"
          value={prompt}
          onChange={onPromptChange}
          className="h-full"
        />
      </div>

      {/* Conditional Lyrics Textarea */}
      {activeMode === "lyrics" && (
        <div className="border-t border-neutral-hover px-5 py-3">
          <Textarea
            name="lyrics"
            id="lyrics"
            placeholder="Enter your lyrics here"
            value={lyrics}
            onChange={onLyricsChange}
            className="min-h-14 pl-0 pt-0"
          />
        </div>
      )}
    </div>
  );
};
