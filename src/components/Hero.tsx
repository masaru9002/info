import React, { useEffect, useRef } from "react";
import { getLenisInstance } from "../lenisInstance";
import { gsap } from "gsap";
import "../styles/hero.css";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

function handleHeroScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
  offsetOverride?: number
) {
  e.preventDefault();
  const target = document.getElementById(id);
  const lenis = getLenisInstance();
  const offset = typeof offsetOverride === "number" ? offsetOverride : -60;
  if (target && lenis) {
    lenis.scrollTo(target, { offset });
  } else if (target) {
    const y = target.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function Hero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const kickerRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const marqueeRefBottom = useRef<HTMLDivElement | null>(null);
  const trackTopRef = useRef<HTMLDivElement | null>(null);
  const trackBottomRef = useRef<HTMLDivElement | null>(null);

  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) {
      titleRef.current?.querySelectorAll("span").forEach((s: Element) => {
        (s as HTMLElement).style.transform = "none";
        (s as HTMLElement).style.opacity = "1";
      });
      if (kickerRef.current) kickerRef.current.style.opacity = "1";
      if (ctaRef.current) ctaRef.current.style.opacity = "1";
      if (marqueeRef.current) marqueeRef.current.style.transform = "none";
      if (trackTopRef.current) trackTopRef.current.style.transform = "none";
      if (trackBottomRef.current)
        trackBottomRef.current.style.transform = "none";
      return;
    }

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const spans = titleRef.current.querySelectorAll("span");
        gsap.from(spans, {
          yPercent: 110,
          rotate: (i: number) => (i % 2 ? 3 : -3),
          opacity: 0,
          stagger: 0.035,
          ease: "expo.out",
          duration: 1.1,
        });
      }
      if (kickerRef.current) {
        gsap.from(kickerRef.current, {
          y: 40,
          opacity: 0,
          delay: 0.35,
          ease: "power3.out",
          duration: 1,
        });
      }
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          y: 50,
          opacity: 0,
          delay: 0.55,
          ease: "power3.out",
          duration: 1,
        });
      }
      if (imgRef.current) {
        gsap.from(imgRef.current, {
          y: 60,
          opacity: 0,
          delay: 0.7,
          ease: "power3.out",
          duration: 1.1,
        });
      }

      const SPEED_PX_PER_SEC = 80;

      function ensureEnoughContent(el: HTMLElement) {
        const parent = el.parentElement;
        if (!parent) return;
        const requiredVisibleWidth = parent.clientWidth;
        let attempts = 0;
        const maxAttempts = 10;
        while (
          el.scrollWidth < requiredVisibleWidth * 2 &&
          attempts < maxAttempts
        ) {
          const children = Array.from(el.children).map(
            (c) => c.cloneNode(true) as ChildNode
          );
          children.forEach((c) => el.appendChild(c));
          attempts++;
        }
      }

      function makeSeamlessTicker(
        el: HTMLElement | null,
        direction: "left" | "right"
      ) {
        if (!el) return null;

        ensureEnoughContent(el);

        let loopSpan = el.scrollWidth / 2;
        if (!loopSpan || !isFinite(loopSpan) || loopSpan <= 0) return null;

        let wrap = gsap.utils.wrap(-loopSpan, 0);

        gsap.set(el, { x: 0 });

        let tween = gsap.to(el, {
          x: direction === "left" ? -loopSpan : loopSpan,
          duration: Math.max(6, loopSpan / SPEED_PX_PER_SEC),
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (rawX: string) => {
              const num = parseFloat(rawX);
              return `${wrap(num)}px`;
            },
          },
        });

        const ro = new ResizeObserver(() => {
          const newLoopSpan = el.scrollWidth / 2;
          if (!newLoopSpan || !isFinite(newLoopSpan) || newLoopSpan <= 0)
            return;

          if (Math.abs(newLoopSpan - loopSpan) > 1) {
            loopSpan = newLoopSpan;
            wrap = gsap.utils.wrap(-loopSpan, 0);

            const currentXRaw = gsap.getProperty(el, "x") as number;
            tween.kill();

            gsap.set(el, { x: wrap(currentXRaw) });

            tween = gsap.to(el, {
              x: direction === "left" ? -loopSpan : loopSpan,
              duration: Math.max(6, loopSpan / SPEED_PX_PER_SEC),
              ease: "none",
              repeat: -1,
              modifiers: {
                x: (rawX: string) => {
                  const num = parseFloat(rawX);
                  return `${wrap(num)}px`;
                },
              },
            });
          }
        });

        ro.observe(el);

        const fontPromise = (
          document as Document & { fonts?: { ready?: Promise<void> } }
        ).fonts?.ready;
        if (fontPromise && typeof fontPromise.then === "function") {
          fontPromise.then(() => {
            ro.disconnect();
            ro.observe(el);
          });
        }

        return () => {
          tween && tween.kill();
          ro.disconnect();
        };
      }

      const killTop = makeSeamlessTicker(trackTopRef.current, "left");
      const killBottom = makeSeamlessTicker(trackBottomRef.current, "right");

      const handleScroll = () => {
        const offset = window.scrollY * 0.5;
        if (marqueeRef.current) {
          gsap.to(marqueeRef.current, {
            y: offset * 0.8,
            ease: "power1.out",
            overwrite: true,
            duration: 0.6,
          });
        }
        if (marqueeRefBottom.current) {
          gsap.to(marqueeRefBottom.current, {
            y: -offset * 0.4,
            ease: "power1.out",
            overwrite: true,
            duration: 0.6,
          });
        }
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (killTop) killTop();
        if (killBottom) killBottom();
      };
    });

    return () => ctx.revert();
  }, [reduce]);

  const jp = "イラストレータープロフィール";
  const displayWords = ["ARTIST", "PROFILE"];

  return (
    <header className="hero" role="banner">
      <div
        className="hero__marquee-bg"
        aria-hidden
        ref={marqueeRef}
        style={{
          top: 100,
          willChange: "transform",
        }}
      >
        <div className="hero__marquee-track" ref={trackTopRef}>
          {Array(8)
            .fill("SILLYCAT4725")
            .map((word, i) => (
              <span className="hero__marquee-text" key={"a" + i}>
                {word}
              </span>
            ))}
          {Array(8)
            .fill("SILLYCAT4725")
            .map((word, i) => (
              <span className="hero__marquee-text" key={"b" + i}>
                {word}
              </span>
            ))}
        </div>
      </div>

      <div
        className="hero__marquee-bg hero__marquee-bg--second"
        aria-hidden
        ref={marqueeRefBottom}
        style={{
          height: "500px",
          top: "auto",
          bottom: -620,
          willChange: "transform",
        }}
      >
        <div
          className="hero__marquee-track hero__marquee-track--reverse"
          ref={trackBottomRef}
        >
          {Array(8)
            .fill("PORTFOLIO")
            .map((word, i) => (
              <span className="hero__marquee-text" key={"c" + i}>
                {word}
              </span>
            ))}
          {Array(8)
            .fill("PORTFOLIO")
            .map((word, i) => (
              <span className="hero__marquee-text" key={"d" + i}>
                {word}
              </span>
            ))}
        </div>
      </div>

      <div className="wrap">
        <div className="hero__artnote" aria-hidden />
        <div className="hero__grid" aria-hidden />
        <div className="hero__layout">
          <div className="hero__content">
            <div className="hero__sup">{jp}</div>
            <h1
              ref={titleRef}
              className="hero__title"
              aria-label={displayWords.join(" ")}
            >
              {displayWords.map((w, wi) => (
                <React.Fragment key={wi}>
                  <span className="hero__word">
                    {w.split("").map((l, li) => (
                      <span key={wi + "-" + li}>{l}</span>
                    ))}
                  </span>
                  {wi < displayWords.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
            <p ref={kickerRef} className="hero__kicker">
              Hello, I'm Sillycat4725, currently training as a freelance
              illustrator! I try to keep my artstyle flexible and always pay
              great attention to detail.
            </p>
            <div ref={ctaRef} className="hero__cta">
              <a
                className="btn"
                onClick={(e) => handleHeroScroll(e, "gallery", 30)}
              >
                View Work
              </a>
              <a
                className="btn btn--ghost"
                onClick={(e) => handleHeroScroll(e, "contact")}
              >
                Contact
              </a>
            </div>
          </div>
          <figure
            className="hero__art"
            aria-label="Featured character illustration placeholder"
          >
            <img
              ref={imgRef}
              src="/izuna.png"
              alt="Character placeholder"
              loading="lazy"
              draggable={false}
            />
          </figure>
        </div>
      </div>
    </header>
  );
}

export default Hero;
