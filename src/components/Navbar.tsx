import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoUniti from "@/assets/logo-uniti.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Team", path: "/team" },
  { label: "Careers", path: "/careers" },
  { label: "Learn with Uniti", path: "/learn" },
  { label: "Licensing", path: "/licensing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border overflow-hidden">
      <div className="container-wide flex items-center justify-between h-16 px-6 lg:px-20">
        <Link to="/" className="flex items-center h-full">
          <img src={logoUniti} alt="Uniti" className="h-14 w-auto object-contain" />
        </Link>
        

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.path ? "text-accent" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
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
              className={`block py-3 text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.path ? "text-accent" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
