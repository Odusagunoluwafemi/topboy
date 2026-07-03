"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const saveProduct = async () => {
    alert("Save button clicked");

    if (!name || !price || !description || !image) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      // Upload image
      const fileName = `${Date.now()}-${image.name}`;

      const { error: uploadError } = await supabase.storage
        .from("products")
        .upload(fileName, image);

      if (uploadError) {
        alert(`Upload error: ${uploadError.message}`);
        throw uploadError;
      }

      // Get public URL
      const { data } = supabase.storage
        .from("products")
        .getPublicUrl(fileName);

      const imageUrl = data.publicUrl;

      // Save product row
      const { data: productData, error: insertError } = await supabase
        .from("products")
        .insert({
          name,
          price: Number(price),
          description,
          image: imageUrl,
        })
        .select();

      if (insertError) {
        alert(`Insert error: ${insertError.message}`);
        throw insertError;
      }

      alert("Product saved!");

      console.log(productData);

      setName("");
      setPrice("");
      setDescription("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert(`Something went wrong: ${err.message}`);
    }

    setLoading(false);
  };

  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "#fff",
        padding: "30px",
      }}
    >
      <h1>TOPBOY ADMIN</h1>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={saveProduct} disabled={loading}>
        {loading ? "Saving..." : "SAVE PRODUCT"}
      </button>
    </main>
  );
}