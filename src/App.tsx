import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { Nav } from "./components/Nav";
import Hero from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { setLenisInstance } from "./lenisInstance";

const App: React.FC = () => {
  const fadeRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      gestureOrientation: "vertical",
      touchMultiplier: 1.5,
    });
    setLenisInstance(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (fadeRef.current) {
      gsap.to(fadeRef.current, {
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
      });
    }

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div id="page-fade" ref={fadeRef} style={{ opacity: 0 }}>
      <a id="top" />
      <Nav />
      <Hero />
      <main>
        <Gallery />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;
