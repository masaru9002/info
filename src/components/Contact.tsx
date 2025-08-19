import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/sections.css";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      if (!ref.current) return;
      const targets = ref.current.querySelectorAll(".fade-seq");
      gsap.from(targets, {
        y: 45,
        opacity: 0,
        stagger: 0.16,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 82%" },
      });
    });
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="contact" ref={ref} className="section contact wrap">
      <h2 className="section__title fade-seq">Contact</h2>
      <p className="lead fade-seq">
        For commission inquiries, the best way is to reach out via Discord. I
        always respond quickly unless I've already gone to bed. Feel free to
        drop by my other links as well, thank you!
      </p>
      <ul className="contact__list">
        <li className="fade-seq">
          <a className="contact__link">Discord: Sillycat4725</a>
        </li>
        <li className="fade-seq">
          <a
            href="https://x.com/sillycat4725"
            target="_blank"
            rel="noopener"
            className="contact__link"
          >
            X / Twitter
          </a>
        </li>
        <li className="fade-seq">
          <a
            href="https://ko-fi.com/sillycat4725"
            target="_blank"
            rel="noopener"
            className="contact__link"
          >
            Ko-fi
          </a>
        </li>
        <li className="fade-seq">
          <a
            href="https://www.pixiv.net/en/users/99556221"
            target="_blank"
            rel="noopener"
            className="contact__link"
          >
            Pixiv
          </a>
        </li>
      </ul>
      <footer className="site-footer fade-seq">
        Made by Sillycat4725 with React (Vue is better)
      </footer>
    </section>
  );
};
