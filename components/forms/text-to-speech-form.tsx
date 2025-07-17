import { Textarea } from "../common/textarea";

interface TextToSpeechFormProps {
  prompt: string;
  onPromptChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextToSpeechForm: React.FC<TextToSpeechFormProps> = ({
  prompt,
  onPromptChange,
}) => {
  const voices = [
    "TikTok Mal",
    "David Atte",
    "Theo Von",
    "News Rep",
    "Document",
    "TikTok Fe",
    "Voice 7",
    "Voice 8",
  ];

  return (
    <div className="flex h-full w-full flex-col justify-between gap-[20px] p-[20px] sm:flex-row">
      {/* Left Section - Voice Selection */}
      <div className="flex w-1/2 flex-col gap-4">
        {/* Search and Filter */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search voices"
              className="bg-neutral-hover w-full rounded-lg px-4 py-2 text-pure-white placeholder:text-neutral-sub-text"
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
          <select className="bg-neutral-hover rounded-lg px-4 py-2 text-pure-white">
            <option>All languages</option>
          </select>
        </div>

        {/* Voice Grid */}
        <div className="grid grid-cols-4 gap-4">
          {voices.map((voice, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="bg-neutral-hover h-12 w-12 rounded-full"></div>
              <span className="text-body-small text-neutral-sub-text">
                {voice}...
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Text Input */}
      <div className="flex w-1/2 flex-col gap-4">
        {/* Default Voice */}
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
          <span className="text-body-base text-pure-white">Default Voice</span>
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
