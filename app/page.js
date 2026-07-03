export default function Home() {
  const collections = [
    {
      id: 1,
      title: "ECLIPSE COLLECTION",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200",
    },
    {
      id: 2,
      title: "MIDNIGHT COLLECTION",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200",
    },
  ];

  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          padding: "28px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          backgroundColor: "#000",
          zIndex: 100,
        }}
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <h2
            style={{
              margin: 0,
              letterSpacing: "8px",
              fontWeight: "300",
              fontSize: "22px",
            }}
          >
            TOPBOY
          </h2>
        </a>

        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "14px",
            letterSpacing: "2px",
          }}
        >
          <a
            href="#collections"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            SHOP
          </a>

          <a
            href="#about"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            ABOUT
          </a>

          <a
            href="/cart"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            🛒
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 24px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            margin: 0,
            letterSpacing: "12px",
            fontWeight: "300",
          }}
        >
          TOPBOY
        </h1>

        <p
          style={{
            marginTop: "24px",
            fontSize: "18px",
            letterSpacing: "3px",
            color: "#b3b3b3",
            textTransform: "uppercase",
          }}
        >
          Custom Designed Streetwear
        </p>

        <a href="#collections">
          <button
            style={{
              marginTop: "50px",
              backgroundColor: "#fff",
              color: "#000",
              border: "none",
              borderRadius: "999px",
              padding: "16px 34px",
              fontWeight: "600",
              letterSpacing: "2px",
              cursor: "pointer",
            }}
          >
            SHOP COLLECTION
          </button>
        </a>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "100px 24px",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            letterSpacing: "6px",
            fontWeight: "300",
            marginBottom: "40px",
          }}
        >
          ABOUT TOPBOY
        </h3>

        <p
          style={{
            color: "#b3b3b3",
            fontSize: "18px",
            lineHeight: "1.9",
          }}
        >
          TOPBOY is a custom-designed streetwear label creating original pieces
          with a focus on individuality, confidence, and elevated design.
          Every collection is crafted to stand apart.
        </p>
      </section>

      {/* COLLECTIONS */}
      <section
        id="collections"
        style={{
          padding: "0 24px 120px",
        }}
      >
        <h3
          style={{
            letterSpacing: "6px",
            fontWeight: "300",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          LATEST DROP
        </h3>

        {collections.map((collection) => (
          <div
            key={collection.id}
            style={{
              marginBottom: "70px",
              backgroundColor: "#111",
              borderRadius: "28px",
              overflow: "hidden",
            }}
          >
            <img
              src={collection.image}
              alt={collection.title}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "35px 28px",
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  letterSpacing: "4px",
                  fontWeight: "300",
                }}
              >
                {collection.title}
              </h2>

              <p
                style={{
                  color: "#b3b3b3",
                  lineHeight: "1.8",
                }}
              >
                Custom-designed streetwear created with a premium approach to
                fashion and individuality.
              </p>

              <a href="/collections">
                <button
                  style={{
                    marginTop: "20px",
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid #fff",
                    padding: "14px 28px",
                    borderRadius: "999px",
                    letterSpacing: "2px",
                    cursor: "pointer",
                  }}
                >
                  VIEW COLLECTION
                </button>
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "80px 24px",
          borderTop: "1px solid #222",
        }}
      >
        <h2
          style={{
            letterSpacing: "10px",
            fontWeight: "300",
          }}
        >
          TOPBOY
        </h2>

        <p
          style={{
            color: "#777",
            marginTop: "20px",
            lineHeight: "1.8",
          }}
        >
          Custom Designed Streetwear
        </p>

        <p
          style={{
            color: "#555",
            marginTop: "40px",
          }}
        >
          © 2025 TOPBOY. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}