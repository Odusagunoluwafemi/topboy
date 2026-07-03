"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const saveProduct = async () => {
    alert("1. Save button clicked");

    if (!name || !price || !description || !image) {
      alert("2. Please fill all fields and select an image.");
      return;
    }

    alert("3. Passed validation");

    setLoading(true);

    try {
      alert("4. Uploading image...");

      const fileName = `${Date.now()}-${image.name}`;

      const { error: uploadError } = await supabase.storage
        .from("products")
        .upload(fileName, image);

      if (uploadError) {
        alert(`5. Upload error: ${uploadError.message}`);
        throw uploadError;
      }

      alert("6. Image uploaded");

      const { data: publicData } = supabase.storage
        .from("products")
        .getPublicUrl(fileName);

      const imageUrl = publicData.publicUrl;

      alert("7. Saving product to database...");

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
        alert(`8. Insert error: ${insertError.message}`);
        throw insertError;
      }

      console.log(productData);
      alert("9. Product saved!");

      setName("");
      setPrice("");
      setDescription("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert(`10. Something went wrong: ${err.message}`);
    } finally {
      setLoading(false);
    }
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
        onChange={(e) => {
          const file = e.target.files?.[0];
          setImage(file);
          console.log("Selected file:", file);
        }}
      />

      <br />
      <br />

      <button onClick={saveProduct} disabled={loading}>
        {loading ? "Saving..." : "SAVE PRODUCT"}
      </button>
    </main>
  );
}