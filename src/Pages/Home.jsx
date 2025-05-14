import React, { useState } from "react";
import ProductList from "./ProductList";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className="text-center mt-5">
        Home
        <section>
          <input
            type="text"
            placeholder="Search a product"
            value={searchQuery}  // Bind the value to the state
            onChange={handleSearchChange}  // Update the state when typing
            className="border rounded h-[50px] w-[280px] p-3 mt-4"
          />
          <ProductList searchQuery={searchQuery} />  {/* Pass searchQuery to ProductList */}
        </section>
      </div>
    </div>
  );
};

export default Home;
