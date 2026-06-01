import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ShapeGrid from "./ShapeGrid";
import { API_URL } from "../App";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const foxRef = useRef<HTMLImageElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const patRef = useRef<HTMLDivElement>(null);
  const isBeingPatted = useRef(false);
  const patCount = useRef<number | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/pats`)
      .then((r) => r.json())
      .then((data) => {
        patCount.current = data.count;
      });
  }, []);

  const headZone = { x: { min: 0.3, max: 0.8 }, y: { min: 0.2, max: 0.5 } };

  const inHeadZone = (relX: number, relY: number) =>
    relX >= headZone.x.min &&
    relX <= headZone.x.max &&
    relY >= headZone.y.min &&
    relY <= headZone.y.max;

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const el = imgRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    el.style.cursor = inHeadZone(relX, relY) ? "pointer" : "default";
  };

  const handlePat = (
    e: React.MouseEvent<HTMLImageElement> | React.TouchEvent<HTMLImageElement>,
  ) => {
    const el = imgRef.current;
    if (!el || isBeingPatted.current) return;
    const rect = el.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const relX = (clientX - rect.left) / rect.width;
    const relY = (clientY - rect.top) / rect.height;
    if (!inHeadZone(relX, relY)) return;
    isBeingPatted.current = true;

    if (patCount.current !== null) patCount.current += 1;
    showPatMessage(patCount.current, false);

    fetch(`${API_URL}/pats/increment`, { method: "POST" })
      .then((res) => {
        if (res.status === 429) {
          if (patCount.current !== null) patCount.current -= 1;
          showPatMessage(patCount.current, true);
        }
      })
      .catch(() => {});

    gsap
      .timeline({
        overwrite: false,
        onComplete: () => {
          isBeingPatted.current = false;
        },
      })
      .to(el, { scale: 1.02, duration: 0.12, ease: "power2.out" })
      .to(el, { scale: 1, duration: 0.6, ease: "elastic.out(1.2, 0.4)" });

    spawnHearts();
  };

  const showPatMessage = (count: number | null, rateLimited: boolean) => {
    const container = containerRef.current;
    if (!container) return;

    container.querySelectorAll("[data-pat-msg]").forEach((el) => el.remove());

    const msg = document.createElement("div");
    msg.setAttribute("data-pat-msg", "true");
    msg.innerText = rateLimited
      ? `Enough headpats for now! (${count ?? "?"} total)`
      : count === null
        ? "Nin nin!"
        : `Izuna has gotten ${count} pats!`;
    msg.style.cssText = `
    position: absolute;
    bottom: -2.2rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: clamp(0.9rem, 1.5vw, 1.25rem);
    color: #ff5c98;
    font-family: inherit;
    letter-spacing: 0.05em;
    pointer-events: none;
    opacity: 0;
    z-index: 30;
  `;
    container.appendChild(msg);

    gsap
      .timeline()
      .to(msg, {
        opacity: 1,
        y: -6,
        duration: 0.4,
        ease: "back.out(2.5)",
      })
      .to(msg, {
        opacity: 0,
        y: -16,
        duration: 0.5,
        ease: "power2.in",
        delay: 2.5,
        onComplete: () => msg.remove(),
      });
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const spawnHearts = () => {
    const container = containerRef.current;
    if (!container) return;

    const count = Math.floor(Math.random() * 2) + 2;

    Array.from({ length: count }).forEach((_, i) => {
      const heart = document.createElement("span");
      heart.innerHTML = "❤";
      heart.style.cssText = `
      position: absolute;
      bottom: 16%;
      left: 46%;
      font-size: clamp(20px, 3vw, 40px);
      color: white;
      pointer-events: none;
      transform: translate(-50%, 0);
      -webkit-text-stroke: 2px #ff5c98;
      z-index: 20;
      `;
      container.appendChild(heart);

      const angle = -120 + i * (120 / (count - 1));
      const dist = 90 + Math.random() * 60;
      const rad = (angle * Math.PI) / 180;
      const tx = Math.sin(rad) * dist;
      const ty = -Math.abs(Math.cos(rad)) * dist;

      const randomTilt = (Math.random() - 0.5) * 60; // -+30ish degrees tilt

      gsap
        .timeline()
        .to(heart, {
          x: tx * 0.6,
          y: ty,
          scale: 1.2,
          rotation: randomTilt,
          duration: 0.35,
          ease: "power2.out",
        })
        .to(heart, {
          x: tx,
          y: ty + 30,
          scale: 0.6,
          opacity: 0,
          duration: 0.45,
          ease: "power1.in",
          onComplete: () => heart.remove(),
        });
    });
  };

  useEffect(() => {
    const el = foxRef.current;
    if (!el) return;

    gsap.set(el, {
      transformOrigin: "50% 95%",
      y: 0,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
    });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(el, {
      y: -8,
      rotation: 1.5,
      scaleX: 0.98,
      scaleY: 1.03,
      duration: 1.8 / 2,
      ease: "sine.inOut",
    })
      .to(el, {
        y: -10,
        rotation: 0,
        scaleX: 1,
        scaleY: 1.04,
        duration: 1.4 / 2,
        ease: "sine.inOut",
      })
      .to(el, {
        y: -4,
        rotation: -1.5,
        scaleX: 0.99,
        scaleY: 1.01,
        duration: 1.6 / 2,
        ease: "sine.inOut",
      })
      .to(el, {
        y: 0,
        rotation: -0.5,
        scaleX: 1.02,
        scaleY: 0.98,
        duration: 0.9 / 2,
        ease: "power2.out",
      })
      .to(el, {
        rotation: -3,
        y: -4,
        scaleX: 1,
        scaleY: 1,
        duration: 0.6 / 2,
        ease: "power1.inOut",
      })
      .to(el, { rotation: 2.5, y: -5, duration: 0.9, ease: "power1.inOut" })
      .to(el, {
        y: -14,
        rotation: 0,
        scaleX: 0.96,
        scaleY: 1.03,
        duration: 0.15,
        ease: "power2.out",
        onComplete: spawnHearts,
      })
      .to(el, {
        y: 0,
        scaleX: 1.04,
        scaleY: 0.96,
        duration: 0.2,
        ease: "power2.in",
      })
      .to(el, {
        scaleX: 1,
        scaleY: 1,
        y: 0,
        rotation: 0,
        duration: 0.5,
        ease: "sine.inOut",
      });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-line]",
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 },
      )
        .fromTo(
          "[data-hero-name]",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.9 },
          "-=0.8",
        )
        .fromTo(
          "[data-hero-frame]",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.9 },
          "-=0.8",
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden border-b border-line"
    >
      <div aria-hidden className="absolute inset-0 opacity-[0.56]">
        <ShapeGrid
          speed={0.5}
          squareSize={100}
          direction="diagonal"
          borderColor="#373737"
          hoverFillColor="#222"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      <header className="relative z-10 flex items-center justify-between px-5 py-5 md:px-44">
        <span
          data-hero-line
          className="font-display text-lg font-bold tracking-[0.15em]"
        >
          @sillycat4725
        </span>
        <nav className="hidden items-center gap-8 tech-label text-[11px] text-muted md:flex">
          <a
            data-hero-line
            href="#works"
            className="transition-colors hover:text-foreground"
          >
            Works
          </a>
          <a
            data-hero-line
            href="#clients"
            className="transition-colors hover:text-foreground"
          >
            Commission
          </a>
        </nav>
        <span
          data-hero-line
          className="tech-label text-[11px] text-muted md:hidden"
        >
          PROFILE
        </span>
      </header>

      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-8 px-5 pb-10 pt-4 md:grid-cols-[1fr_1fr] md:gap-12 md:px-44 md:pb-12 md:pt-0">
        <div className="flex flex-col justify-center items-center md:items-start">
          <div data-hero-line className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-accent" />
            <span className="tech-label text-[11px] text-muted">
              イラストレータープロフィール
            </span>
          </div>

          <h1
            data-hero-name
            className="font-display font-black italic leading-[0.82] tracking-tight text-center md:text-left"
            style={{ fontSize: "clamp(2.5rem, 7vw, 8.5rem)" }}
          >
            ARTIST PROFILE
          </h1>

          <div className="mt-4 flex items-center gap-5 justify-center md:justify-start">
            <span
              data-hero-line
              className="font-display tracking-[0.4em] text-muted"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}
            >
              @sillycat4725
            </span>
            <span data-hero-line className="tech-label text-[11px] text-accent">
              ฅ₍^•⩊ •マⳊ
            </span>
          </div>

          <p
            data-hero-line
            className="mt-8 max-w-xl text-pretty leading-relaxed text-muted text-center md:text-left"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.5rem)" }}
          >
            Hello, I'm SillyCat, a freelance illustrator! I try to keep my
            artstyle flexible and always pay great attention to detail.
          </p>

          <div
            data-hero-line
            className="mt-10 flex items-center gap-3 justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-foreground px-7 py-3.5 tech-label text-[16px] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              CONTACT ME
              <span className="transition-transform group-hover:translate-x-1">
                ⋙
              </span>
            </a>
          </div>
        </div>

        <div
          data-hero-frame
          ref={containerRef}
          className="relative mx-auto w-auto md:mx-0 md:ml-auto"
        >
          <div ref={foxRef}>
            <div
              ref={patRef}
              style={{ display: "contents", cursor: "pointer" }}
            >
              <img
                ref={imgRef}
                src="/nin.webp"
                alt="KEY ART / 001"
                className="h-full w-full object-cover"
                style={{ willChange: "transform" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                  if (imgRef.current) imgRef.current.style.cursor = "default";
                }}
                onMouseDown={handlePat}
                onTouchStart={handlePat}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-surface flex items-center justify-between border-t border-line px-5 py-4 md:px-10">
        <span data-hero-line className="tech-label text-[16px] text-muted-2">
          🡻 Scroll Down
        </span>
        <span data-hero-line className="tech-label text-[16px] text-muted-2">
          My Works 🡻
        </span>
      </div>
    </section>
  );
}
