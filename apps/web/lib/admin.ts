import { cookies } from "next/headers";
import { COOKIE_NAME, verifySession } from "./auth";

export async function requireAdmin() {
  const secret = process.env.ADMIN_COOKIE_SECRET;
  if (!secret) throw new Error("Server misconfigured: ADMIN_COOKIE_SECRET");
  const c = await cookies();
  const token = c.get(COOKIE_NAME)?.value;
  const ok = await verifySession(token, secret);
  if (!ok) throw new Error("Unauthorized");
}

export function getBackendToken() {
  const t = process.env.ADMIN_BACKEND_TOKEN;
  if (!t) throw new Error("Server misconfigured: ADMIN_BACKEND_TOKEN");
  return t;
}

export function getConvexUrl() {
  const u = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!u) throw new Error("Server misconfigured: NEXT_PUBLIC_CONVEX_URL");
  return u;
}
