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
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const { categoryName } = useParams();

  useEffect(() => {
    // Fetch the product list only once when component mounts
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=50")
      .then((res) => res.json())
      .then((data) => {
        let filteredData = data;

        // Filter products by category if categoryName is present
        if (categoryName) {
          filteredData = filteredData.filter(
            (product) =>
              product.category?.name?.toLowerCase() ===
              categoryName.toLowerCase()
          );
        }

        setProducts(filteredData);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false); // In case of error, set loading to false
      });
  }, [categoryName]);

  useEffect(() => {
    // Filter products based on the search query whenever it changes
    if (searchQuery) {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      // If search query is empty, display all products
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafc] to-[#ffffff] px-4 py-12 sm:px-6 lg:px-8">
      {categoryName && (
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 capitalize tracking-tight">
          Showing: {categoryName}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category?.name}
              image={product.images?.[0]}
            />
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
