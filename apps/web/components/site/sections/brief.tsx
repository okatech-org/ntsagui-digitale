"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@repo/backend/convex/_generated/api";
import { useLang } from "../lang-provider";
import { OKA, pick } from "../../../lib/content";
import { Icon } from "../icons";

type Status = "idle" | "sending" | "sent" | "error";

export function Brief() {
  const { lang } = useLang();
  const submit = useMutation(api.briefs.submit);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [context, setContext] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !context.trim()) return;
    setStatus("sending");
    try {
      await submit({ name: name.trim(), email: email.trim(), context: context.trim() });
      setStatus("sent");
      setName("");
      setEmail("");
      setContext("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-7 pt-24">
      <div className="grid gap-12 rounded-2xl border border-border bg-card p-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[1px] text-muted-foreground">
            — {lang === "fr" ? "Brief express" : "Express brief"}
          </div>
          <h2 className="m-0 mb-4 font-sans text-[clamp(28px,3.8vw,44px)] font-medium leading-[1.05] tracking-[-1.2px]">
            {pick(OKA.briefTitle, lang) as string}
          </h2>
          <p className="m-0 mb-6 text-[16px] leading-[1.55] text-muted-foreground">
            {pick(OKA.briefBody, lang) as string}
          </p>
          <ul className="m-0 list-none p-0">
            {OKA.briefBullets[lang].map((b) => (
              <li
                key={b}
                className="flex gap-3 border-t border-dashed border-border-soft py-2.5 text-[14px] leading-[1.55] text-foreground"
              >
                <span className="mt-1.5 text-accent">
                  <Icon.dot s={6} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 rounded-xl bg-muted p-6"
        >
          <Field
            label={lang === "fr" ? "Nom & société" : "Name & company"}
            placeholder="Hélène Dubois — Lattice Health"
            value={name}
            onChange={setName}
            required
          />
          <Field
            label="Email"
            type="email"
            placeholder="helene@lattice.health"
            value={email}
            onChange={setEmail}
            required
          />
          <Field
            label={lang === "fr" ? "Contexte" : "Context"}
            placeholder={
              lang === "fr"
                ? "Coordination clinique multi-sites…"
                : "Multi-site clinical coordination…"
            }
            value={context}
            onChange={setContext}
            required
            textarea
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-1.5 inline-flex items-center justify-center gap-2.5 rounded-lg bg-primary px-4 py-3 font-sans text-[14px] font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending"
              ? lang === "fr"
                ? "Envoi…"
                : "Sending…"
              : status === "sent"
                ? lang === "fr"
                  ? "Reçu, merci"
                  : "Received, thanks"
                : lang === "fr"
                  ? "Envoyer le brief"
                  : "Send the brief"}
            <Icon.arrow s={12} />
          </button>

          {status === "error" && (
            <p className="m-0 font-mono text-[11px] text-destructive">
              {lang === "fr"
                ? "Erreur d'envoi. Réessayez."
                : "Submission failed. Try again."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const cls =
    "rounded-lg border border-border-soft bg-card px-3 py-2.5 font-sans text-[14px] text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[11px] uppercase tracking-[0.6px] text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea
          required={required}
          rows={4}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${cls} resize-y`}
        />
      ) : (
        <input
          required={required}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      )}
    </label>
  );
}
