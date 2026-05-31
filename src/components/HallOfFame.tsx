import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Reveal } from "./reveal";
import { API_URL, FALLBACK_AVATAR } from "../App";

type Patron = {
  rank: 1 | 2 | 3;
  name: string;
  avatar?: string;
  label: string;
  comms: number;
};

const RANK_META = {
  1: {
    roman: "I",
    heightClass: "md:mt-0",
    borderColor: "border-[#c8a96e]",
    labelColor: "text-[#c8a96e]",
    rankColor: "text-[#c8a96e]",
    size: "w-28 h-28 md:w-32 md:h-32",
    barHeight: "h-40 md:h-48",
  },
  2: {
    roman: "II",
    heightClass: "md:mt-14",
    borderColor: "border-muted",
    labelColor: "text-muted",
    rankColor: "text-muted",
    size: "w-24 h-24",
    barHeight: "h-28 md:h-36",
  },
  3: {
    roman: "III",
    heightClass: "md:mt-20",
    borderColor: "border-muted-2",
    labelColor: "text-muted-2",
    rankColor: "text-muted-2",
    size: "w-20 h-20",
    barHeight: "h-20 md:h-28",
  },
};

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

const CHARS = ["✦", "✧", "⋆", "✦", "✧", "✦"];

let hueOffset = 0;
function nextColor(): string {
  hueOffset = (hueOffset + rand(18, 35)) % 360;
  return `hsl(${hueOffset}, 100%, 65%)`;
}

export function Sparkles() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    function spawnSparkle() {
      const el = document.createElement("span");
      el.innerText = CHARS[Math.floor(Math.random() * CHARS.length)];

      const W = layer!.offsetWidth;
      const H = layer!.offsetHeight;

      let x: number, y: number;
      const zone = Math.random();
      if (zone < 0.35) {
        x = rand(W * 0.15, W * 0.85);
        y = Math.random() < 0.5 ? rand(0, H * 0.25) : rand(H * 0.75, H);
      } else if (zone < 0.65) {
        x = Math.random() < 0.5 ? rand(0, W * 0.2) : rand(W * 0.8, W);
        y = rand(H * 0.1, H * 0.9);
      } else {
        x = rand(5, W - 5);
        y = rand(5, H - 5);
      }

      const size = rand(12, 34);
      const color = nextColor();
      const rot = rand(0, 360);
      const duration = rand(0.25, 0.45);
      const hold = rand(0.1, 0.35);

      Object.assign(el.style, {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        fontSize: `${size}px`,
        color,
        pointerEvents: "none",
        lineHeight: "1",
        transform: `translate(-50%, -50%) scale(0) rotate(${rot}deg)`,
        opacity: "0",
        textShadow: `0 0 16px ${color}, 0 0 32px ${color}`,
      });
      layer!.appendChild(el);

      gsap
        .timeline({ onComplete: () => el.remove() })
        .to(el, {
          scale: rand(0.8, 1.3),
          opacity: rand(0.7, 1),
          rotation: rot + rand(-30, 30),
          duration,
          ease: "back.out(0.5)",
        })
        .to(
          el,
          {
            scale: 0,
            opacity: 0,
            y: rand(-10, -20),
            duration: duration * 0.4,
            ease: "power2.in",
          },
          `+=${hold}`,
        );
    }

    function spawnBurst() {
      const count = Math.random() < 0.3 ? 3 : 1;
      for (let i = 0; i < count; i++) {
        setTimeout(spawnSparkle, i * rand(40, 80));
      }
    }

    for (let i = 0; i < 6; i++) setTimeout(spawnSparkle, i * 60);

    const interval = setInterval(spawnBurst, 280);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={layerRef}
      className="absolute inset-0 pointer-events-none z-50"
      aria-hidden
    />
  );
}

