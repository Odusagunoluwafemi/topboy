import { supabase } from "../lib/supabase";

export default async function Home() {
  const { data: products } = await supabase
    .from("products")
    .select("*");

  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "24px",
        fontFamily: "sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            margin: 0,
            letterSpacing: "2px",
          }}
        >
          TOPBOY
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "24px",
          }}
        >
          <span>🛒</span>
          <span>☰</span>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            letterSpacing: "4px",
            marginBottom: "20px",
          }}
        >
          TOPBOY
        </h1>

        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "10px",
          }}
        >
          OWN YOUR STYLE
        </h2>

        <p
          style={{
            color: "#b3b3b3",
            marginBottom: "40px",
          }}
        >
          Premium Streetwear Collection
        </p>

        <button
          style={{
            background: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "999px",
            padding: "14px 32px",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          SHOP NOW
        </button>
      </section>

      {/* PRODUCTS */}
      <section>
        <h2
          style={{
            marginBottom: "30px",
            letterSpacing: "2px",
          }}
        >
          NEW ARRIVALS
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {products?.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#111",
                borderRadius: "20px",
                padding: "20px",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  marginBottom: "20px",
                }}
              />

              <h3>{product.name}</h3>

              <p style={{ color: "#b3b3b3" }}>
                ₦{product.price.toLocaleString()}
              </p>

              <p style={{ color: "#888" }}>
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          color: "#777",
          marginTop: "80px",
          paddingBottom: "40px",
        }}
      >
        © 2025 TOPBOY
      </footer>
    </main>
  );
}