import { SongMode } from "@/hooks/useSongGeneration";
import { Textarea } from "../common/textarea";

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
    <>
      <div className="h-full">
        <Textarea
          name="description"
          id="description"
          placeholder="Describe your song"
          value={prompt}
          onChange={onPromptChange}
        />
      </div>

      {/* Conditional Lyrics Textarea */}
      {activeMode === "lyrics" && (
        <div className="px-5 pb-3">
          <Textarea
            name="lyrics"
            id="lyrics"
            placeholder="Enter your lyrics (optional)"
            value={lyrics}
            onChange={onLyricsChange}
            className="border-neutral-hover block w-full border-t px-0 py-2 text-body-base"
          />
        </div>
      )}
    </>
  );
};
