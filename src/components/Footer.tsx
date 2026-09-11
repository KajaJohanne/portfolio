import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { useState } from "react";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("kajajohanne@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="mx-auto flex flex-col gap-4 bg-blue/40 p-6 items-center sm:flex-row justify-between">
      <div className="flex-1">
        <p className="font-cabinet">Kaja Johanne Myrmel</p>

        <div className="group relative mt-2 inline-block">
          <button
            onClick={copyEmail}
            className="font-general text-sm text-ink-muted hover:text-coral transition-colors"
            aria-label="Kopier e-postadresse"
          >
            kajajohanne@gmail.com
          </button>
          <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-ink px-2 py-1 text-xs text-cream opacity-0 transition-opacity group-hover:opacity-100">
            {copied ? "Kopiert!" : "Kopier"}
          </span>
        </div>
      </div>

      <div className="flex-1 flex justify-center gap-4">
        <a
          href="https://github.com/KajaJohanne"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="text-2xl text-ink hover:text-coral transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/kaja-myrmel/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-2xl text-ink hover:text-coral transition" />
        </a>
      </div>

      <div className="flex-1 flex justify-end">
        <a href="#hjem" aria-label="Til toppen">
          <FaArrowUp className="text-xl text-ink hover:text-coral transition-colors" />
        </a>
      </div>
    </div>
  );
}
