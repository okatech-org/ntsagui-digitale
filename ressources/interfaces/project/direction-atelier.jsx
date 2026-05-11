// Direction A — "Linear" — light, Stripe/Linear-clean. Indigo accent.
// Inspired by startget.tech: 3-pillar messaging, code & terminal blocks,
// lowercase titles, calm density.

const L = {
  bg: "#FBFAF7",
  panel: "#FFFFFF",
  panelAlt: "#F4F2EC",
  ink: "#0D0D0C",
  ink70: "rgba(13,13,12,0.66)",
  ink40: "rgba(13,13,12,0.4)",
  ink15: "rgba(13,13,12,0.13)",
  ink08: "rgba(13,13,12,0.07)",
  accent: "#4F46E5",
  accentSoft: "rgba(79,70,229,0.10)",
};

const sansL = { fontFamily: "'Geist', 'Inter Tight', system-ui, sans-serif" };
const monoL = { fontFamily: "'Geist Mono', 'JetBrains Mono', ui-monospace, monospace" };

function LBase({ children }) {
  return (
    <div style={{
      width: "100%", minHeight: "100%", background: L.bg, color: L.ink,
      ...sansL, fontSize: 15, lineHeight: 1.55, fontWeight: 400,
    }}>{children}</div>
  );
}

function LHeader({ lang, setLang }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(251,250,247,0.85)", backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${L.ink08}`,
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "14px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            width: 22, height: 22, borderRadius: 5,
            background: L.ink, color: L.bg,
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            ...monoL, fontSize: 12, fontWeight: 600,
          }}>O</span>
          <span style={{ ...sansL, fontWeight: 600, fontSize: 15, letterSpacing: -0.2 }}>okatech</span>
          <span style={{ ...monoL, fontSize: 11, color: L.ink40, marginLeft: 4 }}>/ studio</span>
        </div>
        <nav style={{ display: "flex", gap: 4 }}>
          {OKA.nav.map(n => (
            <a key={n.id} href={`#${n.id}`} style={{
              ...sansL, fontSize: 13, color: L.ink70, textDecoration: "none",
              padding: "8px 12px", borderRadius: 6,
            }}>{pick(n.label, lang)}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            display: "flex", border: `1px solid ${L.ink15}`, borderRadius: 6, overflow: "hidden",
          }}>
            {["fr","en"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                background: lang === l ? L.ink : "transparent",
                color: lang === l ? L.bg : L.ink70,
                border: "none", padding: "5px 9px", cursor: "pointer",
                ...monoL, fontSize: 11, textTransform: "uppercase",
              }}>{l}</button>
            ))}
          </div>
          <button style={{
            background: L.ink, color: L.bg, border: "none", borderRadius: 6,
            padding: "8px 14px", cursor: "pointer",
            ...sansL, fontWeight: 500, fontSize: 13,
            display: "flex", alignItems: "center", gap: 8,
          }}>
            {pick(OKA.hero.primary, lang)} <Icon.arrow s={11} c={L.bg} />
          </button>
        </div>
      </div>
    </header>
  );
}

function LHero({ lang }) {
  const h = OKA.hero;
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 28px 32px" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: L.accentSoft, color: L.accent, padding: "5px 12px", borderRadius: 99,
        ...monoL, fontSize: 11, fontWeight: 500, marginBottom: 28,
      }}>
        <Icon.dot s={6} c={L.accent} /> {pick(h.super, lang)}
      </div>

      <h1 style={{
        ...sansL, fontWeight: 500, fontSize: 96, lineHeight: 0.98, letterSpacing: -3,
        margin: 0, maxWidth: 1000,
      }}>
        <span>{pick(h.line1, lang)} </span>
        <span style={{ color: L.ink40 }}>{pick(h.line2, lang)} </span>
        <span>{pick(h.line3, lang)}</span>
      </h1>

      <p style={{
        margin: "32px 0 36px", maxWidth: 640,
        fontSize: 18, lineHeight: 1.55, color: L.ink70,
      }}>{pick(h.sub, lang)}</p>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button style={{
          background: L.ink, color: L.bg, border: "none", borderRadius: 8,
          padding: "12px 18px", cursor: "pointer",
          ...sansL, fontWeight: 500, fontSize: 14,
          display: "flex", alignItems: "center", gap: 10,
        }}>{pick(h.primary, lang)} <Icon.arrow s={12} c={L.bg} /></button>
        <button style={{
          background: "transparent", color: L.ink, border: `1px solid ${L.ink15}`, borderRadius: 8,
          padding: "12px 18px", cursor: "pointer",
          ...sansL, fontWeight: 500, fontSize: 14,
          display: "flex", alignItems: "center", gap: 10,
        }}>{pick(h.secondary, lang)} <Icon.arrowR s={12} /></button>
        <span style={{ ...monoL, fontSize: 12, color: L.ink40, marginLeft: 12, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: 99, background: "#22A06B", boxShadow: "0 0 0 4px rgba(34,160,107,0.15)" }} />
          {pick(h.availability, lang)}
        </span>
      </div>

      {/* code + terminal preview */}
      <div style={{
        marginTop: 64,
        display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 16,
      }}>
        <CodeCard lang={lang} />
        <TerminalCard lang={lang} />
      </div>
    </section>
  );
}

