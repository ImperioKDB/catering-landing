import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, verifyAdminSessionToken } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Let the login page and its API route through untouched.
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    const token = req.cookies.get(ADMIN_COOKIE)?.value;
    const valid = await verifyAdminSessionToken(token);
    if (!valid) {
      if (pathname.startsWith("/api/admin")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
