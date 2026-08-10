"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/shared/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`theme-toggle ${theme === "light" ? "is-light" : ""}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle__icon">
        <span
          className={`theme-icon theme-icon--sun ${
            theme === "light" ? "is-visible" : ""
          }`}
        >
          <Sun size={18} strokeWidth={1.8} />
        </span>

        <span
          className={`theme-icon theme-icon--moon ${
            theme === "dark" ? "is-visible" : ""
          }`}
        >
          <Moon size={18} strokeWidth={1.8} />
        </span>
      </span>
    </button>
  );
}