function CodeCard({ lang }) {
  return (
    <div style={{
      background: L.panel, border: `1px solid ${L.ink08}`, borderRadius: 12, overflow: "hidden",
      boxShadow: "0 1px 0 rgba(13,13,12,0.04), 0 12px 32px -16px rgba(13,13,12,0.12)",
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 14px", borderBottom: `1px solid ${L.ink08}`, background: L.panelAlt,
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: 99, background: "#E66363" }}/>
          <span style={{ width: 10, height: 10, borderRadius: 99, background: "#E5B963" }}/>
          <span style={{ width: 10, height: 10, borderRadius: 99, background: "#7CC272" }}/>
        </div>
        <span style={{ ...monoL, fontSize: 11, color: L.ink40 }}>integrate.ts</span>
        <span style={{ ...monoL, fontSize: 11, color: L.ink40 }}>typescript</span>
      </div>
      <pre style={{
        margin: 0, padding: 20, ...monoL, fontSize: 13.5, lineHeight: 1.7,
        color: L.ink, whiteSpace: "pre", overflowX: "auto",
      }}>
        <span style={{ color: "#8859BB" }}>import</span>{" "}<span style={{ color: L.ink }}>{`{ Okatech }`}</span>{" "}<span style={{ color: "#8859BB" }}>from</span>{" "}<span style={{ color: "#22A06B" }}>"@okatech/stack"</span>{";\n\n"}
        <span style={{ color: L.ink40 }}>// {lang === "fr" ? "Architect → Integrate → Automate" : "Architect → Integrate → Automate"}</span>{"\n"}
        <span style={{ color: "#8859BB" }}>const</span>{" service "}<span style={{ color: L.accent }}>{"="}</span>{" Okatech"}{"\n"}
        {"  ."}<span style={{ color: L.accent }}>architect</span>{"({"}{"\n"}
        {"    domain: "}<span style={{ color: "#22A06B" }}>"clinical-ops"</span>{",\n"}
        {"    region: "}<span style={{ color: "#22A06B" }}>"eu-west-3"</span>{"\n"}
        {"  })\n"}
        {"  ."}<span style={{ color: L.accent }}>integrate</span>{"(["}<span style={{ color: "#22A06B" }}>"hubspot"</span>{", "}<span style={{ color: "#22A06B" }}>"sap"</span>{"])\n"}
        {"  ."}<span style={{ color: L.accent }}>automate</span>{"({ copilots: "}<span style={{ color: "#C45A2E" }}>true</span>{" });\n\n"}
        <span style={{ color: "#8859BB" }}>await</span>{" service."}<span style={{ color: L.accent }}>ship</span>{"();"}
      </pre>
    </div>
  );
}

