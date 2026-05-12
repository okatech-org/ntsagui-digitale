"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Lang } from "../../lib/content";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LangCtx = createContext<Ctx | null>(null);

const STORAGE_KEY = "oka-lang";

export function LangProvider({
  children,
  defaultLang = "fr",
}: {
  children: ReactNode;
  defaultLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  useEffect(() => {
    const stored =
      (typeof window !== "undefined" &&
        (localStorage.getItem(STORAGE_KEY) as Lang | null)) ||
      null;
    if (stored && stored !== lang) setLangState(stored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {}
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  return (
    <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
