"use client";

import { useLang } from "../lang-provider";
import { OKA, pick } from "../../../lib/content";
import { Icon } from "../icons";
import { Reveal } from "../motion";

export function Hero() {
  const { lang } = useLang();
  const h = OKA.hero;

  return (
    <section className="mx-auto max-w-[1280px] px-5 pb-6 pt-12 sm:px-7 md:pb-8 md:pt-20">
      <Reveal>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 font-mono text-[11px] font-medium text-accent md:mb-7">
          <Icon.dot s={6} />
          {pick(h.super, lang) as string}
        </div>
      </Reveal>

      <h1 className="m-0 max-w-[1000px] font-sans text-[clamp(40px,10vw,96px)] font-medium leading-[1] tracking-[-1.5px] sm:leading-[0.98] sm:tracking-[-2px] md:tracking-[-3px]">
        <span>{pick(h.line1, lang) as string} </span>
        <span className="text-foreground/40">
          {pick(h.line2, lang) as string}{" "}
        </span>
        <span>{pick(h.line3, lang) as string}</span>
      </h1>

      <p className="mb-7 mt-6 max-w-[640px] text-[16px] leading-[1.55] text-muted-foreground md:mb-9 md:mt-8 md:text-[18px]">
        {pick(h.sub, lang) as string}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 rounded-lg bg-primary px-4 py-3 font-sans text-[14px] font-medium text-primary-foreground transition-opacity hover:opacity-90 md:px-4.5"
        >
          {pick(h.primary, lang) as string}
          <Icon.arrow s={12} />
        </a>
        <a
          href="#resultats"
          className="inline-flex items-center gap-2.5 rounded-lg border border-border-soft bg-transparent px-4 py-3 font-sans text-[14px] font-medium text-foreground transition-colors hover:bg-muted md:px-4.5"
        >
          {pick(h.secondary, lang) as string}
          <Icon.arrowR s={12} />
        </a>
        <span className="flex items-center gap-2 font-mono text-[12px] text-muted-foreground sm:ml-3">
          <span
            className="h-[7px] w-[7px] rounded-full bg-success"
            style={{ boxShadow: "0 0 0 4px var(--success-glow)" }}
          />
          {pick(h.availability, lang) as string}
        </span>
      </div>

      <div className="mt-10 grid gap-4 md:mt-16 lg:grid-cols-[1.05fr_1fr]">
        <CodeCard lang={lang} />
        <TerminalCard />
      </div>
    </section>
  );
}

function CodeCard({ lang }: { lang: "fr" | "en" }) {
  return (
    <div
      className="overflow-hidden rounded-xl border border-border bg-card"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div className="flex items-center justify-between border-b border-border bg-muted px-3.5 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E66363]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5B963]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#7CC272]" />
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">
          integrate.ts
        </span>
        <span className="font-mono text-[11px] text-muted-foreground">
          typescript
        </span>
      </div>
      <pre className="m-0 overflow-x-auto whitespace-pre p-5 font-mono text-[13.5px] leading-[1.7] text-foreground">
        <span className="text-syntax-keyword">import</span>{" "}
        <span>{`{ Ntsagui }`}</span>{" "}
        <span className="text-syntax-keyword">from</span>{" "}
        <span className="text-syntax-string">{`"@ntsagui/stack"`}</span>
        {";\n\n"}
        <span className="text-muted-foreground">
          {"// "}
          {lang === "fr"
            ? "Architect → Integrate → Automate"
            : "Architect → Integrate → Automate"}
        </span>
        {"\n"}
        <span className="text-syntax-keyword">const</span>
        {" service "}
        <span className="text-accent">{"="}</span>
        {" Ntsagui"}
        {"\n  ."}
        <span className="text-accent">architect</span>
        {"({"}
        {"\n    domain: "}
        <span className="text-syntax-string">{`"clinical-ops"`}</span>
        {",\n    region: "}
        <span className="text-syntax-string">{`"eu-west-3"`}</span>
        {"\n  })\n  ."}
        <span className="text-accent">integrate</span>
        {"(["}
        <span className="text-syntax-string">{`"hubspot"`}</span>
        {", "}
        <span className="text-syntax-string">{`"sap"`}</span>
        {"])\n  ."}
        <span className="text-accent">automate</span>
        {"({ copilots: "}
        <span className="text-syntax-bool">true</span>
        {" });\n\n"}
        <span className="text-syntax-keyword">await</span>
        {" service."}
        <span className="text-accent">ship</span>
        {"();"}
      </pre>
    </div>
  );
}

function TerminalCard() {
  return (
    <div
      className="overflow-hidden rounded-xl border border-border-soft"
      style={{ background: "var(--terminal-bg)", color: "var(--terminal-fg)" }}
    >
      <div
        className="flex items-center justify-between border-b px-3.5 py-2.5"
        style={{ borderColor: "rgb(232 229 220 / 0.1)" }}
      >
        <span
          className="font-mono text-[11px]"
          style={{ color: "var(--terminal-dim)" }}
        >
          ntsagui ▸ run
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-[7px] w-[7px] rounded-full bg-[#7CC272]" />
          <span
            className="font-mono text-[10px]"
            style={{ color: "var(--terminal-dim)" }}
          >
            live
          </span>
        </span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-[1.8]">
        <div style={{ color: "var(--terminal-dim)" }}>
          $ ntsagui build --domain clinical-ops
        </div>
        <div style={{ color: "#7CC272" }}>
          ✓{" "}
          <span style={{ color: "var(--terminal-mid)" }}>schema.compile</span>
          {"            "}142ms
        </div>
        <div style={{ color: "#7CC272" }}>
          ✓ <span style={{ color: "var(--terminal-mid)" }}>service.deploy</span>
          {"            "}eu-west-3
        </div>
        <div style={{ color: "#7CC272" }}>
          ✓{" "}
          <span style={{ color: "var(--terminal-mid)" }}>integrations: 2/2</span>
          {"         "}hubspot · sap
        </div>
        <div style={{ color: "#E5B963" }}>
          ↻{" "}
          <span style={{ color: "var(--terminal-mid)" }}>copilot.bootstrap</span>
          {"         "}skills 4/4
        </div>
        <div style={{ color: "#7CC272" }}>
          ✓ <span style={{ color: "var(--terminal-mid)" }}>signal: ready</span>
          {"             "}
          <span className="text-accent">https://app.lattice.health</span>
        </div>
        <div className="mt-2.5" style={{ color: "var(--terminal-dim)" }}>
          ${" "}
          <span
            style={{
              background: "rgb(232 229 220 / 0.18)",
              padding: "0 2px",
            }}
          >
            &nbsp;
          </span>
        </div>
      </div>
    </div>
  );
}
