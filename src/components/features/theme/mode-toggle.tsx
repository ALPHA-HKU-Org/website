"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return <div className="w-14 h-8" />;
  }

  const isDarkMode = (theme === "system" && resolvedTheme === "dark") || theme === "dark";

  return (
    <div
      onClick={toggleTheme}
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors relative
      ${isDarkMode ? "bg-primary" : "bg-muted"}`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="w-6 h-6 rounded-full bg-background flex items-center justify-center"
        style={{
          position: "absolute",
          left: isDarkMode ? "auto" : "2px",
          right: isDarkMode ? "2px" : "auto",
        }}
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
      </motion.div>
    </div>
  );
}
