import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  src: string;
  alt: string;
  onClose: () => void;
};

export function Lightbox({ src, alt, onClose }: Props) {
  const overlay = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      overlay.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.25 },
    ).fromTo(
      img.current,
      { scale: 0.88, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.35, ease: "power3.out" },
      "-=0.1",
    );

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function handleClose() {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(img.current, {
      scale: 0.88,
      autoAlpha: 0,
      duration: 0.25,
      ease: "power3.in",
    }).to(overlay.current, { autoAlpha: 0, duration: 0.2 }, "-=0.1");
  }

  return (
    <div
      ref={overlay}
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      style={{ visibility: "hidden" }}
    >
      <img
        ref={img}
        src={src}
        alt={alt}
        style={{
          width: "calc(100vw - 40px)",
          height: "calc(100svh - 40px)",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
