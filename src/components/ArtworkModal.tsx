import React, { useEffect, useRef } from "react";
import Modal from "./Modal/Modal";
import { gsap } from "gsap";

interface ArtworkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const artworks = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Cosmic Artwork ${i + 1}`,
  description: `A beautiful piece exploring the mysteries of space ${i + 1}`,
  url: `https://picsum.photos/800/600?random=${i + 1}`,
}));

const ArtworkModal: React.FC<ArtworkModalProps> = ({ isOpen, onClose }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isOpen && carouselRef.current) {
      const items = itemsRef.current.filter(Boolean) as HTMLDivElement[];
      const totalWidth = items.reduce(
        (acc, item) => acc + item.offsetWidth + 24,
        0
      );
      const duration = totalWidth / 40;

      gsap.to(items, {
        x: `-=${totalWidth}`,
        duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });

      return () => {
        gsap.killTweensOf(items);
      };
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Artwork Gallery">
      <div className="overflow-hidden py-12">
        <div
          ref={carouselRef}
          className="flex gap-6"
          style={{ willChange: "transform" }}
        >
          {[...artworks, ...artworks].map((artwork, index) => (
            <div
              key={`${artwork.id}-${index}`}
              ref={(el) => (itemsRef.current[index] = el)}
              className="flex-none w-80 relative group cursor-pointer"
              style={{ willChange: "transform" }}
            >
              <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <img
                  src={artwork.url}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
                <div className="artwork-caption absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {artwork.title}
                  </h3>
                  <p className="text-white/80 text-sm">{artwork.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ArtworkModal;
