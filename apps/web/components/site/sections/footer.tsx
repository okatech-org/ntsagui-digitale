"use client";

import { useLang } from "../lang-provider";
import { OKA, pick } from "../../../lib/content";

export function SiteFooter() {
  const { lang } = useLang();
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pick(OKA.location, lang) as string)}`;
  const telHref = `tel:${OKA.phone.replace(/[^+\d]/g, "")}`;

  return (
    <footer className="mx-auto mt-16 max-w-[1280px] border-t border-border px-5 pb-8 pt-10 md:mt-24 md:px-7">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <div className="mb-3.5 flex items-center gap-2.5">
            <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-[5px] bg-primary text-primary-foreground font-mono text-[12px] font-semibold">
              N
            </span>
            <span className="font-sans text-[15px] font-semibold">ntsagui</span>
          </div>
          <p className="m-0 max-w-[360px] text-[13px] leading-[1.55] text-muted-foreground">
            {lang === "fr"
              ? "Studio produit indépendant basé à Paris. 6 ans à concevoir, livrer et opérer des plateformes SaaS."
              : "Independent product studio based in Paris. 6 years designing, shipping and operating SaaS platforms."}
          </p>
        </div>
        <div className="md:justify-self-end">
          <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.6px] text-muted-foreground">
            Contact
          </div>
          <ul className="m-0 list-none space-y-1 p-0">
            <li>
              <a
                href={`mailto:${OKA.email}`}
                className="block font-sans text-[13px] text-foreground no-underline transition-colors hover:text-accent"
              >
                {OKA.email}
              </a>
            </li>
            <li>
              <a
                href={telHref}
                className="block font-sans text-[13px] text-foreground no-underline transition-colors hover:text-accent"
              >
                {OKA.phone}
              </a>
            </li>
            <li>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-sans text-[13px] text-foreground no-underline transition-colors hover:text-accent"
              >
                {pick(OKA.location, lang) as string}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-between gap-2 border-t border-dashed border-border-soft pt-4.5 font-mono text-[11px] text-muted-foreground sm:flex-row">
        <span>© Ntsagui Digitale {new Date().getFullYear()}</span>
        <span>Paris · France</span>
      </div>
    </footer>
  );
}
