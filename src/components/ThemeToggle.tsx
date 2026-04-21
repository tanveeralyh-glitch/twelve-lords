import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-10 w-10 rounded-full border border-border bg-secondary/60 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:scale-110 hover:border-accent hover:shadow-accent-glow group overflow-hidden"
    >
      <Sun
        className={`absolute h-5 w-5 text-accent transition-all duration-500 ${
          mounted && !isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 text-accent transition-all duration-500 ${
          mounted && isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
};
