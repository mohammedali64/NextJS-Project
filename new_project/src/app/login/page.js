"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <h1>Welcome, {session.user.name}</h1>
        <img src={session.user.image} alt="profile" width={50} height={50} />
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <h1>Sign in to Continue</h1>
      <button onClick={() => signIn("github")}>Sign In with GitHub</button>
    </div>
  );
}
