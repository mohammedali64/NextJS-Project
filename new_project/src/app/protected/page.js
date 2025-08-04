import { cookies } from "next/headers";
import { verifyJWT } from "../lib/auth";
import Link from "next/link";

export default async function ProtectedPage() {
  const token = cookies().get("token")?.value;
  const user = token ? await verifyJWT(token) : null;

  if (!user) {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>Please <Link href="/login">login</Link> to continue.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <form action="/api/logout" method="POST">
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
