export default async function ProductDetailPage({ params }) {
  const { id } = params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });
  const product = await res.json();

  return (
    <div style={{
      border: "2px solid #000",
      padding: "20px",
      width: "fit-content",
      margin: "20px auto"
    }}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
    </div>
  );
}
