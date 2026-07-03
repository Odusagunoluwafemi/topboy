"use client";

import { useState } from "react";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        padding: "40px 20px",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          letterSpacing: "8px",
          marginBottom: "40px",
        }}
      >
        TOPBOY ADMIN
      </h1>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#111",
          padding: "30px",
          borderRadius: "30px",
        }}
      >
        <h2
          style={{
            marginBottom: "40px",
          }}
        >
          Add Product
        </h2>

        {/* Product Name */}
        <p>Product Name</p>
        <input
          type="text"
          placeholder="Eclipse Tee"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "18px",
            border: "none",
            marginBottom: "35px",
            fontSize: "16px",
          }}
        />

        {/* Price */}
        <p>Price</p>
        <input
          type="number"
          placeholder="25000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "18px",
            border: "none",
            marginBottom: "35px",
            fontSize: "16px",
          }}
        />

        {/* Description */}
        <p>Description</p>
        <textarea
          placeholder="Premium heavyweight cotton tee."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            height: "180px",
            padding: "18px",
            borderRadius: "18px",
            border: "none",
            marginBottom: "35px",
            fontSize: "16px",
            resize: "none",
          }}
        />

        {/* Image Upload */}
        <p>Product Image</p>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "18px",
            background: "#fff",
            color: "#000",
            marginBottom: "35px",
          }}
        />

        {/* Preview */}
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            style={{
              width: "100%",
              borderRadius: "20px",
              marginBottom: "35px",
            }}
          />
        )}

        {/* Save Button */}
        <button
          style={{
            background: "#fff",
            color: "#000",
            border: "none",
            padding: "18px 35px",
            borderRadius: "999px",
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          SAVE PRODUCT
        </button>
      </div>
    </main>
  );
}