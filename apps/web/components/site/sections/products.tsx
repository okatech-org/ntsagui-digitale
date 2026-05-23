"use client";

import { useLang } from "../lang-provider";
import { OKA, pick } from "../../../lib/content";
import { Icon } from "../icons";
import { Reveal } from "../motion";

export function Products() {
  const { lang } = useLang();
  const tags = ["PRODUIT PHARE", "OBSERVABILITÉ", "AI LAYER"];

  return (
    <section className="mx-auto max-w-[1280px] px-7 pt-24">
      <div className="mb-3 font-mono text-[11px] uppercase tracking-[1px] text-muted-foreground">
        — {lang === "fr" ? "Produits Ntsagui Digitale" : "Ntsagui Digitale products"}
      </div>
      <h2 className="m-0 mb-9 max-w-[800px] font-sans text-[clamp(32px,4.5vw,48px)] font-medium leading-[1.05] tracking-[-1.4px]">
        {lang === "fr"
          ? "Trois produits dans le même cadre."
          : "Three products in the same frame."}
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {OKA.products.map((p, i) => {
          const inverted = i === 0;
          return (
            <Reveal key={p.id} delay={i * 0.06}>
              <article
                className={`flex h-full min-h-[220px] flex-col justify-between rounded-xl border p-6 ${
                  inverted
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-card-foreground"
                }`}
              >
                <div>
                  <div
                    className={`mb-4 inline-flex rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.6px] ${
                      inverted
                        ? "bg-primary-foreground/10 text-primary-foreground"
                        : "bg-accent-soft text-accent"
                    }`}
                  >
                    {tags[i]}
                  </div>
                  <h3 className="m-0 mb-2.5 font-sans text-[22px] font-semibold tracking-[-0.4px]">
                    {p.name}
                  </h3>
                  <p
                    className={`m-0 text-[14px] leading-[1.55] ${
                      inverted
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {pick(p.body, lang) as string}
                  </p>
                </div>
                <a
                  href="#"
                  className={`mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.6px] ${
                    inverted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {lang === "fr" ? "Découvrir" : "Discover"}
                  <Icon.arrowR s={10} />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
