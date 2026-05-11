// Direction B — "Console" — dark, Vercel/terminal aesthetic. Green signal accent.
// Same content shape as Direction A but a meaningfully different visual system:
// dark canvas, glow accents, monospace-leaning hero, console-first surfaces.

const D = {
  bg: "#0A0A09",
  panel: "#111110",
  panelAlt: "#161614",
  ink: "#EDEAE0",
  ink70: "rgba(237,234,224,0.66)",
  ink40: "rgba(237,234,224,0.4)",
  ink15: "rgba(237,234,224,0.13)",
  ink08: "rgba(237,234,224,0.07)",
  accent: "#7CFF6B",
  accentDim: "rgba(124,255,107,0.14)",
  warn: "#FFB454",
  blue: "#6CB6FF",
};

const sansD = { fontFamily: "'Geist', 'Inter Tight', system-ui, sans-serif" };
const monoD = { fontFamily: "'Geist Mono', 'JetBrains Mono', ui-monospace, monospace" };

function DBase({ children }) {
  return (
    <div style={{
      width: "100%", minHeight: "100%", background: D.bg, color: D.ink,
      ...sansD, fontSize: 15, lineHeight: 1.55, position: "relative", overflow: "hidden",
    }}>
      {/* Subtle radial glow */}
      <div style={{
        position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)",
        width: 1200, height: 600, pointerEvents: "none", opacity: 0.5,
        background: "radial-gradient(ellipse at center, rgba(124,255,107,0.18) 0%, rgba(124,255,107,0) 60%)",
      }} />
      {/* dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.5,
        backgroundImage: "radial-gradient(rgba(237,234,224,0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
}

function DHeader({ lang, setLang }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(10,10,9,0.7)", backdropFilter: "blur(14px)",
      borderBottom: `1px solid ${D.ink08}`,
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "14px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            width: 22, height: 22, borderRadius: 5, background: D.accent, color: D.bg,
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            ...monoD, fontSize: 12, fontWeight: 700,
          }}>O</span>
          <span style={{ ...sansD, fontWeight: 600, fontSize: 15, letterSpacing: -0.2 }}>okatech</span>
          <span style={{ ...monoD, fontSize: 11, color: D.ink40, marginLeft: 4 }}>/ console</span>
        </div>
        <nav style={{ display: "flex", gap: 4 }}>
          {OKA.nav.map(n => (
            <a key={n.id} href={`#${n.id}`} style={{
              ...monoD, fontSize: 12, color: D.ink70, textDecoration: "none",
              padding: "8px 12px", borderRadius: 6, letterSpacing: 0.3,
            }}>{pick(n.label, lang).toLowerCase()}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", border: `1px solid ${D.ink15}`, borderRadius: 6, overflow: "hidden" }}>
            {["fr","en"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                background: lang === l ? D.ink : "transparent",
                color: lang === l ? D.bg : D.ink70,
                border: "none", padding: "5px 9px", cursor: "pointer",
                ...monoD, fontSize: 11, textTransform: "uppercase",
              }}>{l}</button>
            ))}
          </div>
          <button style={{
            background: D.accent, color: D.bg, border: "none", borderRadius: 6,
            padding: "8px 14px", cursor: "pointer", ...sansD, fontWeight: 600, fontSize: 13,
            display: "flex", alignItems: "center", gap: 8,
            boxShadow: `0 0 0 1px ${D.accentDim}, 0 0 24px ${D.accentDim}`,
          }}>
            {pick(OKA.hero.primary, lang)} <Icon.arrow s={11} c={D.bg} />
          </button>
        </div>
      </div>
    </header>
  );
}

function DHero({ lang }) {
  const h = OKA.hero;
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 28px 48px", textAlign: "center" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "6px 14px", borderRadius: 99,
        border: `1px solid ${D.ink15}`, background: "rgba(255,255,255,0.02)",
        ...monoD, fontSize: 11, color: D.ink70, marginBottom: 32,
      }}>
        <span style={{ width: 7, height: 7, borderRadius: 99, background: D.accent, boxShadow: `0 0 8px ${D.accent}` }} />
        {pick(h.super, lang)} · {pick(h.availability, lang)}
      </div>

      <h1 style={{
        ...monoD, fontWeight: 400, fontSize: 88, lineHeight: 1.0, letterSpacing: -3,
        margin: 0, textTransform: "lowercase",
      }}>
        <SplitChars text="architect." delay={0.15} stagger={0.035} style={{ color: D.ink }} />{" "}
        <SplitChars text="integrate." delay={0.55} stagger={0.035} style={{ color: D.ink40 }} />{" "}
        <span style={{ color: D.accent, textShadow: `0 0 24px ${D.accentDim}`, display: "inline-block", animation: "okaGlowPulse 3.5s ease-in-out infinite 1.5s" }}>
          <SplitChars text="automate." delay={0.95} stagger={0.035} color={D.accent} />
        </span>
      </h1>

      <Reveal delay={1.5} y={16} dur={0.8} as="p" style={{
        margin: "32px auto 36px", maxWidth: 680,
        fontSize: 17, lineHeight: 1.6, color: D.ink70,
      }}>{pick(h.sub, lang)}</Reveal>

      <Reveal delay={1.8} y={12} style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <MagneticBtn style={{
          background: D.accent, color: D.bg, border: "none", borderRadius: 8,
          padding: "12px 20px", cursor: "pointer", ...sansD, fontWeight: 600, fontSize: 14,
          display: "flex", alignItems: "center", gap: 10,
          boxShadow: `0 0 32px ${D.accentDim}`,
        }}>{pick(h.primary, lang)} <Icon.arrow s={12} c={D.bg} /></MagneticBtn>
        <MagneticBtn style={{
          background: "transparent", color: D.ink, border: `1px solid ${D.ink15}`, borderRadius: 8,
          padding: "12px 20px", cursor: "pointer", ...sansD, fontWeight: 500, fontSize: 14,
          display: "flex", alignItems: "center", gap: 10,
        }}>{pick(h.secondary, lang)} <Icon.arrowR s={12} /></MagneticBtn>
      </Reveal>

      {/* Big console panel below */}
      <Reveal delay={2.0} y={40} dur={1.0} style={{ marginTop: 64, textAlign: "left" }}>
        <DConsole lang={lang} />
      </Reveal>
    </section>
  );
}

