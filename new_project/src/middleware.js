import { NextResponse } from "next/server";
import { verifyJWT } from "./app/lib/auth";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const isValid = await verifyJWT(token);
  if (!isValid) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected/:path*"],
};
