"use client";

import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      className="
        z-50
        rounded-lg border px-4 py-2
        bg-[rgb(var(--card))]
        border-[rgb(var(--border))]
        hover:bg-[rgb(var(--muted))]
        transition
      "
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};