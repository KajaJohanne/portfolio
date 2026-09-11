type Props = {
  image: string;
  caption: string;
  index?: number;
};

export function ScreenshotBlock({ image, caption, index }: Props) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
      <div className="md:w-1/3">
        {index !== undefined && (
          <p className="font-cabinet text-sm text-coral mb-2">
            {String(index + 1).padStart(2, "0")}
          </p>
        )}
        <p className="font-general text-ink-muted leading-relaxed">{caption}</p>
      </div>

      <img src={image} alt={caption} className="w-full md:w-2/3 shadow-lg rounded-2xl" />
    </div>
  );
}
