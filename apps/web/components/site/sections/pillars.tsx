"use client";

import { useLang } from "../lang-provider";
import { OKA, pick } from "../../../lib/content";
import { Icon } from "../icons";
import { Reveal, SpotlightCard } from "../motion";

export function Pillars() {
  const { lang } = useLang();
  const PillarIcons = [Icon.cube, Icon.plug, Icon.bolt];

  return (
    <section
      id="expertises"
      className="mx-auto max-w-[1280px] px-7 pt-20"
    >
      <div className="mb-3 font-mono text-[11px] uppercase tracking-[1px] text-muted-foreground">
        — {lang === "fr" ? "Trois piliers" : "Three pillars"}
      </div>
      <h2 className="m-0 mb-12 max-w-[900px] font-sans text-[clamp(36px,5vw,56px)] font-medium leading-[1.05] tracking-[-1.6px]">
        {lang === "fr"
          ? "Un même cadre d'exécution pour architecturer, connecter et automatiser."
          : "A single execution framework to architect, connect and automate."}
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {OKA.pillars.map((p, i) => {
          const I = PillarIcons[i]!;
          return (
            <Reveal key={p.id} delay={i * 0.06}>
              <SpotlightCard
                color="var(--accent-soft)"
                className="flex h-full min-h-[380px] flex-col gap-5 rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <I s={18} />
                </div>
                <div>
                  <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.6px] text-muted-foreground">
                    {(pick(p.kicker, lang) as string).toUpperCase()}
                  </div>
                  <h3 className="m-0 mb-2.5 font-sans text-[24px] font-semibold tracking-[-0.6px]">
                    {pick(p.title, lang) as string}
                  </h3>
                  <p className="m-0 text-[14px] leading-[1.55] text-muted-foreground">
                    {pick(p.body, lang) as string}
                  </p>
                </div>
                <div className="mt-auto border-t border-dashed border-border-soft pt-4">
                  {p.links[lang].map((line) => (
                    <div
                      key={line}
                      className="flex items-center justify-between py-2 text-[13px] text-foreground"
                    >
                      <span>{line}</span>
                      <Icon.arrowR s={11} c="var(--muted-foreground)" />
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
