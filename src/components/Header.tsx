import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { anchor: "hjem", label: "Hjem" },
  { anchor: "prosjekter", label: "Prosjekter" },
  { anchor: "om-meg", label: "Om meg" },
];

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="flex items-center p-6 bg-cream">
      {!isHome && (
        <Link to="/" className="text-sm font-bold font-cabinet text-coral">
          Kaja Johanne Myrmel
        </Link>
      )}

      <ul className="flex gap-6 ml-auto">
        {navLinks.map((link) => (
          <li key={link.anchor}>
            <a
              className="text-sm font-bold font-general text-coral border border-transparent rounded-full px-3 py-1 transition hover:border-coral"
              href={isHome ? `#${link.anchor}` : `/#${link.anchor}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
