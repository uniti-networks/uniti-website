import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoUniti from "@/assets/uniti-masterbrand-tricolor.svg";
import { INVESTOR_DECK_URL } from "@/lib/links";

const navLinks = [
  { label: "Team", path: "/team" },
  { label: "Careers", path: "/careers" },
  { label: "Licensing", path: "/licensing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 px-6 lg:px-20">
        <Link to="/" className="flex items-center h-16">
          <img src={logoUniti} alt="Uniti" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-colors hover:text-accent ${
                location.pathname === link.path ? "text-accent" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INVESTOR_DECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-paris px-5 py-2 text-base font-medium text-primary-foreground transition-colors hover:bg-brand-blush"
          >
            Investors
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block py-3 text-base font-medium transition-colors hover:text-accent ${
                location.pathname === link.path ? "text-accent" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INVESTOR_DECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-base font-semibold text-accent"
          >
            Investors
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