function TerminalCard({ lang }) {
  return (
    <div style={{
      background: "#0E0E0C", color: "#E8E5DC", border: `1px solid ${L.ink15}`, borderRadius: 12, overflow: "hidden",
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 14px", borderBottom: "1px solid rgba(232,229,220,0.1)",
      }}>
        <span style={{ ...monoL, fontSize: 11, color: "rgba(232,229,220,0.5)" }}>okatech ▸ run</span>
        <span style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 7, height: 7, borderRadius: 99, background: "#7CC272" }} />
          <span style={{ ...monoL, fontSize: 10, color: "rgba(232,229,220,0.5)" }}>live</span>
        </span>
      </div>
      <div style={{ padding: 20, ...monoL, fontSize: 13, lineHeight: 1.8 }}>
        <div style={{ color: "rgba(232,229,220,0.5)" }}>$ okatech build --domain clinical-ops</div>
        <div style={{ color: "#7CC272" }}>✓ <span style={{ color: "rgba(232,229,220,0.85)" }}>schema.compile</span>{"            "}142ms</div>
        <div style={{ color: "#7CC272" }}>✓ <span style={{ color: "rgba(232,229,220,0.85)" }}>service.deploy</span>{"            "}eu-west-3</div>
        <div style={{ color: "#7CC272" }}>✓ <span style={{ color: "rgba(232,229,220,0.85)" }}>integrations: 2/2</span>{"         "}hubspot · sap</div>
        <div style={{ color: "#E5B963" }}>↻ <span style={{ color: "rgba(232,229,220,0.85)" }}>copilot.bootstrap</span>{"         "}skills 4/4</div>
        <div style={{ color: "#7CC272" }}>✓ <span style={{ color: "rgba(232,229,220,0.85)" }}>signal: ready</span>{"             "}<span style={{ color: L.accent === "#4F46E5" ? "#A5A1FF" : L.accent }}>https://app.lattice.health</span></div>
        <div style={{ color: "rgba(232,229,220,0.5)", marginTop: 10 }}>$ <span style={{ background: "rgba(232,229,220,0.18)", padding: "0 2px" }}>&nbsp;</span></div>
      </div>
    </div>
  );
}

