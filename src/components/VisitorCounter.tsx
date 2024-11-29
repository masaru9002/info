import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  incrementVisitorCount,
  subscribeToVisitorCount,
  getOrdinalSuffix,
} from "../utils/VisitorUtils";
import { getRandomCatKaomoji } from "../utils/KaomojiUtils";

const VisitorCounter: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isReady, setIsReady] = useState(false);
  const [kaomoji, setKaomoji] = useState("♥");
  const counterRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const isAnimating = useRef(false);
  const touchTimeout = useRef<NodeJS.Timeout>();
  const touchStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const initialized = useRef(false);

  useEffect(() => {
    const initialize = async () => {
      if (initialized.current) return;
      initialized.current = true;

      // First increment the count for the new visitor
      await incrementVisitorCount();

      // Then subscribe to real-time updates
      const unsubscribe = subscribeToVisitorCount((count) => {
        if (numberRef.current && visitorCount !== 0 && count !== visitorCount) {
          gsap.to(numberRef.current, {
            y: -20,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              setVisitorCount(count);
              gsap.fromTo(
                numberRef.current!,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
              );
            },
          });
        } else {
          setVisitorCount(count);
        }
      });

      setIsReady(true);
      return unsubscribe;
    };

    initialize();

    return () => {
      if (touchTimeout.current) {
        clearTimeout(touchTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isReady || !counterRef.current) return;

    const tl = gsap.timeline();
    tl.fromTo(
      counterRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 3,
      }
    );
  }, [isReady]);

  const handleInteraction = () => {
    if (isAnimating.current || !counterRef.current) return;
    isAnimating.current = true;

    setKaomoji(getRandomCatKaomoji());

    const timeline = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    for (let i = 0; i < 8; i++) {
      timeline.to(counterRef.current, {
        x: gsap.utils.random(-6, 6),
        y: gsap.utils.random(-4, 4),
        rotation: gsap.utils.random(-5, 5),
        duration: 0.08,
      });
    }

    timeline.to(counterRef.current, {
      x: 0,
      y: 0,
      rotation: 0,
      duration: 0.3,
      ease: "elastic.out(1.2, 0.3)",
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY };

    touchTimeout.current = setTimeout(() => {
      handleInteraction();
    }, 200);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchTimeout.current) return;

    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - touchStartPos.current.x);
    const deltaY = Math.abs(touch.clientY - touchStartPos.current.y);

    if (deltaX > 10 || deltaY > 10) {
      clearTimeout(touchTimeout.current);
      touchTimeout.current = undefined;
    }
  };

  const handleTouchEnd = () => {
    if (touchTimeout.current) {
      clearTimeout(touchTimeout.current);
      touchTimeout.current = undefined;
    }
  };

  if (!isReady || visitorCount === 0) return null;

  return (
    <div
      ref={counterRef}
      onClick={handleInteraction}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="z-10 fixed bottom-4 left-4 text-white/80 text-sm sm:text-base font-semibold font-['Space_Grotesk'] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] cursor-pointer transition-transform hover:scale-105 select-none touch-manipulation"
    >
      You are my <span ref={numberRef}>{visitorCount}</span>
      <sup>{getOrdinalSuffix(visitorCount)}</sup> visitor! {kaomoji}
    </div>
  );
};

export default VisitorCounter;
