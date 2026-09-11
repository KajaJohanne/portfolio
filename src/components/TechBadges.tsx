type Props = {
  tech: string[];
};

export function TechBadges({ tech }: Props) {
  return (
    <div>
      <ul className="flex flex-wrap gap-2 py-4 mt-4">
        {tech.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="font-general text-sm text-ink border border-coral bg-coral/5 rounded-full px-3 py-1 whitespace-nowrap"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
