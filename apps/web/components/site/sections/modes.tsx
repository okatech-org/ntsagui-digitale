"use client";

import { useLang } from "../lang-provider";
import { OKA, pick } from "../../../lib/content";
import { Icon } from "../icons";
import { Reveal } from "../motion";

export function Modes() {
  const { lang } = useLang();

  return (
    <section
      id="solutions"
      className="mx-auto max-w-[1280px] px-7 pt-24"
    >
      <div className="mb-3 font-mono text-[11px] uppercase tracking-[1px] text-muted-foreground">
        — {lang === "fr" ? "Modes" : "Modes"}
      </div>
      <h2 className="m-0 mb-9 max-w-[800px] font-sans text-[clamp(32px,4.5vw,48px)] font-medium leading-[1.05] tracking-[-1.4px]">
        {pick(OKA.modesTitle, lang) as string}
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {OKA.modes.map((m, i) => (
          <Reveal key={m.tag} delay={i * 0.08}>
            <article className="h-full rounded-xl border border-border bg-card p-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-muted px-2.5 py-1 font-mono text-[11px] tracking-[0.6px] text-muted-foreground">
                  {m.tag}
                </span>
                <Icon.arrowR s={14} c="var(--muted-foreground)" />
              </div>
              <h3 className="m-0 mb-3 font-sans text-[26px] font-semibold tracking-[-0.6px]">
                {pick(m.title, lang) as string}
              </h3>
              <p className="m-0 mb-5 text-[15px] leading-[1.55] text-muted-foreground">
                {pick(m.body, lang) as string}
              </p>
              <ul className="m-0 list-none p-0">
                {m.bullets[lang].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 border-t border-dashed border-border-soft py-2.5 text-[14px] leading-[1.5] text-foreground"
                  >
                    <span className="mt-1.5 text-accent">
                      <Icon.dot s={6} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
