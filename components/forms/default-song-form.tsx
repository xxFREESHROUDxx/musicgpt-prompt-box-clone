import { SongMode } from "@/hooks/useSongGeneration";
import { Textarea } from "../common/input/textarea";
import { FileAttachment } from "../common/file-attachment";
import { FORM_PLACEHOLDERS } from "@/constants";
import { ChangeEvent, FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface DefaultSongFormProps {
  prompt: string;
  lyrics: string;
  activeMode: SongMode;
  selectedFile?: File | null;
  onPromptChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onLyricsChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onFileRemove?: () => void;
}

export const DefaultSongForm: FC<DefaultSongFormProps> = ({
  prompt,
  lyrics,
  activeMode,
  selectedFile,
  onPromptChange,
  onLyricsChange,
  onFileRemove,
}) => {
  return (
    <div className="relative flex flex-col px-5 pt-5">
      <AnimatePresence mode="wait">
        {selectedFile && onFileRemove && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="mb-4 w-fit"
          >
            <FileAttachment file={selectedFile} onRemove={onFileRemove} />
          </motion.div>
        )}
      </AnimatePresence>

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
          className="!px-0 pt-0"
        />
      </div>

      <AnimatePresence mode="wait">
        {activeMode === "lyrics" && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -10,
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
              height: {
                duration: 0.3,
              },
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="border-t border-neutral-hover pt-4"
            >
              <Textarea
                name="lyrics"
                id="lyrics"
                placeholder={FORM_PLACEHOLDERS.LYRICS}
                value={lyrics}
                onChange={onLyricsChange}
                autoResize={true}
                minHeight={64}
                maxHeight={120}
                className="!px-0 pt-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
