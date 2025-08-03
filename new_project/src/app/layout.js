export const metadata = {
  title: "Products Store",
  description: "A simple Next.js products store",
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
          textAlign: "center"
        }}>
          <h1>Products Store</h1>
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
