import { NextResponse } from "next/server";
import { createJWT } from "@/app/lib/auth";

export async function POST(req) {
  const { username, password } = await req.json();

  if (username === "admin" && password === "password") {
    const token = await createJWT({ username });

    const res = NextResponse.json({ success: true });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60, 
    });

    return res;
  }

  return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
}
