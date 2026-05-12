const ENCODER = new TextEncoder();

async function getKey(secret: string) {
  return crypto.subtle.importKey(
    "raw",
    ENCODER.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

function b64url(bytes: ArrayBuffer | Uint8Array) {
  const buf = bytes instanceof ArrayBuffer ? new Uint8Array(bytes) : bytes;
  let bin = "";
  for (let i = 0; i < buf.length; i++) bin += String.fromCharCode(buf[i]!);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export async function signSession(expiresAt: number, secret: string) {
  const payload = b64url(ENCODER.encode(JSON.stringify({ exp: expiresAt })));
  const key = await getKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, ENCODER.encode(payload));
  return `${payload}.${b64url(sig)}`;
}

export async function verifySession(
  token: string | undefined,
  secret: string,
): Promise<boolean> {
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  try {
    const key = await getKey(secret);
    const sigBytes = Uint8Array.from(
      atob(sig.replace(/-/g, "+").replace(/_/g, "/")),
      (c) => c.charCodeAt(0),
    );
    const ok = await crypto.subtle.verify(
      "HMAC",
      key,
      sigBytes,
      ENCODER.encode(payload),
    );
    if (!ok) return false;
    const parsed = JSON.parse(
      atob(payload.replace(/-/g, "+").replace(/_/g, "/")),
    ) as { exp: number };
    return parsed.exp > Date.now();
  } catch {
    return false;
  }
}

export const COOKIE_NAME = "oka_admin";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
