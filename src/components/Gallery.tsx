import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Masonry from "react-masonry-css";
import { getLenisInstance } from "../lenisInstance";
import "../styles/gallery.css";

type Artwork = {
  id: string;
  url: string;
  title: string;
};

export const Gallery: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    async function fetchArtworks() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://portfolio-api-three-rose.vercel.app/api/artworks"
        );
        const text = await res.text();
        const data = JSON.parse(text);
        setArtworks(data);
      } catch (err) {
        console.error("Failed to load artworks", err);
        setLoading(false);
      }
    }
    fetchArtworks();
  }, []);

  const imagesLoaded = useRef(0);
  useEffect(() => {
    if (artworks.length > 0) {
      imagesLoaded.current = 0;
      setLoading(true);
    }
  }, [artworks]);

  function handleImageLoad() {
    imagesLoaded.current += 1;
    if (imagesLoaded.current === artworks.length) {
      const lenis = getLenisInstance();
      if (lenis && typeof lenis.resize === "function") {
        lenis.resize();
      }
      setLoading(false);
    }
  }

  function handleImageError() {
    handleImageLoad();
  }

  useEffect(() => {
    if (!loading) return;
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 15000);
    return () => clearTimeout(timeout);
  }, [loading]);

  useEffect(() => {
    if (!loading && artworks.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }
  }, [loading, artworks]);

  // Masonry breakpoints
  const breakpointColumns = {
    default: 4,
    1100: 3,
    900: 2,
    768: 2,
    480: 1,
  };

  useEffect(() => {
    if (artworks.length > 0) {
      const isMobile = window.innerWidth <= 768;
      if (isMobile && "IntersectionObserver" in window) {
        const images = document.querySelectorAll(".card img");
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.loading = "eager";
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach((img) => imageObserver.observe(img));

        return () => {
          images.forEach((img) => imageObserver.unobserve(img));
        };
      }
    }
  }, [artworks]);

  return (
    <section
      id="gallery"
      className="gallery wrap"
      aria-labelledby="gallery-heading"
    >
      <div className="gallery__head">
        <h2 id="gallery-heading" className="gallery__title">
          My Works
        </h2>
        <div className="gallery__meta">{`2024-${new Date().getFullYear()} (MOST RECENT) / COMMISSIONS + PERSONAL`}</div>
      </div>

      {loading ? (
        <div className="gallery-loader-wrap">
          <div className="loader" />
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumns}
          className="masonry"
          columnClassName="masonry-col"
        >
          {artworks.map((art, i) => (
            <figure
              key={art.id}
              className="card"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <img
                src={art.url}
                alt={art.id}
                loading="lazy"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              <figcaption>{art.title.split("/").pop()}</figcaption>
            </figure>
          ))}
        </Masonry>
      )}
    </section>
  );
};
