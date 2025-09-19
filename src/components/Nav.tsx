import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { getLenisInstance } from "../lenisInstance";
import { useTheme } from "../contexts/ThemeContext";

export const Nav: React.FC = () => {
  const [active, setActive] = useState<string>("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = () => {
      const sections = ["gallery", "commissions"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (
          rect.top < window.innerHeight * 0.5 &&
          rect.bottom > window.innerHeight * 0.25
        ) {
          current = id;
          break;
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    offsetOverride?: number
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    const lenis = getLenisInstance();
    const offset = typeof offsetOverride === "number" ? offsetOverride : -60;
    if (target && lenis) {
      lenis.scrollTo(target, { offset });
    } else if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="site-nav">
      <div className="site-nav__inner wrap">
        <a
          href="#"
          className="logo"
          aria-label="Home"
          onClick={(e) => handleNavClick(e, "top")}
        >
          <span>Sillycat</span>
          <span className="logo__badge">4725</span>
        </a>
        <div className="nav-links" role="list">
          <a
            href="#"
            className={active === "gallery" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "gallery", 30)}
          >
            Work
          </a>
          <a
            href="#"
            className={active === "commissions" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "commissions", 30)}
          >
            Commission
          </a>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
            aria-pressed={theme === "dark"}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <span className="theme-toggle__label">
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
