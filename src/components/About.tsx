import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/sections.css";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = usePrefersReducedMotion();

  const [slotsTotal] = useState(5);
  const [slotsTaken, setSlotsTaken] = useState(0);
  const [slotsLeft, setSlotsLeft] = useState(5);
  const [statusMsg, setStatusMsg] = useState("Loading status...");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch(
          "https://portfolio-api-three-rose.vercel.app/api/commission-status"
        );
        const data = await res.json();
        setIsOpen(data.isOpen !== undefined ? data.isOpen : true);
        setSlotsTaken(
          data.openSlots !== undefined ? slotsTotal - data.openSlots : 0
        );
        setSlotsLeft(data.openSlots !== undefined ? data.openSlots : 0);
        setStatusMsg(
          data.message ||
            "Could not load commission status. Try reloading the page."
        );
      } catch (err) {
        setStatusMsg(
          "Could not load commission status. Try reloading the page."
        );
        setIsOpen(false);
      }
    }
    fetchStatus();
  }, [slotsTotal]);

  useEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      if (!ref.current) return;
      const targets = ref.current.querySelectorAll(".fade-seq");
      gsap.from(targets, {
        y: 50,
        opacity: 0,
        stagger: 0.18,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
      });
    });
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="commissions" ref={ref} className="section about wrap">
      <div className="commissions-flex">
        <div className="commissions-main">
          <h2 className="section__title fade-seq">Commissions</h2>
          <p className="lead fade-seq">{statusMsg}</p>
          <div
            className="commission-slots fade-seq"
            aria-label="Commission slots"
          >
            {Array.from({ length: slotsTotal }).map((_, i) => {
              const closedOrFull = !isOpen || slotsLeft === 0;
              const taken = closedOrFull ? true : i < slotsTaken;
              return (
                <div
                  key={i}
                  className={`slot${taken ? " slot--taken" : " slot--open"}`}
                  aria-label={taken ? "Taken" : "Open"}
                  title={taken ? "Taken" : "Open"}
                >
                  {taken ? "✕" : "○"}
                </div>
              );
            })}
          </div>
          <div className="fade-seq" style={{ margin: "2.2rem 0 0.7rem" }}>
            <a
              href="https://ko-fi.com/sillycat4725"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn--ghost commission-btn${
                !isOpen || slotsLeft === 0 ? " btn--disabled" : ""
              }`}
              style={{
                pointerEvents: !isOpen || slotsLeft === 0 ? "none" : undefined,
                opacity: !isOpen || slotsLeft === 0 ? 0.5 : 1,
              }}
            >
              {!isOpen || slotsLeft === 0
                ? "All Slots Filled/Closed"
                : "Commission"}
            </a>
          </div>
          <div className="prose fade-seq" style={{ marginTop: "1.5rem" }}>
            <p>
              Just dropping a small donation on my{" "}
              <a
                href="https://ko-fi.com/sillycat4725"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-accent)", fontWeight: 500 }}
              >
                Ko-fi
              </a>{" "}
              without commissioning is more than enough! Your generosity is
              greatly appreciated~
            </p>
            <p
              style={{
                fontSize: "1.05em",
                color: "var(--color-ink)",
                fontWeight: 600,
                marginTop: "0.7em",
                letterSpacing: "0.01em",
              }}
            >
              💡 Slots update automatically! Refresh the page for the latest
              status. A slot will be filled once payment is confirmed!
            </p>
          </div>
        </div>
        <aside className="commission-info-card fade-seq">
          <h3>Commission Info</h3>
          <ul>
            <li>
              (Prices may change depending on character complexity. You can pay
              extra if you need the drawing asap)
            </li>
            <li>Turnaround: 2-4 weeks</li>
            <li>
              Payment: Payment upfront via Ko-fi. I will DM the client updates
              weekly!
            </li>
            <li>
              • Emote/Icon: <b>$15</b>
            </li>
            <li>
              • Simple shading/Manga-ish: <b>$20</b> (Half-Body), <b>$35</b>{" "}
              (Full-body)
            </li>
            <li>
              • Full shading: <b>$40</b> (Half-body), <b>$55</b> (Full-body)
            </li>
            <li>What I draw:</li>
            <li>• Mostly girls and simple backgrounds.</li>
            <li>• I rarely draw men but I will try if you need.</li>
            <li>• I can't draw furry and kemono (with a few exceptions).</li>
          </ul>
        </aside>
      </div>
    </section>
  );
};
