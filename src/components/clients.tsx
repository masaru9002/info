import { useState, useEffect, useRef } from "react";
import { Reveal } from "./reveal";
import { API_URL, FALLBACK_AVATAR } from "../App";

type Status = "Queued" | "Ongoing" | "Done" | "Cancelled" | "Open";

type Client = {
  avatar: string;
  name: string;
  date: string;
  type: string;
  status: Status;
} | null;

type CommissionStatus = {
  openSlots: number;
  isOpen: boolean;
  message: string;
  clients: Client[];
};

function parseDate(raw: string | undefined | null): string {
  if (!raw || !raw.trim()) return "—";
  const parts = raw.split("/");
  if (parts.length !== 3) return raw;
  const [m, d, y] = parts;
  return `${d.padStart(2, "0")}/${m.padStart(2, "0")}/${y}`;
}

const STATUS_STYLES: Record<Status, string> = {
  Open: "text-muted-2 border-line",
  Queued: "text-muted border-line",
  Ongoing: "text-accent border-accent",
  Done: "text-foreground border-foreground/40",
  Cancelled: "text-muted-2 border-line",
};

const STATUS_DOT: Record<Status, string> = {
  Open: "bg-muted-2",
  Queued: "bg-muted",
  Ongoing: "bg-accent animate-pulse",
  Done: "bg-foreground",
  Cancelled: "bg-muted-2",
};

function AvatarCell({ src }: { src: string }) {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK_AVATAR);

  useEffect(() => {
    setImgSrc(src || FALLBACK_AVATAR);
  }, [src]);

  return (
    <div className="hidden h-11 w-11 shrink-0 border border-line bg-surface-2 overflow-hidden sm:block">
      <img
        src={imgSrc}
        alt=""
        className="h-full w-full object-cover"
        onError={() => setImgSrc(FALLBACK_AVATAR)}
      />
    </div>
  );
}

