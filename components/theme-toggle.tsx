"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={(event) => {
        toggleTheme({ x: event.clientX, y: event.clientY });
      }}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground hover:text-foreground"
    >
      <span className="relative grid place-items-center">
        <Sun
          size={16}
          strokeWidth={1.75}
          className={`absolute transition-all duration-300 ease-out ${
            theme === "dark"
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          size={16}
          strokeWidth={1.75}
          className={`absolute transition-all duration-300 ease-out ${
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-100"
          }`}
        />
      </span>
    </button>
  );
}