import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Twitter, Github, Instagram, Linkedin, Send } from "lucide-react";

const social = [
  { icon: Twitter, href: "#" },
  { icon: Github, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Articles", href: "/#articles" },
      { name: "Books", href: "/#knowledge" },
      { name: "Tech", href: "/tech" },
      { name: "Editor", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Guides", href: "#" },
      { name: "Community", href: "#" },
      { name: "Status", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer id="footer" className="relative bg-footer text-footer-foreground pt-20 pb-10 mt-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 text-sm text-footer-foreground/70 max-w-sm leading-relaxed">
              A modern publishing platform for thinkers, writers and creators. Beautiful by design, fast by default.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 max-w-md backdrop-blur-md"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:scale-105 transition-transform"
              >
                Subscribe <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase">{col.title}</h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-footer-foreground/70 hover:text-accent transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-footer-foreground/60">
            © {new Date().getFullYear()} Inkwell. Crafted for storytellers.
          </p>
          <div className="flex items-center gap-2">
            {social.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-footer-foreground/80 hover:text-accent-foreground hover:bg-accent hover:border-accent hover:-translate-y-1 transition-all duration-300"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