function LPillars({ lang }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 28px 0" }}>
      <div style={{ ...monoL, fontSize: 11, color: L.ink40, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>
        — {lang === "fr" ? "Trois piliers" : "Three pillars"}
      </div>
      <h2 style={{
        ...sansL, fontWeight: 500, fontSize: 56, lineHeight: 1.05, letterSpacing: -1.6,
        margin: "0 0 48px", maxWidth: 900,
      }}>
        {lang === "fr"
          ? "Un même cadre d'exécution pour architecturer, connecter et automatiser."
          : "A single execution framework to architect, connect and automate."}
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {OKA.pillars.map((p, i) => {
          const I = [Icon.cube, Icon.plug, Icon.bolt][i];
          return (
            <article key={p.id} style={{
              background: L.panel, border: `1px solid ${L.ink08}`, borderRadius: 12,
              padding: 24, display: "flex", flexDirection: "column", gap: 20,
              minHeight: 380,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: L.accentSoft, color: L.accent,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <I s={18} c={L.accent} />
              </div>
              <div>
                <div style={{ ...monoL, fontSize: 11, color: L.ink40, marginBottom: 8, letterSpacing: 0.6 }}>
                  {pick(p.kicker, lang).toUpperCase()}
                </div>
                <h3 style={{ ...sansL, fontSize: 24, fontWeight: 600, letterSpacing: -0.6, margin: "0 0 10px" }}>
                  {pick(p.title, lang)}
                </h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: L.ink70 }}>{pick(p.body, lang)}</p>
              </div>
              <div style={{ marginTop: "auto", paddingTop: 16, borderTop: `1px dashed ${L.ink15}` }}>
                {p.links[lang].map(line => (
                  <div key={line} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "8px 0", fontSize: 13, color: L.ink,
                  }}>
                    <span>{line}</span>
                    <Icon.arrowR s={11} c={L.ink40} />
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function LModes({ lang }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 28px 0" }}>
      <div style={{ ...monoL, fontSize: 11, color: L.ink40, marginBottom: 12, letterSpacing: 1, textTransform: "uppercase" }}>
        — {lang === "fr" ? "Modes" : "Modes"}
      </div>
      <h2 style={{ ...sansL, fontWeight: 500, fontSize: 48, lineHeight: 1.05, letterSpacing: -1.4, margin: "0 0 36px", maxWidth: 800 }}>
        {pick(OKA.modesTitle, lang)}
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {OKA.modes.map(m => (
          <article key={m.tag} style={{
            background: L.panel, border: `1px solid ${L.ink08}`, borderRadius: 12,
            padding: 28,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <span style={{
                ...monoL, fontSize: 11, padding: "4px 10px", borderRadius: 99,
                background: L.panelAlt, color: L.ink70, letterSpacing: 0.6,
              }}>{m.tag}</span>
              <Icon.arrowR s={14} c={L.ink40} />
            </div>
            <h3 style={{ ...sansL, fontSize: 26, fontWeight: 600, letterSpacing: -0.6, margin: "0 0 12px" }}>
              {pick(m.title, lang)}
            </h3>
            <p style={{ margin: "0 0 20px", fontSize: 15, lineHeight: 1.55, color: L.ink70 }}>{pick(m.body, lang)}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {m.bullets[lang].map(b => (
                <li key={b} style={{
                  display: "flex", gap: 10, alignItems: "flex-start",
                  padding: "10px 0", borderTop: `1px dashed ${L.ink15}`,
                  fontSize: 14, color: L.ink, lineHeight: 1.5,
                }}>
                  <span style={{ color: L.accent, marginTop: 6 }}><Icon.dot s={6} c={L.accent} /></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function LSituations({ lang }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 28px 0" }}>
      <div style={{ ...monoL, fontSize: 11, color: L.ink40, marginBottom: 12, letterSpacing: 1, textTransform: "uppercase" }}>
        — {lang === "fr" ? "Situations" : "Situations"}
      </div>
      <h2 style={{ ...sansL, fontWeight: 500, fontSize: 48, lineHeight: 1.05, letterSpacing: -1.4, margin: "0 0 36px", maxWidth: 800 }}>
        {lang === "fr" ? "Quand intervenir." : "When we step in."}
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {OKA.situations.map(s => (
          <article key={pick(s.title, lang)} style={{
            background: L.panel, border: `1px solid ${L.ink08}`, borderRadius: 12, padding: 24, minHeight: 240,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <span style={{
              alignSelf: "flex-start", ...monoL, fontSize: 10,
              padding: "3px 8px", borderRadius: 99, background: L.accentSoft, color: L.accent,
              letterSpacing: 0.6,
            }}>{pick(s.tag, lang).toUpperCase()}</span>
            <div>
              <h3 style={{ ...sansL, fontSize: 20, fontWeight: 600, letterSpacing: -0.4, margin: "16px 0 8px" }}>
                {pick(s.title, lang)}
              </h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: L.ink70 }}>{pick(s.body, lang)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LWork({ lang }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 28px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
        <div>
          <div style={{ ...monoL, fontSize: 11, color: L.ink40, marginBottom: 12, letterSpacing: 1, textTransform: "uppercase" }}>
            — {lang === "fr" ? "Travaux" : "Work"}
          </div>
          <h2 style={{ ...sansL, fontWeight: 500, fontSize: 48, lineHeight: 1.05, letterSpacing: -1.4, margin: 0 }}>
            {lang === "fr" ? "Produits livrés en production." : "Products shipped in production."}
          </h2>
        </div>
        <a href="#" style={{
          ...sansL, fontSize: 13, color: L.ink, textDecoration: "none",
          display: "flex", alignItems: "center", gap: 8,
          padding: "8px 12px", border: `1px solid ${L.ink15}`, borderRadius: 8,
        }}>{lang === "fr" ? "Tous les travaux" : "All work"} <Icon.arrowR s={11} /></a>
      </div>

      <div style={{ background: L.panel, border: `1px solid ${L.ink08}`, borderRadius: 12, overflow: "hidden" }}>
        {OKA.work.map((w, i) => (
          <div key={w.n} style={{
            display: "grid", gridTemplateColumns: "60px 240px 1fr 200px 140px 32px",
            gap: 24, padding: "22px 24px", alignItems: "center",
            borderTop: i === 0 ? "none" : `1px solid ${L.ink08}`,
          }}>
            <span style={{ ...monoL, fontSize: 11, color: L.ink40 }}>// {w.n}</span>
            <span style={{ ...sansL, fontSize: 14, fontWeight: 600, color: L.ink }}>{w.client}</span>
            <span style={{ ...sansL, fontSize: 15, color: L.ink70 }}>{pick(w.title, lang)}</span>
            <span style={{ ...monoL, fontSize: 11, color: L.ink40 }}>{w.kind}</span>
            <div>
              <div style={{ ...sansL, fontSize: 18, fontWeight: 600, color: L.accent, lineHeight: 1 }}>{w.kpi.v}</div>
              <div style={{ ...monoL, fontSize: 10, color: L.ink40, marginTop: 4, letterSpacing: 0.6 }}>{pick(w.kpi.l, lang).toUpperCase()}</div>
            </div>
            <Icon.arrowR s={13} c={L.ink40} />
          </div>
        ))}
      </div>
    </section>
  );
}

function LProducts({ lang }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 28px 0" }}>
      <div style={{ ...monoL, fontSize: 11, color: L.ink40, marginBottom: 12, letterSpacing: 1, textTransform: "uppercase" }}>
        — {lang === "fr" ? "Produits Okatech" : "Okatech products"}
      </div>
      <h2 style={{ ...sansL, fontWeight: 500, fontSize: 48, lineHeight: 1.05, letterSpacing: -1.4, margin: "0 0 36px", maxWidth: 800 }}>
        {lang === "fr" ? "Trois produits dans le même cadre." : "Three products in the same frame."}
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {OKA.products.map((p, i) => (
          <article key={p.id} style={{
            background: i === 0 ? L.ink : L.panel,
            color: i === 0 ? L.bg : L.ink,
            border: `1px solid ${i === 0 ? L.ink : L.ink08}`,
            borderRadius: 12, padding: 24, minHeight: 220,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div>
              <div style={{
                display: "inline-flex", padding: "4px 9px", borderRadius: 99,
                background: i === 0 ? "rgba(251,250,247,0.12)" : L.accentSoft,
                color: i === 0 ? L.bg : L.accent,
                ...monoL, fontSize: 10, letterSpacing: 0.6, marginBottom: 18,
              }}>{i === 0 ? "PRODUIT PHARE" : i === 1 ? "OBSERVABILITÉ" : "AI LAYER"}</div>
              <h3 style={{ ...sansL, fontSize: 22, fontWeight: 600, letterSpacing: -0.4, margin: "0 0 10px" }}>
                {p.name}
              </h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: i === 0 ? "rgba(251,250,247,0.7)" : L.ink70 }}>
                {pick(p.body, lang)}
              </p>
            </div>
            <a href="#" style={{
              marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8,
              ...monoL, fontSize: 11, color: i === 0 ? L.bg : L.ink, textDecoration: "none",
              letterSpacing: 0.6, textTransform: "uppercase",
            }}>{lang === "fr" ? "Découvrir" : "Discover"} <Icon.arrowR s={10} c={i === 0 ? L.bg : L.ink} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function LBrief({ lang }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 28px 0" }}>
      <div style={{ background: L.panel, border: `1px solid ${L.ink08}`, borderRadius: 16, padding: 40,
        display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48 }}>
        <div>
          <div style={{ ...monoL, fontSize: 11, color: L.ink40, marginBottom: 12, letterSpacing: 1, textTransform: "uppercase" }}>
            — {lang === "fr" ? "Brief express" : "Express brief"}
          </div>
          <h2 style={{ ...sansL, fontWeight: 500, fontSize: 44, lineHeight: 1.05, letterSpacing: -1.2, margin: "0 0 16px" }}>
            {pick(OKA.briefTitle, lang)}
          </h2>
          <p style={{ margin: "0 0 24px", fontSize: 16, lineHeight: 1.55, color: L.ink70 }}>{pick(OKA.briefBody, lang)}</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {OKA.briefBullets[lang].map(b => (
              <li key={b} style={{
                display: "flex", gap: 12, padding: "10px 0",
                borderTop: `1px dashed ${L.ink15}`, fontSize: 14, color: L.ink, lineHeight: 1.55,
              }}>
                <span style={{ color: L.accent, marginTop: 7 }}><Icon.dot s={6} c={L.accent} /></span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <form style={{
          background: L.panelAlt, borderRadius: 12, padding: 24,
          display: "flex", flexDirection: "column", gap: 12,
        }}>
          {[
            { l: lang === "fr" ? "Nom & société" : "Name & company", p: "Hélène Dubois — Lattice Health" },
            { l: "Email", p: "helene@lattice.health" },
            { l: lang === "fr" ? "Contexte" : "Context", p: lang === "fr" ? "Coordination clinique multi-sites…" : "Multi-site clinical coordination…", area: true },
          ].map(f => (
            <label key={f.l} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ ...monoL, fontSize: 11, color: L.ink40, letterSpacing: 0.6, textTransform: "uppercase" }}>{f.l}</span>
              {f.area ? (
                <textarea placeholder={f.p} rows={4} style={{
                  ...sansL, fontSize: 14, padding: "10px 12px", background: L.panel,
                  border: `1px solid ${L.ink15}`, borderRadius: 8, color: L.ink, resize: "vertical",
                }} />
              ) : (
                <input placeholder={f.p} style={{
                  ...sansL, fontSize: 14, padding: "10px 12px", background: L.panel,
                  border: `1px solid ${L.ink15}`, borderRadius: 8, color: L.ink,
                }} />
              )}
            </label>
          ))}
          <button type="button" style={{
            background: L.ink, color: L.bg, border: "none", borderRadius: 8,
            padding: "12px 16px", cursor: "pointer", marginTop: 6,
            ...sansL, fontSize: 14, fontWeight: 500,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          }}>{lang === "fr" ? "Envoyer le brief" : "Send the brief"} <Icon.arrow s={12} c={L.bg} /></button>
        </form>
      </div>
    </section>
  );
}

function LFooter({ lang }) {
  return (
    <footer style={{
      marginTop: 96, borderTop: `1px solid ${L.ink08}`,
      maxWidth: 1280, marginInline: "auto", padding: "40px 28px 32px",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 32 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <span style={{
              width: 22, height: 22, borderRadius: 5, background: L.ink, color: L.bg,
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              ...monoL, fontSize: 12, fontWeight: 600,
            }}>O</span>
            <span style={{ ...sansL, fontWeight: 600, fontSize: 15 }}>okatech</span>
          </div>
          <p style={{ margin: 0, fontSize: 13, color: L.ink70, maxWidth: 320, lineHeight: 1.55 }}>
            {lang === "fr"
              ? "Studio produit basé à Paris. Architect • Integrate • Automate."
              : "Product studio based in Paris. Architect • Integrate • Automate."}
          </p>
        </div>
        {[
          { t: lang === "fr" ? "Studio" : "Studio", l: ["Manifeste", "Méthode", "Équipe", "Recrutement"] },
          { t: "Produits", l: ["Okatech Stack", "Okatech Atlas", "Okatech Signal", "Changelog"] },
          { t: "Contact", l: [OKA.email, OKA.phone, pick(OKA.location, lang)] },
        ].map(col => (
          <div key={col.t}>
            <div style={{ ...monoL, fontSize: 11, color: L.ink40, marginBottom: 14, letterSpacing: 0.6, textTransform: "uppercase" }}>{col.t}</div>
            {col.l.map(x => (
              <a key={x} href="#" style={{ display: "block", ...sansL, fontSize: 13, color: L.ink, textDecoration: "none", padding: "5px 0" }}>{x}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 32, paddingTop: 18, borderTop: `1px dashed ${L.ink15}`,
        display: "flex", justifyContent: "space-between", ...monoL, fontSize: 11, color: L.ink40,
      }}>
        <span>© Okatech 2026 — build 26.05.r1</span>
        <span>Paris · France</span>
      </div>
    </footer>
  );
}

function LinearDirection() {
  const [lang, setLang] = React.useState("fr");
  return (
    <LBase>
      <LHeader lang={lang} setLang={setLang} />
      <LHero lang={lang} />
      <LPillars lang={lang} />
      <LModes lang={lang} />
      <LSituations lang={lang} />
      <LWork lang={lang} />
      <LProducts lang={lang} />
      <LBrief lang={lang} />
      <LFooter lang={lang} />
    </LBase>
  );
}

window.LinearDirection = LinearDirection;
