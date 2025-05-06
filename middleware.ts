// Match all paths except:
// - api (API routes)
// - _next/static (static files)
// - _next/image (image optimization files)
// - favicon.ico (favicon)

import { type NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

export default async function middleware(req: NextRequest) {
  const session = await auth();

  // If user is not authenticated and is not on the sign-in page, redirect to the sign-in page
  if (!session && req.nextUrl.pathname !== "/sign-in") {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // If user is authenticated and is on the sign-in page, redirect to the home page
  if (session && req.nextUrl.pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
