"use client";

import { type ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ThemeProvider } from "../components/site/theme-provider";
import { LangProvider } from "../components/site/lang-provider";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  throw new Error("Missing NEXT_PUBLIC_CONVEX_URL for the web Convex client");
}

const convex = new ConvexReactClient(convexUrl);

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider defaultTheme="light">
        <LangProvider defaultLang="fr">{children}</LangProvider>
      </ThemeProvider>
    </ConvexProvider>
  );
}
