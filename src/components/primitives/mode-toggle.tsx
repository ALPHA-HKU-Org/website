"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return <div className="h-8 w-14" />;
  }

  const isDarkMode = (theme === "system" && resolvedTheme === "dark") || theme === "dark";

  return (
    <div
      onClick={toggleTheme}
      className={cn(
        "relative flex h-8 w-14 cursor-pointer items-center rounded-full p-1 transition-colors",
        {
          "bg-primary": isDarkMode,
          "bg-muted": !isDarkMode,
        }
      )}
    >
      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full bg-background transition-transform duration-300",
          {
            "translate-x-6": isDarkMode,
          }
        )}
      >
        {isDarkMode ? (
          <Moon
            size={14}
            className="text-primary"
          />
        ) : (
          <Sun
            size={14}
            className="text-primary"
          />
        )}
      </div>
    </div>
  );
}
