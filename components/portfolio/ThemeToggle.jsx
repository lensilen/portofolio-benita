import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={onToggle}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}
