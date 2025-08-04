import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Products Store",
  description: "A simple Next.js products store using dummyjson API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}>
        
        <header style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image
              src="/one-piece.avif"   
              alt="Site Logo"
              width={40}
              height={40}
              priority
            />
            <h1 style={{ margin: 0 }}>Products Store</h1>
          </div>

          <nav>
            <Link href="/" style={{ color: "#fff", marginRight: "1rem" }}>Home</Link>
            <Link href="/products" style={{ color: "#fff" }}>Products</Link>
          </nav>
        </header>

        <main style={{
          flex: "1",
          padding: "2rem"
        }}>
          {children}
        </main>

        <footer style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: "1rem",
          textAlign: "center"
        }}>
          <p>© 2025 Products Store. All rights reserved.</p>
        </footer>

      </body>
    </html>
  );
}
