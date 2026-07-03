export default function Home() {
  const products = [
    {
      id: 1,
      name: "TOPBOY Signature Tee",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
      description: "Premium oversized heavyweight cotton tee.",
    },
    {
      id: 2,
      name: "TOPBOY Essential Hoodie",
      price: 45000,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
      description: "Heavyweight streetwear hoodie with relaxed fit.",
    },
    {
      id: 3,
      name: "TOPBOY Cargo Pants",
      price: 40000,
      image:
        "https://images.unsplash.com/photo-1506629905607-d9c297dbe15f?w=800",
      description: "Relaxed-fit cargo pants designed for modern streetwear.",
    },
  ];

  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          padding: "25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            letterSpacing: "4px",
            fontSize: "28px",
          }}
        >
          TOPBOY
        </h2>

        <span style={{ fontSize: "28px" }}>🛒</span>
      </nav>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 25px",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px",
            letterSpacing: "8px",
          }}
        >
          TOPBOY
        </h1>

        <h2
          style={{
            fontSize: "32px",
            marginBottom: "15px",
          }}
        >
          OWN YOUR STYLE
        </h2>

        <p
          style={{
            color: "#b3b3b3",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Premium Streetwear Collection
        </p>

        <a href="#products">
          <button
            style={{
              backgroundColor: "#fff",
              color: "#000",
              border: "none",
              borderRadius: "999px",
              padding: "16px 35px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            SHOP NOW
          </button>
        </a>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        style={{
          padding: "25px",
        }}
      >
        <h2
          style={{
            marginBottom: "30px",
            letterSpacing: "3px",
            fontSize: "28px",
          }}
        >
          NEW ARRIVALS
        </h2>

        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#111",
              borderRadius: "20px",
              overflow: "hidden",
              marginBottom: "30px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  marginTop: 0,
                  fontSize: "24px",
                }}
              >
                {product.name}
              </h3>

              <p
                style={{
                  color: "#d9d9d9",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                ₦{product.price.toLocaleString()}
              </p>

              <p
                style={{
                  color: "#999",
                  lineHeight: "1.6",
                }}
              >
                {product.description}
              </p>

              <button
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "none",
                  borderRadius: "999px",
                  padding: "12px 25px",
                  fontWeight: "bold",
                  marginTop: "15px",
                  cursor: "pointer",
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "60px 25px",
          color: "#777",
        }}
      >
        <h3
          style={{
            letterSpacing: "4px",
          }}
        >
          TOPBOY
        </h3>

        <p>Premium Streetwear.</p>
        <p>Instagram: @topboy</p>

        <p style={{ marginTop: "40px" }}>
          © 2025 TOPBOY. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}