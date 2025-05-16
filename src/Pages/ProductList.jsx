import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCards";

// SVG Loader Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#f9fafc] to-[#ffffff]">
    <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-600"></div>
  </div>
);

const ProductList = ({ searchQuery }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products when component loads or category changes
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=50")
      .then((res) => res.json())
      .then((data) => {
        let filtered = data;

        if (categoryName) {
          filtered = filtered.filter(
            (product) =>
              product.category &&
              product.category.name.toLowerCase() === categoryName.toLowerCase()
          );
        }

        setProducts(filtered);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, [categoryName]);

  useEffect(() => {
    if (searchQuery) {
      const lowerSearch = searchQuery.toLowerCase();
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(lowerSearch)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f9fafc, #ffffff)", padding: "48px 16px" }}>
      {categoryName && (
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: "bold", marginBottom: 24, textTransform: "capitalize", color: "#1f2937" }}>
          Showing: {categoryName}
        </h2>
      )}
      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: 18, color: "#6b7280" }}>No products found.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
            gap: 24,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category ? product.category.name : ""}
              image={product.images && product.images[0]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;