export type Lang = "fr" | "en";
export type I18n = { fr: string; en: string };

export const OKA = {
  nav: [
    { id: "expertises", label: { fr: "Expertises", en: "Expertise" } },
    { id: "solutions", label: { fr: "Solutions", en: "Solutions" } },
    { id: "resultats", label: { fr: "Résultats", en: "Results" } },
    { id: "approche", label: { fr: "Approche", en: "Approach" } },
    { id: "contact", label: { fr: "Contact", en: "Contact" } },
  ],
  hero: {
    super: {
      fr: "OKA Tech · Studio produit · Paris",
      en: "OKA Tech · Product studio · Paris",
    },
    line1: { fr: "Du logiciel", en: "Software" },
    line2: { fr: "qui transforme", en: "that moves" },
    line3: { fr: "vraiment l'activité.", en: "the business." },
    sub: {
      fr: "Studio produit indépendant. 6 ans à concevoir, livrer et opérer des plateformes SaaS pour des équipes qui n'ont pas le droit à l'erreur. L'IA fait partie de la boîte à outils — quand elle accélère vraiment.",
      en: "Independent product studio. 6 years designing, shipping and operating SaaS platforms for teams that can't afford to fumble. AI is in our toolkit — when it genuinely speeds things up.",
    },
    primary: { fr: "Parler d'un projet", en: "Start a project" },
    secondary: { fr: "Voir les réalisations", en: "See case studies" },
    availability: {
      fr: "Disponible · 2 missions Q3",
      en: "Available · 2 slots Q3",
    },
  },
  pillars: [
    {
      id: "product",
      kicker: { fr: "Produit", en: "Product" },
      title: { fr: "Plateformes SaaS", en: "SaaS platforms" },
      body: {
        fr: "Conception et développement de plateformes métier ancrées dans une logique business profonde — pas un empilement de features génériques.",
        en: "Design and build of business platforms grounded in deep domain logic — not a stack of generic features.",
      },
      links: {
        fr: [
          "Architecture produit",
          "UI/UX éditoriale",
          "Back-end & API",
          "Mise en production",
        ],
        en: [
          "Product architecture",
          "Editorial UI/UX",
          "Back-end & API",
          "Production rollout",
        ],
      },
    },
    {
      id: "transform",
      kicker: { fr: "Transformation", en: "Transformation" },
      title: {
        fr: "Transformation digitale",
        en: "Digital transformation",
      },
      body: {
        fr: "Process qui freinent, outils empilés, équipes qui re-saisissent. On remet l'opérationnel à plat et on outille là où ça compte.",
        en: "Processes that drag, stacked tools, teams re-keying data. We rebuild the operational layer and tool the moments that matter.",
      },
      links: {
        fr: [
          "Audit opérationnel",
          "Refonte des process",
          "Intégrations SI",
          "Conduite du changement",
        ],
        en: [
          "Operational audit",
          "Process redesign",
          "Stack integrations",
          "Change management",
        ],
      },
    },
    {
      id: "ai",
      kicker: { fr: "Levier", en: "Leverage" },
      title: { fr: "IA appliquée", en: "Applied AI" },
      body: {
        fr: "L'IA quand elle apporte un gain mesurable — extraction documentaire, copilotes métier, support augmenté. Pas un POC qui prend la poussière.",
        en: "AI where it delivers a measurable win — document extraction, internal copilots, augmented support. Not a POC gathering dust.",
      },
      links: {
        fr: [
          "RAG & copilotes",
          "Extraction & classification",
          "Évaluations & garde-fous",
          "Hébergement Europe",
        ],
        en: [
          "RAG & copilots",
          "Extraction & classification",
          "Evals & guardrails",
          "Europe hosting",
        ],
      },
    },
  ],
  modesTitle: {
    fr: "Deux manières de travailler avec nous.",
    en: "Two ways to work with us.",
  },
  modes: [
    {
      tag: "01 · CADRAGE",
      title: {
        fr: "Cadrage produit — 2 semaines",
        en: "Product framing — 2 weeks",
      },
      body: {
        fr: "On comprend votre métier, on cartographie la valeur, on chiffre. Vous repartez avec une roadmap exécutable — qu'on la livre ou non.",
        en: "We learn your domain, map the value, scope and price. You leave with an executable roadmap — whether we ship it or not.",
      },
      bullets: {
        fr: [
          "Immersion métier et entretiens utilisateurs",
          "Architecture cible et estimation chiffrée",
          "Roadmap 90 jours, livrables tangibles",
        ],
        en: [
          "Domain immersion and user interviews",
          "Target architecture and costed estimate",
          "90-day roadmap, tangible deliverables",
        ],
      },
    },
    {
      tag: "02 · BUILD",
      title: {
        fr: "Build — sprints de 6 semaines",
        en: "Build — 6-week sprints",
      },
      body: {
        fr: "Conception et mise en production. Du code qui tient, du design qui se défend, des opérations qui tournent. L'IA branchée là où elle accélère.",
        en: "Design and ship. Code that holds up, design that earns its place, operations that run. AI plugged in where it genuinely accelerates.",
      },
      bullets: {
        fr: [
          "Sprints courts, démos toutes les deux semaines",
          "Stack moderne, tests, observabilité dès le J1",
          "Transfert de compétences à vos équipes",
        ],
        en: [
          "Short sprints, demos every two weeks",
          "Modern stack, tests, observability from day one",
          "Knowledge transfer to your team",
        ],
      },
    },
  ],
  situations: [
    {
      tag: { fr: "Cas A", en: "Case A" },
      title: { fr: "Support qui sature", en: "Support is saturated" },
      body: {
        fr: "Volume tickets en croissance, marge qui s'érode. Déployer un agent qui résout 40-60 % des demandes de niveau 1.",
        en: "Ticket volume up, margin down. Deploy an agent that resolves 40–60% of tier-1 demand.",
      },
    },
    {
      tag: { fr: "Cas B", en: "Case B" },
      title: {
        fr: "Process administratif lent",
        en: "Slow admin process",
      },
      body: {
        fr: "Saisie manuelle, ressaisie, erreurs. Automatiser l'extraction, la classification et le routage avec contrôle humain ciblé.",
        en: "Manual entry, re-entry, errors. Automate extraction, classification and routing with targeted human review.",
      },
    },
    {
      tag: { fr: "Cas C", en: "Case C" },
      title: {
        fr: "Copilote métier interne",
        en: "Internal business copilot",
      },
      body: {
        fr: "Vos équipes cherchent l'info dans 7 outils. Un copilote ancré dans votre documentation et votre data warehouse, déployé en 6 semaines.",
        en: "Teams hunt for info across 7 tools. A copilot grounded in your docs and warehouse, shipped in 6 weeks.",
      },
    },
  ],
  products: [
    {
      id: "core",
      name: "Okatech Core",
      body: {
        fr: "Plateforme d'évaluation et de déploiement de prompts. Le moteur derrière nos missions, désormais accessible.",
        en: "Prompt evaluation and deployment platform. The engine behind our work, now available.",
      },
    },
    {
      id: "atlas",
      name: "Okatech Atlas",
      body: {
        fr: "Observabilité dédiée aux applications LLM : coûts, latence, dérive sémantique, conformité.",
        en: "Observability for LLM applications: cost, latency, semantic drift, compliance.",
      },
    },
    {
      id: "skills",
      name: "Okatech Skills",
      body: {
        fr: "Bibliothèque de compétences testées (RAG, agents, voice) à brancher dans votre application.",
        en: "Library of tested skills (RAG, agents, voice) to plug into your application.",
      },
    },
  ],
  briefTitle: {
    fr: "Parlez-nous de votre projet.",
    en: "Tell us about your project.",
  },
  briefBody: {
    fr: "Réponse sous 48 h ouvrées avec une première lecture honnête : faisable, à quel coût, sur combien de temps — ou pourquoi pas maintenant.",
    en: "Reply within 2 business days with an honest first read: feasible, at what cost, on what timeline — or why not now.",
  },
  briefBullets: {
    fr: [
      "Studio indépendant, 6 ans à livrer en production (pas une agence qui découvre votre métier)",
      "Engagement sur la valeur livrée, pas sur les jours-hommes",
      "Code, données et IA hébergés en Europe par défaut",
    ],
    en: [
      "Independent studio, 6 years shipping in production (not an agency discovering your domain)",
      "Outcome-based engagement, not man-day billing",
      "Code, data and AI hosted in Europe by default",
    ],
  },
  email: "admin@okatech.fr",
  phone: "+33 (0) 6 61 00 26 16",
  location: {
    fr: "50 Avenue des Champs Élysées, 75008 Paris",
    en: "50 Avenue des Champs Élysées, 75008 Paris",
  } as I18n,
};

export function pick<T>(value: I18n | T, lang: Lang): string | T {
  if (
    value &&
    typeof value === "object" &&
    "fr" in (value as object) &&
    "en" in (value as object)
  ) {
    return (value as I18n)[lang];
  }
  return value as T;
}
