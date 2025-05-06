import { type NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

const publicRoutes = ["/sign-in"];

export default async function middleware(req: NextRequest) {
  const session = await auth();

  //* Redirect to sign-in page if user is not authenticated and is not on a public route
  if (!session && !publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  //* Redirect to home page if user is authenticated and on a public route
  if (session && publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// Match all paths except:
// - api (API routes)
// - _next/static (static files)
// - _next/image (image optimization files)
// - favicon.ico (favicon)
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
