import Image from "next/image";

export default async function ProductDetailPage({ params }) {
  const { id } = params;

  // Fetch product details
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });
  const product = await res.json();

  return (
    <div style={{
      border: "2px solid #000",
      padding: "20px",
      width: "fit-content",
      margin: "20px auto",
      textAlign: "center"
    }}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>

      <Image
        src="/one-piece.avif" 
        alt="Product placeholder"
        width={300}
        height={300}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
}
