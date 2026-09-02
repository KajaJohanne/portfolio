import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { anchor: "hjem", label: "Hjem" },
  { anchor: "om-meg", label: "Om meg" },
  { anchor: "prosjekter", label: "Prosjekter" },
];

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="flex items-center p-6">
      {!isHome && (
        <Link to="/" className="text-sm font-bold">
          Kaja Johanne Myrmel
        </Link>
      )}

      <ul className="flex gap-6 ml-auto">
        {navLinks.map((link) => (
          <li key={link.anchor}>
            <a
              className="text-sm"
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
