import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { addToCart } = useCart();

  useEffect(() => {
    // Simple fetch without async/await (using .then)
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <p style={{ textAlign: "center", marginTop: 40 }}>Loading product...</p>
    );
  }

  if (error || !product) {
    return (
      <p style={{ textAlign: "center", marginTop: 40, color: "red" }}>
        Product not found.
      </p>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {/* Images */}
        <div style={{ flex: "1 1 40%" }}>
          {product.images && product.images.length > 0 ? (
            product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product image ${index + 1}`}
                style={{ width: "100%", marginBottom: 10, borderRadius: 8 }}
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>

        {/* Details */}
        <div style={{ flex: "1 1 50%" }}>
          <h1 style={{ fontSize: 28, marginBottom: 10 }}>{product.title}</h1>
          <p style={{ marginBottom: 20 }}>{product.description}</p>
          <p
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#2563eb",
              marginBottom: 10,
            }}
          >
            ${product.price}
          </p>
          <p style={{ marginBottom: 20 }}>
            Category:{" "}
            <strong style={{ color: "#2563eb" }}>
              {product.category ? product.category.name : "Unknown"}
            </strong>
          </p>
          <button
            onClick={() => addToCart(product)}
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
