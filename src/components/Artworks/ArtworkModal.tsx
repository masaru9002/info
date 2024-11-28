import React, { useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import { gsap } from "gsap";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { artworks } from "./Artworks";

interface ArtworkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AUTOPLAY_DELAY = 3000;

const ArtworkModal: React.FC<ArtworkModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen && isPlaying) {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [isOpen, isPlaying, currentIndex]);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setTimeout(() => {
      if (!isAnimating) {
        goToSlide(currentIndex + 1);
      }
    }, AUTOPLAY_DELAY);
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const newIndex = (index + artworks.length) % artworks.length;
    const direction = index > currentIndex ? -1 : 1;

    if (slideRef.current) {
      const currentSlide = slideRef.current.children[
        currentIndex
      ] as HTMLElement;
      const nextSlide = slideRef.current.children[newIndex] as HTMLElement;

      gsap.set(nextSlide, { x: `${-direction * 100}%`, opacity: 0 });

      gsap
        .timeline({
          onComplete: () => {
            setCurrentIndex(newIndex);
            setIsAnimating(false);
          },
        })
        .to(currentSlide, {
          x: `${direction * 100}%`,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          nextSlide,
          {
            x: "0%",
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "-=0.5"
        );
    }
  };

  const nextSlide = () => {
    stopAutoplay();
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    stopAutoplay();
    goToSlide(currentIndex - 1);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="🎨 Artwork Gallery o(≧▽≦)o">
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="relative overflow-hidden rounded-xl">
          <div
            ref={slideRef}
            className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh]"
          >
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className={`absolute inset-0 w-full h-full flex items-center justify-center ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <a
                  href={artwork.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center group cursor-pointer"
                  onClick={(e) => {
                    if (isMobile) {
                      e.preventDefault();
                    }
                  }}
                >
                  <img
                    src={artwork.url}
                    alt={artwork.title}
                    className="w-full h-full object-contain"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent 
                      ${
                        isMobile
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      } 
                      transition-opacity duration-300`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white
                      ${
                        isMobile
                          ? "translate-y-0"
                          : "transform translate-y-full group-hover:translate-y-0"
                      } 
                      transition-transform duration-300`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold">
                        {artwork.title}
                      </h3>
                      {!isMobile && (
                        <FaExternalLinkAlt className="text-white/70 group-hover:text-white transition-colors duration-300" />
                      )}
                    </div>
                    <p className="text-white/90 text-sm sm:text-base line-clamp-2 sm:line-clamp-none">
                      {artwork.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white/90 hover:bg-white/20 hover:text-white transition-all duration-200 z-20"
          disabled={isAnimating}
        >
          <FaChevronLeft className="text-lg sm:text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white/90 hover:bg-white/20 hover:text-white transition-all duration-200 z-20"
          disabled={isAnimating}
        >
          <FaChevronRight className="text-lg sm:text-xl" />
        </button>

        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="flex justify-center gap-2">
            {artworks.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  stopAutoplay();
                  goToSlide(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                disabled={isAnimating}
              />
            ))}
          </div>
          <button
            onClick={togglePlayPause}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white/90 hover:bg-white/20 hover:text-white transition-all duration-200"
          >
            {isPlaying ? (
              <FaPause className="text-sm" />
            ) : (
              <FaPlay className="text-sm" />
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ArtworkModal;
