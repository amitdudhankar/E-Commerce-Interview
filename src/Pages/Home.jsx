// import React, { useState } from "react";
// import ProductList from "./ProductList";

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <div>
//       <div className="text-center mt-5">
//         Home
//         <section>
//           <input
//             type="text"
//             placeholder="Search a product"
//             value={searchQuery}  // Bind the value to the state
//             onChange={handleSearchChange}  // Update the state when typing
//             className="border rounded h-[50px] w-[280px] p-3 mt-4"
//           />
//           <ProductList searchQuery={searchQuery} />  {/* Pass searchQuery to ProductList */}
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
    <div className="px-4 sm:px-8">
      <div className="text-center mt-5">
        <h1 className="text-xl sm:text-2xl">Home</h1>
        <section className="mt-4">
          <input
            type="text"
            placeholder="Search a product"
            value={searchQuery}
            onChange={handleSearchChange}
            className="border rounded h-[50px] w-full sm:w-[280px] p-3 mt-4 mx-auto"
          />
          <ProductList searchQuery={searchQuery} />
        </section>
      </div>
    </div>
  );
};

export default Home;
