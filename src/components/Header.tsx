import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Acasă", href: "#home" },
    { label: "Meniu", href: "#meniu" },
    { label: "Povestea", href: "#povestea" },
    { label: "Locație", href: "#locatie" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background shadow-sm" : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 py-3 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <img src={logo} alt="The Bagel Bar" className="h-9 w-9 rounded-lg" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            The Bagel Bar
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-colors pb-0.5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://instagram.com/thebagelbarbucharest"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-colors pb-0.5"
          >
            Instagram
          </a>
          <a
            href="tel:+40700000000"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            <Phone className="h-3.5 w-3.5" />
            Sună acum
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-5 pb-6 pt-2 animate-fade-in">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+40700000000"
            className="mt-3 w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
          >
            <Phone className="h-3.5 w-3.5" />
            Sună acum
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
