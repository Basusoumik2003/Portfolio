import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with same dimensions to avoid layout shift
    return (
      <div className="w-10 h-10 rounded-lg border border-border/50 bg-background/50" />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg border border-border/50 bg-background/50 hover:bg-muted transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun
          size={18}
          className="text-foreground transition-transform duration-300 group-hover:rotate-12"
        />
      ) : (
        <Moon
          size={18}
          className="text-foreground transition-transform duration-300 group-hover:-rotate-12"
        />
      )}
    </button>
  );
}
