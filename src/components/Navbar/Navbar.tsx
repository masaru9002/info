import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS } from "./navData";
import AboutModal from "../AboutModal";
import CodingModal from "../CodingModal";
import ArtworkModal from "../ArtworkModal";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isCodingModalOpen, setIsCodingModalOpen] = useState(false);
  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | HTMLAnchorElement | null)[]>([]);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (navRef.current && menuButtonRef.current) {
      gsap.set([navRef.current, menuButtonRef.current], {});

      gsap.set(menuButtonRef.current, {
        y: -50,
        opacity: 0,
      });

      itemsRef.current.forEach((item) => {
        if (item) {
          gsap.set(item, {
            y: -50,
            opacity: 0,
          });
        }
      });

      const tl = gsap.timeline({ delay: 2.5 });

      tl.to(navRef.current, {
        duration: 1,
        ease: "power3.out",
      });

      tl.to(menuButtonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });

      itemsRef.current.forEach((item) => {
        if (item) {
          tl.to(
            item,
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
            },
            `-=0.4`
          );
        }
      });
    }
  }, []);

  const handleNavItemClick = (text: string) => {
    switch (text) {
      case "About":
        setIsAboutModalOpen(true);
        break;
      case "Coding":
        setIsCodingModalOpen(true);
        break;
      case "Artwork":
        setIsArtworkModalOpen(true);
        break;
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between md:justify-end">
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white/90 hover:text-white md:hidden"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              {NAV_ITEMS.map((item, index) => (
                <NavItem
                  key={item.text}
                  ref={(el) => (itemsRef.current[index] = el)}
                  text={item.text}
                  onClick={() => handleNavItemClick(item.text)}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onItemClick={handleNavItemClick}
      />
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
      <CodingModal
        isOpen={isCodingModalOpen}
        onClose={() => setIsCodingModalOpen(false)}
      />
      <ArtworkModal
        isOpen={isArtworkModalOpen}
        onClose={() => setIsArtworkModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
