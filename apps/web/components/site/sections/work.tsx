"use client";

import { useLang } from "../lang-provider";
import { pick, type I18n } from "../../../lib/content";
import { Icon } from "../icons";
import { Reveal } from "../motion";

export type WorkProject = {
  _id: string;
  n: string;
  client: string;
  kind: string;
  title: I18n;
  kpiValue: string;
  kpiLabel: I18n;
  href?: string;
};

export function Work({ projects }: { projects: WorkProject[] }) {
  const { lang } = useLang();

  return (
    <section
      id="resultats"
      className="mx-auto max-w-[1280px] px-5 pt-16 sm:px-7 md:pt-24"
    >
      <div className="mb-7 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[1px] text-muted-foreground">
            — {lang === "fr" ? "Travaux" : "Work"}
          </div>
          <h2 className="m-0 font-sans text-[clamp(26px,4.5vw,48px)] font-medium leading-[1.05] tracking-[-1px] sm:tracking-[-1.4px]">
            {lang === "fr"
              ? "Produits livrés en production."
              : "Products shipped in production."}
          </h2>
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border-soft bg-card p-8 text-center text-[14px] text-muted-foreground">
          {lang === "fr"
            ? "Aucun projet publié pour le moment."
            : "No published projects yet."}
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          {projects.map((w, i) => (
            <Reveal key={w._id} delay={i * 0.04}>
              <a
                href={w.href ?? "#"}
                className={`block transition-colors hover:bg-muted/40 ${
                  i === 0 ? "" : "border-t border-border"
                }`}
                {...(w.href
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {/* Mobile layout */}
                <div className="flex flex-col gap-3 px-5 py-4 md:hidden">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      // {w.n}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {w.kind}
                    </span>
                  </div>
                  <div>
                    <div className="font-sans text-[15px] font-semibold leading-snug text-foreground">
                      {w.client}
                    </div>
                    <div className="mt-1 font-sans text-[14px] leading-snug text-muted-foreground">
                      {pick(w.title, lang) as string}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-sans text-[18px] font-semibold leading-none text-accent">
                        {w.kpiValue}
                      </span>
                      <span className="ml-2 font-mono text-[10px] tracking-[0.6px] text-muted-foreground">
                        {(pick(w.kpiLabel, lang) as string).toUpperCase()}
                      </span>
                    </div>
                    <Icon.arrowR s={13} c="var(--muted-foreground)" />
                  </div>
                </div>

                {/* Desktop grid layout */}
                <div
                  className="hidden items-center gap-6 px-6 py-5 md:grid"
                  style={{
                    gridTemplateColumns:
                      "60px minmax(160px,240px) 1fr 200px 140px 32px",
                  }}
                >
                  <span className="font-mono text-[11px] text-muted-foreground">
                    // {w.n}
                  </span>
                  <span className="font-sans text-[14px] font-semibold text-foreground">
                    {w.client}
                  </span>
                  <span className="font-sans text-[15px] text-muted-foreground">
                    {pick(w.title, lang) as string}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {w.kind}
                  </span>
                  <div>
                    <div className="font-sans text-[18px] font-semibold leading-none text-accent">
                      {w.kpiValue}
                    </div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.6px] text-muted-foreground">
                      {(pick(w.kpiLabel, lang) as string).toUpperCase()}
                    </div>
                  </div>
                  <Icon.arrowR s={13} c="var(--muted-foreground)" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
