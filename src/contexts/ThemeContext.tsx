import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// im lazy brah
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [hasUserPreference, setHasUserPreference] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" || saved === "light";
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const next = prevTheme === "light" ? "dark" : "light";
      try {
        localStorage.setItem("theme", next);
        setHasUserPreference(true);
      } catch {
        // nothing
      }
      return next;
    });
  };

  useEffect(() => {
    if (hasUserPreference) return;

    if (typeof window === "undefined" || !window.matchMedia) return;

    type MQ = MediaQueryList & {
      addListener?: (l: (e: MediaQueryListEvent) => void) => void;
      removeListener?: (l: (e: MediaQueryListEvent) => void) => void;
    };

    const mq = window.matchMedia("(prefers-color-scheme: dark)") as MQ;
    const handler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handler);
    } else if (typeof mq.addListener === "function") {
      mq.addListener(handler);
    }

    return () => {
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", handler);
      } else if (typeof mq.removeListener === "function") {
        mq.removeListener(handler);
      }
    };
  }, [hasUserPreference]);

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
