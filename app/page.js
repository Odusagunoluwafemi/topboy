export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          letterSpacing: "12px",
          margin: 0,
          marginBottom: "32px",
          fontWeight: "700",
        }}
      >
        TOPBOY
      </h1>

      <h2
        style={{
          fontSize: "2rem",
          margin: 0,
          marginBottom: "12px",
        }}
      >
        OWN YOUR STYLE
      </h2>

      <p
        style={{
          color: "#b3b3b3",
          fontSize: "1.1rem",
          marginBottom: "40px",
        }}
      >
        Premium Streetwear Collection
      </p>

      <button
        style={{
          backgroundColor: "#fff",
          color: "#000",
          border: "none",
          borderRadius: "999px",
          padding: "14px 32px",
          fontSize: "1rem",
          fontWeight: "600",
        }}
      >
        SHOP NOW
      </button>
    </main>
  );
}