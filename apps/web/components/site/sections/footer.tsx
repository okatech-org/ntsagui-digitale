"use client";

import { useLang } from "../lang-provider";
import { OKA, pick } from "../../../lib/content";

export function SiteFooter() {
  const { lang } = useLang();

  const columns = [
    {
      title: lang === "fr" ? "Studio" : "Studio",
      links: ["Manifeste", "Méthode", "Équipe", "Recrutement"],
    },
    {
      title: "Produits",
      links: [
        "Okatech Stack",
        "Okatech Atlas",
        "Okatech Signal",
        "Changelog",
      ],
    },
    {
      title: "Contact",
      links: [OKA.email, OKA.phone, pick(OKA.location, lang) as string],
    },
  ];

  return (
    <footer className="mx-auto mt-24 max-w-[1280px] border-t border-border px-7 pb-8 pt-10">
      <div className="grid gap-8 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3.5 flex items-center gap-2.5">
            <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-[5px] bg-primary text-primary-foreground font-mono text-[12px] font-semibold">
              O
            </span>
            <span className="font-sans text-[15px] font-semibold">okatech</span>
          </div>
          <p className="m-0 max-w-[320px] text-[13px] leading-[1.55] text-muted-foreground">
            {lang === "fr"
              ? "Studio produit basé à Paris. Architect • Integrate • Automate."
              : "Product studio based in Paris. Architect • Integrate • Automate."}
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.6px] text-muted-foreground">
              {col.title}
            </div>
            {col.links.map((x) => (
              <a
                key={x}
                href="#"
                className="block py-1 font-sans text-[13px] text-foreground no-underline transition-colors hover:text-accent"
              >
                {x}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between border-t border-dashed border-border-soft pt-4.5 font-mono text-[11px] text-muted-foreground">
        <span>© Okatech 2026 — build 26.05.r1</span>
        <span>Paris · France</span>
      </div>
    </footer>
  );
}
