import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, verifySession } from "./lib/auth";

export const config = {
  matcher: ["/admin/:path*"],
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/admin/login") return NextResponse.next();

  const secret = process.env.ADMIN_COOKIE_SECRET;
  if (!secret) {
    return NextResponse.redirect(new URL("/admin/login?error=config", req.url));
  }

  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  const ok = await verifySession(cookie, secret);
  if (!ok) {
    const url = new URL("/admin/login", req.url);
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
