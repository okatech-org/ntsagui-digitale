// Shared content + primitives — Okatech, technical agency direction.
// Adapted to the "Build / Connect / Automate" vocabulary.

const OKA = {
  brand: { name: "Okatech", tag: { fr: "Architect • Integrate • Automate", en: "Architect • Integrate • Automate" } },
  nav: [
    { id: "architect", label: { fr: "Architect",  en: "Architect" } },
    { id: "integrate", label: { fr: "Integrate",  en: "Integrate" } },
    { id: "automate",  label: { fr: "Automate",   en: "Automate" } },
    { id: "work",      label: { fr: "Travaux",    en: "Work" } },
    { id: "studio",    label: { fr: "Studio",     en: "Studio" } },
  ],
  hero: {
    super: { fr: "Studio produit • Paris", en: "Product studio • Paris" },
    line1: { fr: "Architect.",   en: "Architect." },
    line2: { fr: "Integrate.",   en: "Integrate." },
    line3: { fr: "Automate.",    en: "Automate." },
    sub: {
      fr: "Okatech construit des plateformes SaaS, intègre l'IA aux flux métier et automatise ce qui ralentit les opérations — dans un même cadre d'exécution.",
      en: "Okatech builds SaaS platforms, integrates AI into business flows and automates what slows operations down — within a single execution framework.",
    },
    primary:   { fr: "Démarrer un projet",  en: "Start a project" },
    secondary: { fr: "Voir nos travaux",    en: "See our work" },
    availability: { fr: "Disponible · Q3 2026", en: "Booking · Q3 2026" },
  },
  pillars: [
    {
      id: "architect", kicker: { fr: "Projet & delivery",  en: "Project & delivery" },
      title: { fr: "Architect", en: "Architect" },
      body: {
        fr: "Plateformes SaaS, services et APIs : Okatech porte le projet de bout en bout — cadrage, architecture, build, mise en service.",
        en: "SaaS platforms, services and APIs: Okatech owns the project end to end — framing, architecture, build, go-live.",
      },
      links: {
        fr: ["Cadrage & architecture", "Build & delivery", "Mise en production"],
        en: ["Framing & architecture",  "Build & delivery", "Production rollout"],
      },
    },
    {
      id: "integrate", kicker: { fr: "Interopérabilité", en: "Interoperability" },
      title: { fr: "Integrate", en: "Integrate" },
      body: {
        fr: "APIs, webhooks, connecteurs et serveurs MCP : relier l'existant et l'IA sans tout réécrire.",
        en: "APIs, webhooks, connectors and MCP servers: connect the existing stack and AI without a full rewrite.",
      },
      links: {
        fr: ["APIs & services", "Intégrations & webhooks", "MCP & adaptateurs"],
        en: ["APIs & services", "Integrations & webhooks", "MCP & adapters"],
      },
    },
    {
      id: "automate", kicker: { fr: "Automatisation intelligente", en: "Intelligent automation" },
      title: { fr: "Automate", en: "Automate" },
      body: {
        fr: "Copilotes métier, skills, workflows et orchestration : faire exécuter sans friction, sans perdre le contrôle.",
        en: "Business copilots, skills, workflows and orchestration: execute without friction, without losing control.",
      },
      links: {
        fr: ["Copilotes métiers",  "Skills métiers",  "Workflows & orchestration"],
        en: ["Business copilots",   "Business skills", "Workflows & orchestration"],
      },
    },
  ],
  modesTitle: { fr: "Deux modes pour construire.", en: "Two ways to build." },
  modes: [
    {
      tag: "Service",
      title: { fr: "Build avec Okatech", en: "Build with Okatech" },
      body: {
        fr: "Le bon mode lorsqu'un projet doit être cadré, construit, connecté et mis en service sans fragmenter le delivery.",
        en: "The right mode when a project must be framed, built, integrated and shipped without fragmenting delivery.",
      },
      bullets: {
        fr: ["Cadrage, architecture, build, intégrations et mise en service",
             "Applications, services, APIs et automatisations dans un même cadre",
             "Continuité possible sur l'infrastructure cliente"],
        en: ["Framing, architecture, build, integrations and rollout",
             "Apps, services, APIs and automations in a single frame",
             "Smooth handover on client infrastructure"],
      },
    },
    {
      tag: "Produit",
      title: { fr: "Build avec Okatech Stack", en: "Build with Okatech Stack" },
      body: {
        fr: "Le bon mode lorsqu'une équipe interne, technique, produit ou métier doit garder la main sur le build avec un cadre commun.",
        en: "The right mode when an internal team — engineering, product or business — must own the build with a shared framework.",
      },
      bullets: {
        fr: ["Init, env, deploy, logs et run depuis le terminal",
             "Même cadre pour les équipes dev, produit, plateforme ou métier",
             "Développer en autonomie ou l'intégrer à une équipe existante"],
        en: ["Init, env, deploy, logs and run from the terminal",
             "Same frame for dev, product, platform or business teams",
             "Work independently or integrate with an existing team"],
      },
    },
  ],
  situations: [
    {
      tag: { fr: "Nouveau produit", en: "New product" },
      title: { fr: "Sortir vite sans dette inutile", en: "Ship fast without needless debt" },
      body: {
        fr: "Une application ou un service doit sortir vite, mais sur une base qui reste lisible, connectable et exploitable.",
        en: "An app or service must ship fast — but on a base that stays readable, connectable and operable.",
      },
    },
    {
      tag: { fr: "Existant dispersé", en: "Fragmented stack" },
      title: { fr: "Relier sans refaire tout le SI", en: "Connect without rebuilding everything" },
      body: {
        fr: "Les outils s'accumulent, les reprises manuelles aussi : reconnecter l'existant, fiabiliser les flux, remettre du cadre.",
        en: "Tools pile up, so do manual workarounds: reconnect the stack, stabilise flows, put the frame back.",
      },
    },
    {
      tag: { fr: "Service critique", en: "Critical service" },
      title: { fr: "Déployer avec traçabilité et continuité", en: "Ship with traceability and continuity" },
      body: {
        fr: "Le service doit tenir, s'interfacer proprement et rester lisible, tracable et opérable dans la durée.",
        en: "The service has to hold, integrate cleanly and stay readable, traceable and operable over time.",
      },
    },
  ],
  products: [
    {
      id: "stack",  name: "Okatech Stack",
      body: { fr: "Produit de build pour développer en autonomie ou l'intégrer à une équipe projet, technique ou métier.",
              en: "Build product to develop autonomously or integrate with a project, technical or business team." },
    },
    {
      id: "atlas",  name: "Okatech Atlas",
      body: { fr: "Plateforme d'observabilité produit et orchestration de workflows métier.",
              en: "Product observability platform and business-workflow orchestration." },
    },
    {
      id: "signal", name: "Okatech Signal",
      body: { fr: "Couche d'IA appliquée : copilotes, skills et connecteurs MCP pour les opérations.",
              en: "Applied AI layer: copilots, skills and MCP connectors for operations." },
    },
  ],
  work: [
    { n: "01", client: "Lattice Health",   kind: "SaaS / Health",
      title: { fr: "Plateforme de coordination clinique", en: "Clinical coordination platform" },
      kpi: { v: "−38%", l: { fr: "temps administratif", en: "admin time" } }, year: "2025" },
    { n: "02", client: "Ferme du Causse",  kind: "Marketplace / B2B",
      title: { fr: "Marketplace agricole B2B", en: "Agricultural B2B marketplace" },
      kpi: { v: "+4.2×", l: { fr: "volume mensuel", en: "monthly volume" } }, year: "2025" },
    { n: "03", client: "Norden Energie",   kind: "Internal / Data",
      title: { fr: "Console de pilotage interne", en: "Internal operations console" },
      kpi: { v: "17", l: { fr: "sites couverts", en: "sites covered" } }, year: "2024" },
    { n: "04", client: "Studio Vermillon", kind: "Brand / Web",
      title: { fr: "Refonte de marque & site", en: "Brand & site overhaul" },
      kpi: { v: "+126%", l: { fr: "trafic organique", en: "organic traffic" } }, year: "2024" },
  ],
  briefTitle: { fr: "Parler de votre projet", en: "Talk about your project" },
  briefBody: {
    fr: "Une application à concevoir, un existant à connecter, un processus à automatiser : le point de départ reste le même — comprendre ce qui doit être construit, livré et opéré.",
    en: "An app to design, a stack to connect, a process to automate: the starting point is always the same — understanding what must be built, shipped and operated.",
  },
  briefBullets: {
    fr: [
      "Livrables : périmètre, architecture cible, plan de delivery, trajectoire de mise en service.",
      "Lecture adaptée au contexte : lancement, existant à reconnecter, service critique à fiabiliser.",
      "Atelier visio + restitution écrite sous 10 jours ouvrés.",
      "Articulation possible avec Okatech Stack et Okatech Atlas.",
    ],
    en: [
      "Deliverables: scope, target architecture, delivery plan, go-live trajectory.",
      "Reading tuned to context: launch, fragmented stack, critical service.",
      "Video workshop + written deliverable within 10 working days.",
      "Optional fit with Okatech Stack and Okatech Atlas.",
    ],
  },
  email: "contact@okatech.fr",
  phone: "+33 1 84 80 00 00",
  location: { fr: "Paris, France", en: "Paris, France" },
};

