import { useState } from "react";

type Step = {
  image: string;
  caption: string;
};

type Props = {
  steps: Step[];
};

export function StepCarousel({ steps }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const step = steps[currentIndex];

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === steps.length - 1;

  function goToPrevious() {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  function goToNext() {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, steps.length - 1));
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
      <div className="md:w-1/3">
        <p className="font-general">{step.caption}</p>
        <p className="font-general text-xs mt-4 text-neutral-400">
          {currentIndex + 1} / {steps.length}
        </p>
      </div>

      <div className="w-full md:w-2/3 rounded-lg bg-neutral-100 p-6 shadow-lg">
        <img
          src={step.image}
          alt={step.caption}
          className="w-full aspect-[18/10] rounded-lg object-cover"
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={goToPrevious}
            disabled={isFirst}
            aria-label="Forrige steg"
            className="h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-60 transition hover:opacity-100 diabled:opacity-20 disabled:hover:opacity-20"
          >
            ←
          </button>
          <button
            onClick={goToNext}
            disabled={isLast}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-60 transition hover:opacity-100 diabled:opacity-20 disabled:hover:opacity-20"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
