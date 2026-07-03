export default function AdminPage() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          letterSpacing: "8px",
          marginBottom: "40px",
        }}
      >
        TOPBOY ADMIN
      </h1>

      <div
        style={{
          background: "#111",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "25px",
        }}
      >
        <h2>Add Product</h2>

        <p>Product Name</p>
        <input
          placeholder="Eclipse Tee"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <p>Price</p>
        <input
          placeholder="25000"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <p>Description</p>
        <textarea
          placeholder="Premium heavyweight cotton tee."
          style={{
            width: "100%",
            padding: "14px",
            height: "120px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <button
          style={{
            background: "#fff",
            color: "#000",
            padding: "14px 24px",
            borderRadius: "999px",
            border: "none",
            fontWeight: "bold",
          }}
        >
          SAVE PRODUCT
        </button>
      </div>
    </main>
  );
}