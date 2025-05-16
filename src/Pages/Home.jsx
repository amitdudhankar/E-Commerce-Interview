import React, { useState } from "react";
import ProductList from "./ProductList";

const Home = () => {
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-gray-600">Find the products you love</p>

        {/* Search Box */}
        <div className="mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={onSearchChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Product List */}
      <ProductList searchQuery={search} />
    </div>
  );
};

export default Home;
