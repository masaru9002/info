import React, { forwardRef } from "react";

interface NavItemProps {
  text: string;
  href?: string;
  isMobile?: boolean;
  onClick?: () => void;
}

const NavItem = forwardRef<HTMLButtonElement | HTMLAnchorElement, NavItemProps>(
  ({ text, href, isMobile, onClick }, ref) => {
    const className = `
      text-white/90 hover:text-cyan-300/90 transition-colors duration-300
      font-bold tracking-wide
      ${
        isMobile
          ? "text-2xl py-4 px-6"
          : "text-base sm:text-lg md:text-xl lg:text-xl px-3 py-2"
      }
      font-['Space_Grotesk'] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
    `;

    if (onClick) {
      return (
        <button
          ref={ref as React.RefObject<HTMLButtonElement>}
          onClick={onClick}
          className={className}
        >
          {text}
        </button>
      );
    }

    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={className}
      >
        {text}
      </a>
    );
  }
);

NavItem.displayName = "NavItem";

export default NavItem;
