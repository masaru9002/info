import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  incrementVisitorCount,
  getOrdinalSuffix,
  subscribeToVisitorCount,
} from "../utils/VisitorUtils";

const VisitorCounter: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isReady, setIsReady] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const effectRan = useRef(false);

  // Handle initial count fetching
  useEffect(() => {
    if (effectRan.current) return;
    effectRan.current = true;

    const initializeCounter = async () => {
      const initialCount = await incrementVisitorCount();
      setVisitorCount(initialCount);
      setIsReady(true);
    };

    initializeCounter();

    const unsubscribe = subscribeToVisitorCount((newCount) => {
      setVisitorCount(newCount);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Handle animation after component is mounted and count is loaded
  useEffect(() => {
    if (isReady && counterRef.current) {
      gsap.set(counterRef.current, { opacity: 0, y: 50 });
      gsap.to(counterRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 3,
      });
    }
  }, [isReady]);

  if (!isReady || visitorCount === 0) return null;

  return (
    <div
      ref={counterRef}
      className="fixed bottom-4 left-4 text-white/80 text-sm sm:text-base font-semibold font-['Space_Grotesk'] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
    >
      You are the {visitorCount}
      <sup>{getOrdinalSuffix(visitorCount)}</sup> person to visit my page! ♥
    </div>
  );
};

export default VisitorCounter;
