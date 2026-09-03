type Props = {
  tech: string[];
};

export function TechBadges({ tech }: Props) {
  return (
    <ul className="flex flex-wrap gap-2 mt-2">
      {tech.map((item) => (
        <li
          key={item}
          className="font-general text-sm border rounded-full px-3 py-1"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

