// import React, { useState } from "react";
// import ProductList from "./ProductList";

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <div className="px-4 sm:px-8">
//       <div className="text-center mt-5">
//         <h1 className="text-xl sm:text-2xl">Home</h1>
//         <section className="mt-4">
//           <input
//             type="text"
//             placeholder="Search a product"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="border rounded h-[50px] w-full sm:w-[280px] p-3 mt-4 mx-auto"
//           />
//           <ProductList searchQuery={searchQuery} />
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import ProductList from "./ProductList";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen px-4 sm:px-10 py-12 bg-gradient-to-b from-[#f9fafb] to-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
          Discover Premium Products
        </h1>

        {/* Search Input */}
        <div className="relative w-full sm:w-[400px] mx-auto">
          <input
            type="text"
            placeholder="Search for luxury, quality, and style..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full bg-white/60 backdrop-blur border border-gray-200 rounded-full px-6 py-3 text-gray-800 shadow-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>
      <ProductList searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
