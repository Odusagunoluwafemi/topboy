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
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          letterSpacing: "12px",
          marginBottom: "20px",
        }}
      >
        TOPBOY
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#ccc",
          marginBottom: "40px",
        }}
      >
        Own Your Style
      </p>

      <button
        style={{
          background: "#fff",
          color: "#000",
          border: "none",
          padding: "14px 32px",
          borderRadius: "999px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        SHOP NOW
      </button>
    </main>
  );