function DConsole({ lang }) {
  return (
    <div style={{
      background: D.panel, border: `1px solid ${D.ink15}`, borderRadius: 14, overflow: "hidden",
      boxShadow: "0 30px 60px -30px rgba(0,0,0,0.8)",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
        borderBottom: `1px solid ${D.ink08}`, background: D.panelAlt,
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: 99, background: "#E66363" }}/>
          <span style={{ width: 10, height: 10, borderRadius: 99, background: "#E5B963" }}/>
          <span style={{ width: 10, height: 10, borderRadius: 99, background: "#7CC272" }}/>
        </div>
        <div style={{ flex: 1, textAlign: "center", ...monoD, fontSize: 11, color: D.ink40 }}>
          ~/okatech — build clinical-ops
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {["build","run","logs"].map((t, i) => (
            <span key={t} style={{
              ...monoD, fontSize: 10, padding: "3px 8px", borderRadius: 4,
              background: i === 0 ? D.accentDim : "transparent",
              color: i === 0 ? D.accent : D.ink40, letterSpacing: 0.4,
            }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 300px", minHeight: 360 }}>
        {/* file tree */}
        <div style={{ borderRight: `1px solid ${D.ink08}`, padding: 14, ...monoD, fontSize: 12, lineHeight: 2 }}>
          <div style={{ color: D.ink40, marginBottom: 8 }}>FILES</div>
          <ConsoleBoot gap={70} lines={[
            ["▾ src/", D.ink70],
            ["  ▾ architect/", D.ink70],
            ["    schema.ts", D.ink],
            ["    deploy.ts", D.ink],
            ["  ▾ integrate/", D.ink70],
            ["    hubspot.ts", D.accent],
            ["    sap.ts", D.ink],
            ["  ▾ automate/", D.ink70],
            ["    copilot.ts", D.ink],
            ["    skills.ts", D.ink],
            ["okatech.config", D.ink40],
          ].map(([f, c], i) => (
            <div key={i} style={{ color: c }}>{f}</div>
          ))} />
        </div>
        {/* editor */}
        <div style={{ padding: 16, ...monoD, fontSize: 13, lineHeight: 1.7, borderRight: `1px solid ${D.ink08}` }}>
          {[
            { n: 1, t: <><span style={{ color: "#C792EA" }}>import</span> {`{`} Okatech {`}`} <span style={{ color: "#C792EA" }}>from</span> <span style={{ color: D.accent }}>"@okatech/stack"</span>;</> },
            { n: 2, t: "" },
            { n: 3, t: <span style={{ color: D.ink40 }}>// Architect → Integrate → Automate</span> },
            { n: 4, t: <><span style={{ color: "#C792EA" }}>const</span> service = Okatech</> },
            { n: 5, t: <>{"  ."}<span style={{ color: D.blue }}>architect</span>{"({ domain: "}<span style={{ color: D.accent }}>"clinical-ops"</span>{" })"}</> },
            { n: 6, t: <>{"  ."}<span style={{ color: D.blue }}>integrate</span>{"(["}<span style={{ color: D.accent }}>"hubspot"</span>{", "}<span style={{ color: D.accent }}>"sap"</span>{"])"}</> },
            { n: 7, t: <>{"  ."}<span style={{ color: D.blue }}>automate</span>{"({ copilots: "}<span style={{ color: D.warn }}>true</span>{" });"}</> },
            { n: 8, t: "" },
            { n: 9, t: <><span style={{ color: "#C792EA" }}>await</span> service.<span style={{ color: D.blue }}>ship</span>();</> },
          ].map(({ n, t }) => (
            <div key={n} style={{ display: "flex", gap: 14 }}>
              <span style={{ color: D.ink40, width: 18, textAlign: "right" }}>{n}</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
        {/* run output */}
        <div style={{ padding: 16, ...monoD, fontSize: 12, lineHeight: 1.85 }}>
          <div style={{ color: D.ink40, marginBottom: 8 }}>OUTPUT — okatech run</div>
          <ConsoleBoot gap={180} lines={[
            ["$", "okatech build", D.ink40],
            ["✓", "schema.compile  142ms", D.accent],
            ["✓", "service.deploy  eu-west-3", D.accent],
            ["✓", "integrate: hubspot", D.accent],
            ["✓", "integrate: sap", D.accent],
            ["↻", "copilot.boot   skills 4/4", D.warn],
            ["✓", "signal: ready", D.accent],
            ["→", "app.lattice.health", D.blue],
          ].map(([k, v, c], i) => (
            <div key={i} style={{ display: "flex", gap: 8, color: D.ink70 }}>
              <span style={{ color: c, width: 12 }}>{k}</span><span>{v}</span>
            </div>
          ))} />
          <div style={{ marginTop: 10, color: D.ink40 }}>$ <span style={{ background: D.accentDim, padding: "0 4px", animation: "okaBlink 1s steps(2) infinite" }}>&nbsp;</span></div>
        </div>
      </div>
    </div>
  );
}

function DPillars({ lang }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 28px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <span style={{ width: 8, height: 8, background: D.accent }} />
        <span style={{ ...monoD, fontSize: 11, color: D.ink40, letterSpacing: 1, textTransform: "uppercase" }}>
          {lang === "fr" ? "TROIS PILIERS" : "THREE PILLARS"}
        </span>
      </div>
      <h2 style={{
        ...sansD, fontWeight: 500, fontSize: 56, lineHeight: 1.05, letterSpacing: -1.6,
        margin: "0 0 48px", maxWidth: 900,
      }}>
        <SplitWords text={lang === "fr"
          ? "Un même cadre d'exécution pour architecturer, connecter et automatiser."
          : "A single execution framework to architect, connect and automate."} stagger={0.05} />
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {OKA.pillars.map((p, i) => {
          const I = [Icon.cube, Icon.plug, Icon.bolt][i];
          return (
            <Reveal key={p.id} delay={i * 0.12} y={28}>
            <SpotlightCard color={D.accentDim} radius={360} style={{
              background: D.panel, border: `1px solid ${D.ink08}`, borderRadius: 12,
              padding: 24, display: "flex", flexDirection: "column", gap: 20, minHeight: 380,
            }}>
              {i === 1 && (
                <div style={{
                  position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.7,
                  background: `radial-gradient(circle at top right, ${D.accentDim} 0%, transparent 50%)`,
                }} />
              )}
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: D.accentDim, color: D.accent,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative",
              }}>
                <I s={18} c={D.accent} />
              </div>
              <div style={{ position: "relative" }}>
                <div style={{ ...monoD, fontSize: 11, color: D.ink40, marginBottom: 8, letterSpacing: 0.6 }}>
                  {pick(p.kicker, lang).toUpperCase()}
                </div>
                <h3 style={{ ...sansD, fontSize: 24, fontWeight: 600, letterSpacing: -0.6, margin: "0 0 10px", color: D.ink }}>
                  {pick(p.title, lang)}
                </h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: D.ink70 }}>{pick(p.body, lang)}</p>
              </div>
              <div style={{ marginTop: "auto", paddingTop: 16, borderTop: `1px dashed ${D.ink15}`, position: "relative" }}>
                {p.links[lang].map(line => (
                  <div key={line} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "8px 0", ...monoD, fontSize: 12, color: D.ink, letterSpacing: 0.2,
                  }}>
                    <span>› {line.toLowerCase()}</span>
                    <Icon.arrowR s={11} c={D.ink40} />
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

function DModes({ lang }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 28px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <span style={{ width: 8, height: 8, background: D.accent }} />
        <span style={{ ...monoD, fontSize: 11, color: D.ink40, letterSpacing: 1, textTransform: "uppercase" }}>{lang === "fr" ? "MODES" : "MODES"}</span>
      </div>
      <h2 style={{ ...sansD, fontWeight: 500, fontSize: 48, lineHeight: 1.05, letterSpacing: -1.4, margin: "0 0 36px", maxWidth: 800 }}>
        {pick(OKA.modesTitle, lang)}
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {OKA.modes.map((m, i) => (
          <article key={m.tag} style={{
            background: i === 1 ? "linear-gradient(180deg, rgba(124,255,107,0.05) 0%, transparent 100%), " + D.panel : D.panel,
            border: `1px solid ${i === 1 ? D.accentDim : D.ink08}`, borderRadius: 12, padding: 28,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <span style={{
                ...monoD, fontSize: 11, padding: "4px 10px", borderRadius: 99,
                background: i === 1 ? D.accentDim : D.panelAlt,
                color: i === 1 ? D.accent : D.ink70, letterSpacing: 0.6,
              }}>{m.tag}</span>
              <Icon.arrowR s={14} c={D.ink40} />
            </div>
            <h3 style={{ ...sansD, fontSize: 26, fontWeight: 600, letterSpacing: -0.6, margin: "0 0 12px", color: D.ink }}>
              {pick(m.title, lang)}
            </h3>
            <p style={{ margin: "0 0 20px", fontSize: 15, lineHeight: 1.55, color: D.ink70 }}>{pick(m.body, lang)}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {m.bullets[lang].map(b => (
                <li key={b} style={{
                  display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 0",
                  borderTop: `1px dashed ${D.ink15}`, fontSize: 14, color: D.ink, lineHeight: 1.5,
                }}>
                  <span style={{ marginTop: 6 }}><Icon.dot s={6} c={D.accent} /></span>
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

function DSituations({ lang }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 28px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <span style={{ width: 8, height: 8, background: D.accent }} />
        <span style={{ ...monoD, fontSize: 11, color: D.ink40, letterSpacing: 1, textTransform: "uppercase" }}>{lang === "fr" ? "SITUATIONS" : "SITUATIONS"}</span>
      </div>
      <h2 style={{ ...sansD, fontWeight: 500, fontSize: 48, lineHeight: 1.05, letterSpacing: -1.4, margin: "0 0 36px", maxWidth: 800 }}>
        {lang === "fr" ? "Quand intervenir." : "When we step in."}
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {OKA.situations.map((s, i) => (
          <article key={pick(s.title, lang)} style={{
            background: D.panel, border: `1px solid ${D.ink08}`, borderRadius: 12, padding: 24, minHeight: 240,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <span style={{
              alignSelf: "flex-start", ...monoD, fontSize: 10,
              padding: "3px 8px", borderRadius: 99, background: D.accentDim, color: D.accent,
              letterSpacing: 0.6,
            }}>{pick(s.tag, lang).toUpperCase()}</span>
            <div>
              <h3 style={{ ...sansD, fontSize: 20, fontWeight: 600, letterSpacing: -0.4, margin: "16px 0 8px", color: D.ink }}>
                {pick(s.title, lang)}
              </h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: D.ink70 }}>{pick(s.body, lang)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DWork({ lang }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 28px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <span style={{ width: 8, height: 8, background: D.accent }} />
            <span style={{ ...monoD, fontSize: 11, color: D.ink40, letterSpacing: 1, textTransform: "uppercase" }}>{lang === "fr" ? "TRAVAUX" : "WORK"}</span>
          </div>
          <h2 style={{ ...sansD, fontWeight: 500, fontSize: 48, lineHeight: 1.05, letterSpacing: -1.4, margin: 0 }}>
            {lang === "fr" ? "Produits livrés en production." : "Products shipped in production."}
          </h2>
        </div>
        <a href="#" style={{
          ...monoD, fontSize: 12, color: D.ink, textDecoration: "none",
          display: "flex", alignItems: "center", gap: 8,
          padding: "8px 12px", border: `1px solid ${D.ink15}`, borderRadius: 8,
        }}>{lang === "fr" ? "tous les travaux" : "all work"} <Icon.arrowR s={11} /></a>
      </div>

      <div style={{ background: D.panel, border: `1px solid ${D.ink08}`, borderRadius: 12, overflow: "hidden" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "60px 240px 1fr 200px 140px 32px",
          gap: 24, padding: "12px 24px",
          ...monoD, fontSize: 10, color: D.ink40, letterSpacing: 0.8, textTransform: "uppercase",
          borderBottom: `1px solid ${D.ink08}`, background: D.panelAlt,
        }}>
          <span>ID</span><span>CLIENT</span><span>{lang === "fr" ? "PROJET" : "PROJECT"}</span>
          <span>{lang === "fr" ? "DOMAINE" : "DOMAIN"}</span><span>KPI</span><span></span>
        </div>
        {OKA.work.map((w, i) => (
          <div key={w.n} style={{
            display: "grid", gridTemplateColumns: "60px 240px 1fr 200px 140px 32px",
            gap: 24, padding: "22px 24px", alignItems: "center",
            borderTop: i === 0 ? "none" : `1px solid ${D.ink08}`,
          }}>
            <span style={{ ...monoD, fontSize: 11, color: D.accent }}>#{w.n}</span>
            <span style={{ ...sansD, fontSize: 14, fontWeight: 600, color: D.ink }}>{w.client}</span>
            <span style={{ ...sansD, fontSize: 15, color: D.ink70 }}>{pick(w.title, lang)}</span>
            <span style={{ ...monoD, fontSize: 11, color: D.ink40 }}>{w.kind}</span>
            <div>
              <div style={{ ...sansD, fontSize: 18, fontWeight: 600, color: D.accent, lineHeight: 1, textShadow: `0 0 12px ${D.accentDim}` }}>{w.kpi.v}</div>
              <div style={{ ...monoD, fontSize: 10, color: D.ink40, marginTop: 4, letterSpacing: 0.6 }}>{pick(w.kpi.l, lang).toUpperCase()}</div>
              <div style={{ marginTop: 6, height: 2, background: D.ink08, overflow: "hidden", borderRadius: 99 }}>
                <div style={{ height: "100%", background: D.accent, width: `${[78, 92, 64, 88][i % 4]}%`, animation: "okaSweep 2.5s ease-in-out infinite", opacity: 0.6 }} />
              </div>
            </div>
            <Icon.arrowR s={13} c={D.ink40} />
          </div>
        ))}
      </div>
    </section>
  );
}

function DProducts({ lang }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 28px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <span style={{ width: 8, height: 8, background: D.accent }} />
        <span style={{ ...monoD, fontSize: 11, color: D.ink40, letterSpacing: 1, textTransform: "uppercase" }}>{lang === "fr" ? "PRODUITS OKATECH" : "OKATECH PRODUCTS"}</span>
      </div>
      <h2 style={{ ...sansD, fontWeight: 500, fontSize: 48, lineHeight: 1.05, letterSpacing: -1.4, margin: "0 0 36px", maxWidth: 800 }}>
        {lang === "fr" ? "Trois produits dans le même cadre." : "Three products in the same frame."}
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {OKA.products.map((p, i) => (
          <article key={p.id} style={{
            background: i === 0 ? `linear-gradient(180deg, ${D.accentDim} 0%, transparent 60%), ${D.panel}` : D.panel,
            border: `1px solid ${i === 0 ? D.accent : D.ink08}`,
            borderRadius: 12, padding: 24, minHeight: 220,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            position: "relative", overflow: "hidden",
          }}>
            <div>
              <div style={{
                display: "inline-flex", padding: "4px 9px", borderRadius: 99,
                background: i === 0 ? D.accent : D.accentDim,
                color: i === 0 ? D.bg : D.accent,
                ...monoD, fontSize: 10, letterSpacing: 0.6, marginBottom: 18, fontWeight: 600,
              }}>{i === 0 ? "FLAGSHIP" : i === 1 ? "OBSERVABILITY" : "AI LAYER"}</div>
              <h3 style={{ ...sansD, fontSize: 22, fontWeight: 600, letterSpacing: -0.4, margin: "0 0 10px", color: D.ink }}>
                {p.name}
              </h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: D.ink70 }}>{pick(p.body, lang)}</p>
            </div>
            <a href="#" style={{
              marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8,
              ...monoD, fontSize: 11, color: D.accent, textDecoration: "none",
              letterSpacing: 0.6, textTransform: "uppercase",
            }}>{lang === "fr" ? "Découvrir" : "Discover"} <Icon.arrowR s={10} c={D.accent} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function DBrief({ lang }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 28px 0" }}>
      <Reveal y={40} dur={1.0} style={{
        background: D.panel, border: `1px solid ${D.ink08}`, borderRadius: 16, padding: 40,
        display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100, width: 400, height: 400, pointerEvents: "none", opacity: 0.5,
          background: `radial-gradient(circle, ${D.accentDim} 0%, transparent 60%)`,
        }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <span style={{ width: 8, height: 8, background: D.accent }} />
            <span style={{ ...monoD, fontSize: 11, color: D.ink40, letterSpacing: 1, textTransform: "uppercase" }}>{lang === "fr" ? "BRIEF EXPRESS" : "EXPRESS BRIEF"}</span>
          </div>
          <h2 style={{ ...sansD, fontWeight: 500, fontSize: 44, lineHeight: 1.05, letterSpacing: -1.2, margin: "0 0 16px" }}>
            {pick(OKA.briefTitle, lang)}
          </h2>
          <p style={{ margin: "0 0 24px", fontSize: 16, lineHeight: 1.55, color: D.ink70 }}>{pick(OKA.briefBody, lang)}</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {OKA.briefBullets[lang].map(b => (
              <li key={b} style={{
                display: "flex", gap: 12, padding: "10px 0",
                borderTop: `1px dashed ${D.ink15}`, fontSize: 14, color: D.ink, lineHeight: 1.55,
              }}>
                <span style={{ marginTop: 7 }}><Icon.dot s={6} c={D.accent} /></span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <form style={{
          background: D.panelAlt, borderRadius: 12, padding: 24,
          display: "flex", flexDirection: "column", gap: 12, position: "relative",
          border: `1px solid ${D.ink08}`,
        }}>
          {[
            { l: lang === "fr" ? "Nom & société" : "Name & company", p: "Hélène Dubois — Lattice Health" },
            { l: "Email", p: "helene@lattice.health" },
            { l: lang === "fr" ? "Contexte" : "Context", p: lang === "fr" ? "Coordination clinique multi-sites…" : "Multi-site clinical coordination…", area: true },
          ].map(f => (
            <label key={f.l} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ ...monoD, fontSize: 11, color: D.ink40, letterSpacing: 0.6, textTransform: "uppercase" }}>{f.l}</span>
              {f.area ? (
                <textarea placeholder={f.p} rows={4} style={{
                  ...sansD, fontSize: 14, padding: "10px 12px", background: D.bg,
                  border: `1px solid ${D.ink15}`, borderRadius: 8, color: D.ink, resize: "vertical",
                }} />
              ) : (
                <input placeholder={f.p} style={{
                  ...sansD, fontSize: 14, padding: "10px 12px", background: D.bg,
                  border: `1px solid ${D.ink15}`, borderRadius: 8, color: D.ink,
                }} />
              )}
            </label>
          ))}
          <button type="button" style={{
            background: D.accent, color: D.bg, border: "none", borderRadius: 8,
            padding: "12px 16px", cursor: "pointer", marginTop: 6,
            ...sansD, fontSize: 14, fontWeight: 600,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            boxShadow: `0 0 24px ${D.accentDim}`,
          }}>{lang === "fr" ? "Envoyer le brief" : "Send the brief"} <Icon.arrow s={12} c={D.bg} /></button>
        </form>
      </Reveal>
    </section>
  );
}

function DFooter({ lang }) {
  return (
    <footer style={{
      marginTop: 96, borderTop: `1px solid ${D.ink08}`,
      maxWidth: 1280, marginInline: "auto", padding: "40px 28px 32px",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 32 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <span style={{
              width: 22, height: 22, borderRadius: 5, background: D.accent, color: D.bg,
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              ...monoD, fontSize: 12, fontWeight: 700,
            }}>O</span>
            <span style={{ ...sansD, fontWeight: 600, fontSize: 15 }}>okatech</span>
          </div>
          <p style={{ margin: 0, fontSize: 13, color: D.ink70, maxWidth: 320, lineHeight: 1.55 }}>
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
            <div style={{ ...monoD, fontSize: 11, color: D.ink40, marginBottom: 14, letterSpacing: 0.6, textTransform: "uppercase" }}>{col.t}</div>
            {col.l.map(x => (
              <a key={x} href="#" style={{ display: "block", ...sansD, fontSize: 13, color: D.ink, textDecoration: "none", padding: "5px 0" }}>{x}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 32, paddingTop: 18, borderTop: `1px dashed ${D.ink15}`,
        display: "flex", justifyContent: "space-between", ...monoD, fontSize: 11, color: D.ink40,
      }}>
        <span>© Okatech 2026 — build 26.05.r1</span>
        <span>Paris · France</span>
      </div>
    </footer>
  );
}

function ConsoleDirection() {
  const [lang, setLang] = React.useState("fr");
  return (
    <DBase>
      <ScrollProgress color={D.accent} />
      <DHeader lang={lang} setLang={setLang} />
      <DHero lang={lang} />
      <DPillars lang={lang} />
      <DModes lang={lang} />
      <DSituations lang={lang} />
      <DWork lang={lang} />
      <DProducts lang={lang} />
      <DBrief lang={lang} />
      <DFooter lang={lang} />
    </DBase>
  );
}

window.ConsoleDirection = ConsoleDirection;
