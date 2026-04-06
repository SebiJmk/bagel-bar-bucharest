import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Meniu", href: "#meniu" },
    { label: "Povestea", href: "#povestea" },
    { label: "Locație", href: "#locatie" },
    { label: "Instagram", href: "https://instagram.com/thebagelbarbucharest", external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_hsl(var(--border))]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          The Bagel Bar
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="nav-link text-sm font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors pb-0.5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+40700000000"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary text-primary text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
          >
            <Phone className="h-4 w-4" />
            Sună acum
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border px-6 pb-8 pt-4 animate-fade-in">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="block py-3.5 text-base font-medium text-foreground/70 hover:text-foreground transition-colors border-b border-border/40 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+40700000000"
            className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border-2 border-primary text-primary text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            Sună acum
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
