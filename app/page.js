export default function Home() {
  const products = [
    {
      id: 1,
      name: "Oversized Tee",
      price: 25000,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
      description: "Premium oversized streetwear tee",
    },
    {
      id: 2,
      name: "Essential Hoodie",
      price: 45000,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
      description: "Heavyweight premium hoodie",
    },
    {
      id: 3,
      name: "Cargo Pants",
      price: 35000,
      image: "https://images.unsplash.com/photo-1506629905607-d9c297dbe15f?w=800",
      description: "Relaxed-fit cargo pants",
    },
  ];

  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: "24px" }}>
      <h1>TOPBOY</h1>

      <h2>NEW ARRIVALS</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          />

          <h3>{product.name}</h3>
          <p>₦{product.price.toLocaleString()}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </main>
  );
}