function PatronCard({ patron }: { patron: Patron }) {
  const meta = RANK_META[patron.rank];
  const avatarRef = useRef<HTMLDivElement>(null);
  const isFirst = patron.rank === 1;

  useEffect(() => {
    if (!isFirst || !avatarRef.current) return;
    gsap.to(avatarRef.current, {
      keyframes: [
        { borderColor: "#c8a96e", duration: 0.8 },
        { borderColor: "#ffe8a0", duration: 0.8 },
        { borderColor: "#c8a96e", duration: 0.8 },
      ],
      repeat: -1,
      ease: "sine.inOut",
    });
  }, [isFirst]);

  return (
    <div className={`flex flex-col items-center gap-3 ${meta.heightClass}`}>
      <div className="relative">
        {isFirst && <Sparkles />}
        <div
          ref={avatarRef}
          className={`relative ${meta.size} border-2 ${meta.borderColor} overflow-hidden`}
        >
          <img
            src={patron.avatar || FALLBACK_AVATAR}
            alt={patron.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = FALLBACK_AVATAR;
            }}
            className="w-full h-full object-cover"
          />
          {isFirst && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,169,110,0.15) 0%, transparent 60%)",
              }}
            />
          )}
        </div>
        <span
          className={`absolute -top-2 -right-2 font-display text-xs font-black ${meta.rankColor} border ${meta.borderColor} bg-background px-1.5 py-0.5 leading-none`}
        >
          {meta.roman}
        </span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span
          className={`font-display text-[24px] font-black leading-none tracking-wide ${isFirst ? "text-[#c8a96e]" : ""}`}
        >
          {patron.name}
        </span>
        <span className={`tech-label text-[12px] ${meta.labelColor}`}>
          {patron.label}
        </span>
        <span className={`tech-label text-[14px] ${meta.labelColor}`}>
          x{patron.comms}
        </span>
      </div>

      <div
        className={`hidden md:block w-full ${meta.barHeight} border border-line bg-surface/40 relative overflow-hidden`}
      >
        {isFirst && (
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #c8a96e 0 1px, transparent 1px 12px)",
            }}
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end pb-3">
          <span
            className={`font-display text-4xl font-black leading-none ${meta.rankColor}`}
          >
            {patron.rank}
          </span>
        </div>
      </div>
    </div>
  );
}

export function HallOfFame() {
  const [patrons, setPatrons] = useState<Patron[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/commission-status`)
      .then((r) => r.json())
      .then((data) => {
        const labels = ["Paying My Bills", "Charitable", "Generous"];
        const mapped: Patron[] = (
          data.top as ({ name: string; avatar: string; comms: number } | null)[]
        )
          .map((p, i) =>
            p
              ? {
                  rank: (i + 1) as 1 | 2 | 3,
                  name: p.name,
                  avatar: p.avatar,
                  comms: p.comms,
                  label: labels[i],
                }
              : null,
          )
          .filter(Boolean) as Patron[];
        setPatrons(mapped);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <section
      id="hall-of-fame"
      className="relative border-t border-line px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal stagger={0.1} className="mb-16 flex flex-col gap-6">
        <h2
          className="font-display font-black italic leading-[0.82] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 8.5rem)" }}
        >
          TOP
          <br />
          PATRONS
        </h2>

        <span className="mt-6 font-display text-xl tracking-[0.5em] text-muted">
          BASED ON TIMES
        </span>
      </Reveal>

      <Reveal>
        {error && (
          <p className="tech-label text-sm text-accent">
            Could not fetch patrons. Try reloading maybe?
          </p>
        )}

        {patrons === null && !error && (
          <div className="grid grid-cols-3 gap-4 md:gap-8 items-end max-w-2xl mx-auto">
            {[
              { h: "h-28 md:h-36", s: "w-24 h-24", mt: "md:mt-14" },
              { h: "h-40 md:h-48", s: "w-28 h-28 md:w-32 md:h-32", mt: "" },
              { h: "h-20 md:h-28", s: "w-20 h-20", mt: "md:mt-20" },
            ].map((sk, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-3 ${sk.mt}`}
              >
                <div
                  className={`${sk.s} animate-pulse bg-surface-2 border border-line`}
                />
                <div className="flex flex-col items-center gap-2">
                  <div className="h-4 w-20 animate-pulse bg-surface-2" />
                  <div className="h-3 w-12 animate-pulse bg-surface-2" />
                </div>
                <div
                  className={`w-full ${sk.h} animate-pulse bg-surface-2 border border-line`}
                />
              </div>
            ))}
          </div>
        )}

        {patrons !== null && patrons.length > 0 && (
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8 md:items-end max-w-2xl mx-auto">
            <div className="md:hidden flex flex-col gap-6">
              {[1, 2, 3].map((rank) => {
                const patron = patrons.find((p) => p.rank === rank);
                return patron ? (
                  <PatronCard key={rank} patron={patron} />
                ) : null;
              })}
            </div>
            <div className="hidden md:contents">
              {[
                patrons.find((p) => p.rank === 2),
                patrons.find((p) => p.rank === 1),
                patrons.find((p) => p.rank === 3),
              ]
                .filter(Boolean)
                .map((patron) => (
                  <PatronCard key={patron!.rank} patron={patron!} />
                ))}
            </div>
          </div>
        )}
      </Reveal>
    </section>
  );
}
