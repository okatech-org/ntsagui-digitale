"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@repo/backend/convex/_generated/api";
import type { Id } from "@repo/backend/convex/_generated/dataModel";
import {
  COOKIE_NAME,
  COOKIE_MAX_AGE,
  signSession,
  timingSafeEqual,
} from "../../lib/auth";
import {
  getBackendToken,
  getConvexUrl,
  requireAdmin,
} from "../../lib/admin";

function getClient() {
  return new ConvexHttpClient(getConvexUrl());
}

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_COOKIE_SECRET;
  if (!expected || !secret) {
    redirect("/admin/login?error=config");
  }
  if (!timingSafeEqual(password, expected!)) {
    redirect("/admin/login?error=invalid");
  }
  const exp = Date.now() + COOKIE_MAX_AGE * 1000;
  const token = await signSession(exp, secret!);
  const c = await cookies();
  c.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
  redirect("/admin");
}

export async function logoutAction() {
  const c = await cookies();
  c.delete(COOKIE_NAME);
  redirect("/admin/login");
}

type ProjectInput = {
  slug: string;
  order: number;
  n: string;
  client: string;
  kind: string;
  year: string;
  title: { fr: string; en: string };
  kpiValue: string;
  kpiLabel: { fr: string; en: string };
  href?: string;
  published: boolean;
};

function readProject(formData: FormData): ProjectInput {
  const href = String(formData.get("href") ?? "").trim();
  return {
    slug: String(formData.get("slug") ?? "").trim(),
    order: Number(formData.get("order") ?? 0),
    n: String(formData.get("n") ?? "").trim(),
    client: String(formData.get("client") ?? "").trim(),
    kind: String(formData.get("kind") ?? "").trim(),
    year: String(formData.get("year") ?? "").trim(),
    title: {
      fr: String(formData.get("title_fr") ?? "").trim(),
      en: String(formData.get("title_en") ?? "").trim(),
    },
    kpiValue: String(formData.get("kpiValue") ?? "").trim(),
    kpiLabel: {
      fr: String(formData.get("kpiLabel_fr") ?? "").trim(),
      en: String(formData.get("kpiLabel_en") ?? "").trim(),
    },
    href: href || undefined,
    published: formData.get("published") === "on",
  };
}

export async function createProjectAction(formData: FormData) {
  await requireAdmin();
  const data = readProject(formData);
  await getClient().mutation(api.projects.create, {
    token: getBackendToken(),
    ...data,
  });
  revalidatePath("/admin");
  revalidatePath("/");
  redirect("/admin");
}

export async function updateProjectAction(id: string, formData: FormData) {
  await requireAdmin();
  const data = readProject(formData);
  await getClient().mutation(api.projects.update, {
    token: getBackendToken(),
    id: id as Id<"projects">,
    ...data,
  });
  revalidatePath("/admin");
  revalidatePath("/");
  revalidatePath(`/admin/projects/${id}`);
  redirect("/admin");
}

export async function deleteProjectAction(id: string) {
  await requireAdmin();
  await getClient().mutation(api.projects.remove, {
    token: getBackendToken(),
    id: id as Id<"projects">,
  });
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function deleteBriefAction(id: string) {
  await requireAdmin();
  await getClient().mutation(api.briefs.remove, {
    token: getBackendToken(),
    id: id as Id<"briefs">,
  });
  revalidatePath("/admin");
}
