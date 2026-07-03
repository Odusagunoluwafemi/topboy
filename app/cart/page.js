export default function CartPage() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px 24px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          letterSpacing: "8px",
          fontWeight: "300",
          marginBottom: "20px",
        }}
      >
        CART
      </h1>

      <p
        style={{
          color: "#b3b3b3",
          fontSize: "18px",
          lineHeight: "1.8",
        }}
      >
        Your selected items will appear here.
      </p>
    </main>
  );
}