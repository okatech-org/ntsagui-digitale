"use client";

import { useLang } from "../lang-provider";
import { OKA, pick } from "../../../lib/content";
import { Reveal } from "../motion";

export function Situations() {
  const { lang } = useLang();

  return (
    <section
      id="approche"
      className="mx-auto max-w-[1280px] px-7 pt-24"
    >
      <div className="mb-3 font-mono text-[11px] uppercase tracking-[1px] text-muted-foreground">
        — {lang === "fr" ? "Situations" : "Situations"}
      </div>
      <h2 className="m-0 mb-9 max-w-[800px] font-sans text-[clamp(32px,4.5vw,48px)] font-medium leading-[1.05] tracking-[-1.4px]">
        {lang === "fr" ? "Quand intervenir." : "When we step in."}
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {OKA.situations.map((s, i) => (
          <Reveal key={pick(s.title, lang) as string} delay={i * 0.06}>
            <article className="flex h-full min-h-[240px] flex-col justify-between rounded-xl border border-border bg-card p-6">
              <span className="self-start rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[10px] tracking-[0.6px] text-accent">
                {(pick(s.tag, lang) as string).toUpperCase()}
              </span>
              <div>
                <h3 className="m-0 mb-2 mt-4 font-sans text-[20px] font-semibold tracking-[-0.4px]">
                  {pick(s.title, lang) as string}
                </h3>
                <p className="m-0 text-[14px] leading-[1.55] text-muted-foreground">
                  {pick(s.body, lang) as string}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
