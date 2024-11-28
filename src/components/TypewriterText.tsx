import Typewriter from "typewriter-effect";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TypewriterText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      gsap.set(textRef.current, { opacity: 0, y: 30 });

      const tl = gsap.timeline({ delay: 2.5 });

      tl.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div
        ref={textRef}
        className="max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] text-center"
      >
        <h1 className="drop-shadow-[0_2px_2px_rgba(0,0,0,1)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 leading-tight tracking-tight">
          Hello, I am <span className="font-bold">Masaru</span>!{" "}
          {"/ᐠ - ˕ -マ Ⳋ"}
        </h1>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl flex flex-wrap items-center gap-2">
          <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            I am a freelance
          </span>
          <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,1)] text-cyan-300 text-left font-bold min-w-[120px] sm:min-w-[150px] md:min-w-[180px] inline-block">
            <Typewriter
              options={{
                strings: ["Developer", "Illustrator"],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 80,
                cursor: "_",
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
