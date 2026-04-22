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
        scrolled ? "py-0" : "py-0.5"
      }`}
    >
      <div className="container-tight">
        <nav
          className={`relative rounded-xl px-4 md:px-5 py-1 transition-all duration-500 backdrop-blur-xl ${
            scrolled
              ? "bg-black/95 shadow-glass border border-white/10"
              : "bg-black/80 border border-white/5"
          }`}
        >
          {/* Top row: logo on the left, actions on the right */}
          <div className="flex items-center justify-between">
            <Logo />

            <div className="flex items-center gap-2 md:gap-3">
              <Link
                to="/#articles"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300"
              >
                Explore
              </Link>
              <ThemeToggle />
              <button
                className="lg:hidden h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-white"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Bottom row: nav links below logo */}
          <ul className="hidden lg:flex items-center justify-center gap-1 mt-0.5 pt-0.5 border-t border-white/10">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  onClick={() => {
                    if (window.location.pathname === l.href) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="relative px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-white/80 hover:text-accent transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
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
