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
    <header className="flex items-center justify-between p-6 bg-cream flex-nowrap">
      {!isHome && (
        <Link
          to="/"
          className="text-xs md:text-sm font-bold font-cabinet text-coral shrink-0"
        >
          Kaja Johanne Myrmel
        </Link>
      )}

      <ul
        className={`flex gap-2 md:gap-6 ${isHome ? "w-full justify-between md:w-auto md:justify-start md:ml-auto" : "ml-auto"}`}
      >
        {navLinks.map((link) => (
          <li key={link.anchor}>
            <a
              className="text-xs md:text-sm font-bold font-general text-coral border border-transparent rounded-full px-3 py-1 transition hover:border-coral"
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
