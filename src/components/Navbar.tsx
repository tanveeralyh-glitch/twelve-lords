import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/#articles" },
  { label: "Books", href: "/#book-section" },
  { label: "Tech", href: "/tech" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-0.5" : "py-1"
      }`}
    >
      <div className="container-tight">
        <nav
          className={`relative rounded-2xl px-4 md:px-6 py-1 transition-all duration-500 backdrop-blur-xl ${
            scrolled
              ? "glass shadow-glass border border-white/10"
              : "bg-background/20 border border-white/5"
          }`}
        >
          {/* Top row: logo centered, actions on the right */}
          <div className="relative flex items-center justify-center">
            <Logo />

            <div className="absolute right-0 flex items-center gap-2 md:gap-3">
              <motion.div
                className="rounded-full"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: ["0 0 20px rgba(239,80,80,0.3)", "0 0 35px rgba(239,80,80,0.6)", "0 0 20px rgba(239,80,80,0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Link
                  to="/#articles"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold shadow-accent-glow hover:scale-105 hover:bg-accent/90 transition-all duration-300"
                >
                  Explore <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <ThemeToggle />
              <button
                className="lg:hidden h-10 w-10 rounded-full border border-border flex items-center justify-center"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Bottom row: nav links below logo */}
          <ul className="hidden lg:flex items-center justify-center gap-2 mt-1.5 pt-1.5 border-t border-white/10">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  onClick={() => {
                    if (window.location.pathname === l.href) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="relative px-4 py-1.5 text-sm font-medium uppercase tracking-wide text-foreground/80 hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-wide hover:bg-secondary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
