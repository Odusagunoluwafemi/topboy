export default function CollectionsPage() {
  const collections = [
    {
      title: "ECLIPSE COLLECTION",
      description:
        "Minimal silhouettes, oversized cuts, and monochrome pieces inspired by the night.",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200",
    },
    {
      title: "MIDNIGHT COLLECTION",
      description:
        "Premium streetwear designed for individuality and confidence.",
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
        padding: "40px 24px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          letterSpacing: "10px",
          fontWeight: "300",
          marginBottom: "80px",
        }}
      >
        COLLECTIONS
      </h1>

      {collections.map((collection) => (
        <div
          key={collection.title}
          style={{
            backgroundColor: "#111",
            borderRadius: "28px",
            overflow: "hidden",
            marginBottom: "60px",
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
              padding: "35px",
            }}
          >
            <h2
              style={{
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
                marginTop: "20px",
              }}
            >
              {collection.description}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}