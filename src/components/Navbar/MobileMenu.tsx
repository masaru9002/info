import React from "react";
import NavItem from "./NavItem";
import { NAV_ITEMS } from "./navData";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onItemClick: (text: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onItemClick,
}) => {
  return (
    <div
      className={`
        fixed inset-0 z-50 bg-black/95 backdrop-blur-lg
        transform transition-transform duration-300 ease-in-out
        flex flex-col items-center justify-center
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/90 hover:text-white"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.text}
            text={item.text}
            onClick={() => onItemClick(item.text)}
            isMobile={true}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
