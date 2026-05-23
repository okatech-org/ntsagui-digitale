"use client";

import { useTheme } from "../theme-provider";
import { useLang } from "../lang-provider";
import { OKA, pick, type Lang } from "../../../lib/content";
import { Icon } from "../icons";

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  const { lang, setLang } = useLang();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-7 sm:py-3.5">
        <a href="#" className="flex items-center gap-2 sm:gap-2.5">
          <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-[5px] bg-primary text-primary-foreground font-mono text-[12px] font-semibold">
            N
          </span>
          <span className="font-sans text-[15px] font-semibold tracking-[-0.2px]">
            ntsagui
          </span>
          <span className="ml-1 hidden font-mono text-[11px] text-muted-foreground sm:inline">
            / studio
          </span>
        </a>

        <nav className="hidden gap-1 md:flex">
          {OKA.nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-md px-3 py-2 font-sans text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {pick(n.label, lang) as string}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <div className="hidden overflow-hidden rounded-md border border-border-soft sm:flex">
            {(["fr", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1.5 font-mono text-[11px] uppercase transition-colors ${
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={lang === l}
                aria-label={`Switch language to ${l.toUpperCase()}`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            aria-label={`Switch language to ${lang === "fr" ? "EN" : "FR"}`}
            className="inline-flex h-8 items-center rounded-md border border-border-soft px-2 font-mono text-[11px] uppercase text-muted-foreground transition-colors hover:text-foreground sm:hidden"
          >
            {lang}
          </button>

          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Activer thème clair" : "Activer thème sombre"}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border-soft text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.5 2.5l1 1M10.5 10.5l1 1M2.5 11.5l1-1M10.5 3.5l1-1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M11.5 8.5A4.5 4.5 0 0 1 5.5 2.5a4.5 4.5 0 1 0 6 6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 font-sans text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:px-3.5"
            aria-label={pick(OKA.hero.primary, lang) as string}
          >
            <span className="hidden sm:inline">
              {pick(OKA.hero.primary, lang) as string}
            </span>
            <Icon.arrow s={11} />
          </a>
        </div>
      </div>
    </header>
  );
}
