import { useEffect, useState } from "react";
import { Icon } from "../UI";

const storageKey = "boghdaddy-os-theme";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }
  return window.localStorage.getItem(storageKey) || "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      className="focus-ring inline-flex items-center gap-xs border border-outline-variant bg-surface-container px-xs py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-on-surface transition hover:border-primary/40 hover:text-primary"
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      <Icon name={theme === "dark" ? "dark_mode" : "light_mode"} className="text-[16px]" />
      <span className="hidden sm:inline">{theme === "dark" ? "Dark Ops" : "Light Ops"}</span>
    </button>
  );
}

