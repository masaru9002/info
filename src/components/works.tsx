import { useState } from "react";
import useSWR from "swr";
import { Reveal } from "./reveal";
import Iridescence from "./Iridescence";
import { Lightbox } from "./Lightbox";
import Masonry from "react-masonry-css";
import { API_URL } from "../App";

type Artwork = {
  id: string;
  url: string;
  width: number;
  height: number;
  format: string;
  title: string;
};

const breakpoints = {
  default: 5,
  1280: 4,
  1024: 3,
  640: 2,
};

const PAGE_SIZE = 10;

const stripPrefix = (title: string) => title.replace(/^\d+\.\s*/, "");

const fetcher = (url: string): Promise<Artwork[]> =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to load artworks");
    return res.json();
  });

export function Works() {
  const { data, error, isLoading } = useSWR<Artwork[]>(
    `${API_URL}/artworks`,
    fetcher,
  );
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );

  const artworks = data ?? [];
  const shown = artworks.slice(0, visible);
  const hasMore = visible < artworks.length;

  return (
    <section id="works" className="relative px-5 py-24 md:px-10 md:py-32">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Iridescence
          color={[0.12, 0.12, 0.12]}
          mouseReact={false}
          amplitude={0.1}
          speed={1}
        />
      </div>

      <div className="relative z-10">
        <Reveal stagger={0.1} className="mb-14 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 bg-accent" />
            <span className="tech-label text-[14px] text-muted">
              Most Notable Works / 2019 — {new Date().getFullYear()}
            </span>
          </div>
          <h2
            className="font-display font-black italic leading-[0.82] tracking-tight md:text-left"
            style={{ fontSize: "clamp(2.5rem, 6vw, 8.5rem)" }}
          >
            ARTWORKS
          </h2>
          <p
            className="max-w-4xl text-pretty leading-relaxed text-muted md:text-left"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.5rem)" }}
          >
            These include all my fanarts, commissions and personal projects.
            Please note that the displayed images have reduced resolutions for
            performance; for full quality, you can visit my social media
            accounts!
          </p>
        </Reveal>

        {error && (
          <p className="tech-label text-sm text-accent z-50">
            Couldn't fetch images. Try reloading maybe?
          </p>
        )}

        {!error && (
          <Masonry
            breakpointCols={breakpoints}
            className="flex -mx-1.5 sm:-mx-2 min-h-96"
            columnClassName="flex flex-col px-1.5 sm:px-2 gap-3 sm:gap-4"
          >
            {(isLoading || (!data && !error)) &&
              Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="break-inside-avoid border border-line bg-surface"
                  style={{ aspectRatio: i % 2 === 0 ? "3 / 4" : "4 / 5" }}
                >
                  <div
                    aria-hidden
                    className="h-full w-full animate-pulse"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, transparent 0 11px, var(--surface-2) 11px 12px)",
                    }}
                  />
                </div>
              ))}

            {shown.map((work, i) => (
              <Reveal
                key={work.id}
                y={48}
                delay={(i % 3) * 0.06}
                className="break-inside-avoid"
              >
                <article
                  onClick={() =>
                    setLightbox({ src: work.url, alt: work.title })
                  }
                  className="group relative block w-full cursor-pointer overflow-hidden border border-line bg-surface transition-colors duration-300 hover:border-accent"
                >
                  <div className="relative w-full overflow-hidden">
                    <img
                      src={work.url || "/placeholder.svg"}
                      alt={work.title}
                      width={work.width}
                      height={work.height}
                      loading="lazy"
                      className="block w-full transition-transform duration-500 group-hover:scale-105"
                      style={{ aspectRatio: `${work.width} / ${work.height}` }}
                    />

                    <div className="absolute inset-0 bg-accent/0 transition-colors duration-300 group-hover:bg-accent/10" />
                  </div>

                  <div className="flex items-center justify-between gap-2 border-t border-line px-3 py-2.5 transition-colors group-hover:bg-surface-2 sm:px-4 sm:py-3">
                    <span className="font-display truncate text-base leading-snug tracking-wide sm:text-[16px]">
                      {stripPrefix(work.title)}
                    </span>
                    <span className="tech-label shrink-0 text-[10px] text-muted transition-colors group-hover:text-accent sm:text-[11px]">
                      View →
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </Masonry>
        )}

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="group relative z-10 flex items-center gap-3 border border-accent bg-background px-8 py-4 transition-colors hover:bg-surface-2"
            >
              <span className="tech-label text-[11px] text-foreground transition-colors group-hover:text-accent">
                See more
              </span>
              <span className="tech-label text-[10px] text-muted">
                {shown.length} / {artworks.length}
              </span>
            </button>
          </div>
        )}
        {lightbox && (
          <Lightbox
            src={lightbox.src}
            alt={lightbox.alt}
            onClose={() => setLightbox(null)}
          />
        )}
      </div>
    </section>
  );
}