export function Clients() {
  const [data, setData] = useState<CommissionStatus | null>(null);
  const [error, setError] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch(`${API_URL}/commission-status`)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  const slots: (Client & { no: string })[] = data
    ? Array.from({ length: data.openSlots }, (_, i) => {
        const client = data.clients[i];
        if (!client)
          return {
            no: String(i + 1).padStart(2, "0"),
            avatar: "",
            name: "",
            date: "",
            type: "",
            status: "Open" as Status,
          };
        return {
          no: String(i + 1).padStart(2, "0"),
          ...client,
          status: (client.status.charAt(0).toUpperCase() +
            client.status.slice(1).toLowerCase()) as Status,
        };
      })
    : [];

  const filledCount = slots.filter((s) => s.status !== "Open").length;

  return (
    <section
      ref={ref}
      id="clients"
      className="relative border-t border-line px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal stagger={0.1} className="mb-12 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="h-2 w-2 bg-accent" />
          <span className="tech-label text-[14px] text-muted">
            A tip on{" "}
            <a
              href="https://ko-fi.com/sillycat4725"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Ko-fi
            </a>{" "}
            is more than enough! Thank you ❤
          </span>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            className="font-display font-black italic leading-[0.82] tracking-tight md:text-left"
            style={{ fontSize: "clamp(2.5rem, 6vw, 8.5rem)" }}
          >
            COMMISSION
            <br />
            STATUS
          </h2>

          <div className="flex flex-col gap-3 md:items-end">
            <p className="max-w-sm text-right tech-label text-[14px] leading-relaxed">
              {data?.isOpen ? "Commissions Open" : "Commissions Closed"}
            </p>

            <div className="flex items-center gap-5 border border-line bg-surface px-6 py-4">
              <div className="flex flex-col">
                <span className="tech-label text-[10px] text-muted">Slots</span>
                <span className="font-display text-3xl font-black leading-none">
                  <span className="text-accent">{filledCount}</span>
                  <span className="text-muted-2">
                    /{data?.openSlots ?? "—"}
                  </span>
                </span>
              </div>
              <div className="h-10 w-px bg-line" />
              <div className="flex-1 flex flex-col gap-1.5">
                <div className="h-3 w-full bg-surface-2 border border-line">
                  <div
                    className="h-full bg-accent transition-all duration-700"
                    style={{
                      width: data
                        ? `${(filledCount / data.openSlots) * 100}%`
                        : "0%",
                    }}
                  />
                </div>
                <span className="tech-label text-[10px] text-muted-2">
                  {data ? `${data.openSlots - filledCount} open` : "—"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {error && (
        <p className="tech-label text-sm text-accent mb-6">
          Could not fetch the list. Try reloading maybe?
        </p>
      )}

      <Reveal className="border border-line bg-surface/40">
        <div className="hidden grid-cols-[3rem_1fr_1fr_9rem] items-center gap-4 border-b border-line px-6 py-3 tech-label text-[10px] text-muted-2 md:grid">
          <span>No.</span>
          <span>Client</span>
          <span>Commission</span>
          <span className="text-right">Status</span>
        </div>
        {!data &&
          !error &&
          Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-[2.5rem_1fr] items-center gap-4 border-b border-line px-5 py-5 last:border-b-0 md:grid-cols-[3rem_1fr_1fr_9rem] md:px-6"
            >
              <div className="h-7 w-7 animate-pulse bg-surface-2" />
              <div className="flex items-center gap-3">
                <div className="hidden h-11 w-11 shrink-0 animate-pulse bg-surface-2 sm:block" />
                <div className="flex flex-col gap-2">
                  <div className="h-4 w-28 animate-pulse bg-surface-2" />
                  <div className="h-3 w-16 animate-pulse bg-surface-2" />
                </div>
              </div>
              <div className="hidden h-4 w-24 animate-pulse bg-surface-2 md:block" />
              <div className="hidden h-6 w-20 animate-pulse bg-surface-2 md:block md:justify-self-end" />
            </div>
          ))}

        {slots.map((slot) => (
          <div
            key={slot.no}
            className="group grid grid-cols-[2.5rem_1fr] items-center gap-4 border-b border-line px-5 py-5 transition-colors last:border-b-0 hover:bg-surface md:grid-cols-[3rem_1fr_1fr_9rem] md:px-6"
          >
            <span className="font-display text-2xl font-black leading-none text-muted-2 transition-colors group-hover:text-accent md:text-3xl">
              {slot.no}
            </span>

            <div className="flex items-center gap-3">
              {slot.status === "Open" ? (
                <div
                  aria-hidden
                  className="hidden h-11 w-11 shrink-0 border border-line bg-surface-2 sm:block"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, transparent 0 6px, var(--surface) 6px 7px)",
                  }}
                />
              ) : (
                <AvatarCell src={slot.avatar} />
              )}
              <div className="flex flex-col">
                <span className="font-display text-xl leading-none tracking-wide md:text-2xl">
                  {slot.status === "Open" ? (
                    <span className="text-muted-2">Open Slot</span>
                  ) : (
                    slot.name
                  )}
                </span>
                {slot.status !== "Open" && (
                  <span className="mt-1 tech-label text-[10px] text-muted">
                    {parseDate(slot.date)}
                  </span>
                )}
              </div>
            </div>

            <div className="col-start-2 flex flex-col md:col-start-3">
              {slot.status !== "Open" && (
                <span className="text-sm font-medium uppercase tracking-wide text-foreground/90">
                  {slot.type}
                </span>
              )}
            </div>

            <div className="col-start-2 md:col-start-4 md:justify-self-end">
              <span
                className={`inline-flex items-center gap-2 border px-3 py-1.5 tech-label text-[14px] ${STATUS_STYLES[slot.status]}`}
              >
                <span className={`h-1.5 w-1.5 ${STATUS_DOT[slot.status]}`} />
                {slot.status}
              </span>
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-6 flex items-center justify-between tech-label text-[14px] text-neutral-400">
        <span>Message from artist: {data?.message}</span>
      </Reveal>

      <Reveal className="mt-6 flex items-center gap-3">
        <button
          type="button"
          className="group flex items-center gap-3 border border-line bg-surface px-6 py-3 transition-colors hover:border-line cursor-not-allowed"
        >
          <span className="tech-label text-[14px] text-muted-2">
            Order History (Coming soon)
          </span>
        </button>
      </Reveal>

      <Reveal className="mt-3 border border-line bg-surface/40 px-6 py-6 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="tech-label text-[16px] text-accent">
            Pricing (Tax Included)
          </span>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-4">
            {[
              { type: "Half Body (No Render)", price: "~$25" },
              { type: "Half Body (Full Render)", price: "~$40" },
              { type: "Full Body (No Render)", price: "~$35" },
              { type: "Full Body (Full Render)", price: "~$60" },
            ].map((item) => (
              <div
                key={item.type}
                className="flex flex-col border-b border-line pb-2"
              >
                <span className="tech-label text-[14px] text-muted">
                  {item.type}
                </span>
                <span className="font-display text-[24px] font-black">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="tech-label text-[16px] text-accent">
            Key Information
          </span>
          <ul className="text-pretty text-[18px] text-muted leading-relaxed list-none space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-accent">✧</span>
              <span>
                <span className="underline">
                  I have to talk out the details with you first before payment,
                  then add you to the queue above!
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">✧</span>
              <span>
                Payment via PayPal or Ko-fi. 50% upfront, 50% on completion (can
                discuss into sketch-first)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">✧</span>
              <span>
                Prices are <span className="underline">NOT FINAL!</span> Can
                vary based on complexity, background, number of characters,
                NSFW, etc. (applies to icons/emotes as well)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">✧</span>
              <span>
                I rarely draw men but I will try if needed; can't draw furry and
                kemono (with a few exceptions, can be discussed)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">✧</span>
              <span>
                I'm pretty chill about these terms, we can discuss what works
                best for you over Email or Discord~
              </span>
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
