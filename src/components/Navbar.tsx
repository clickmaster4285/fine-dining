import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "glass-panel py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#hero" className="font-luxury text-2xl font-bold text-gold">
            Luxe<span className="text-foreground">POS</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="gold-gradient inline-flex h-9 items-center justify-center rounded-lg px-5 text-sm font-semibold text-primary-foreground transition-all duration-500 hover:opacity-90"
            >
              Request Demo
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="glass-panel fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-luxury text-2xl text-foreground transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="gold-gradient mt-4 inline-flex h-11 items-center rounded-lg px-8 text-sm font-semibold text-primary-foreground"
          >
            Request Demo
          </a>
        </div>
      )}
    </>
  );
}