const pick = (rec, lang) => (rec && typeof rec === "object" && (lang in rec)) ? rec[lang] : rec;

// Tiny SVG icons (clean line, 16px)
const Icon = {
  arrow: ({ s = 14, c = "currentColor" }) => (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
      <path d="M3 11 L11 3 M5 3 H11 V9" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrowR: ({ s = 14, c = "currentColor" }) => (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
      <path d="M3 7 H11 M7 3 L11 7 L7 11" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  spark: ({ s = 16, c = "currentColor" }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
      <path d="M8 1 L9.5 6.5 L15 8 L9.5 9.5 L8 15 L6.5 9.5 L1 8 L6.5 6.5 Z" stroke={c} strokeWidth="1.2" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  plug: ({ s = 16, c = "currentColor" }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
      <path d="M6 1 V5 M10 1 V5 M3 5 H13 V8 A5 5 0 0 1 3 8 Z M8 13 V15" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bolt: ({ s = 16, c = "currentColor" }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
      <path d="M9 1 L3 9 H8 L7 15 L13 7 H8 L9 1 Z" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  cube: ({ s = 16, c = "currentColor" }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
      <path d="M8 1 L14 4.5 V11.5 L8 15 L2 11.5 V4.5 Z M8 1 V8 M2 4.5 L8 8 M14 4.5 L8 8" stroke={c} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  ),
  dot: ({ s = 8, c = "currentColor" }) => (
    <svg width={s} height={s} viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" fill={c} /></svg>
  ),
};

Object.assign(window, { OKA, pick, Icon });
