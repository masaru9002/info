import { useEffect } from "react";
import { HallOfFame } from "./HallOfFame";
import Iridescence from "./Iridescence";
import { Reveal } from "./reveal";

const LINKS = [
  {
    label: "Email",
    value: "commission@sillycat.info",
    link: "mailto:commission@sillycat.info",
  },
  {
    label: "Twitter / X",
    value: "@sillycat4725",
    link: "https://twitter.com/sillycat4725",
  },
  {
    label: "Pixiv",
    value: "SillyCat",
    link: "https://www.pixiv.net/en/users/99556221",
  },
  {
    label: "Discord",
    value: "sillycat4725",
    link: "https://discord.com/",
  },
];

export function Contact() {
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => clearTimeout(t);
  }, []);
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line px-5 py-28 md:px-10 md:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="w-full h-[calc(100%+2rem)]">
          <Iridescence
            color={[0.12, 0.12, 0.12]}
            mouseReact={false}
            amplitude={0.1}
            speed={0.5}
          />
        </div>
      </div>
      <span
        aria-hidden
        className="pointer-events-none opacity-80 absolute -bottom-6 left-0 right-0 select-none text-center font-display text-[26vw] font-black leading-none text-surface md:text-[20vw]"
      >
        SILLYCAT
      </span>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <Reveal stagger={0.12} className="flex flex-col items-center">
          <span className="mb-8 tech-label text-[14px] text-accent">
            Thanks for visiting!
          </span>

          <h2 className="font-display text-6xl font-black leading-[0.85] tracking-tight md:text-9xl">
            CONTACT
            <br />
            INFO
          </h2>
        </Reveal>

        <Reveal
          stagger={0.08}
          className="mt-14 grid w-full max-w-3xl grid-cols-1 border border-line sm:grid-cols-2"
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-line px-6 py-5 transition-colors last:border-b-0 hover:bg-surface sm:nth-3:border-b-0 sm:odd:border-r"
            >
              <span className="tech-label text-[12px] text-muted">
                {link.label}
              </span>
              <span className="font-display text-base tracking-wide transition-colors group-hover:text-accent">
                {link.value}
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal className="mt-14">
          <HallOfFame />
          <a
            href="#"
            className="group inline-flex items-center gap-3 bg-accent px-9 py-4 tech-label text-[12px] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Back to Top
            <span className="transition-transform group-hover:translate-x-1">
              🡹
            </span>
          </a>
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto mt-24 flex max-w-5xl flex-col items-center justify-between gap-3 border-t border-line pt-6 tech-label text-[12px] text-center text-muted-2 sm:flex-row">
        <span>Made by sillycat4725 (hi that's me!!)</span>
        <span>Powered by Github Pages and Reactslop</span>
      </div>
    </section>
  );
}
