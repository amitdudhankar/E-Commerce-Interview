

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ProductCard from "../components/ProductCards";

// const ProductList = ({ searchQuery }) => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const { categoryName } = useParams();

//   useEffect(() => {
//     // Fetch the product list only once when component mounts
//     fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=50")
//       .then((res) => res.json())
//       .then((data) => {
//         let filteredData = data;

//         // Filter products by category if categoryName is present
//         if (categoryName) {
//           filteredData = filteredData.filter(
//             (product) =>
//               product.category?.name?.toLowerCase() ===
//               categoryName.toLowerCase()
//           );
//         }

//         setProducts(filteredData);
//       })
//       .catch((err) => console.error("Error fetching products:", err));
//   }, [categoryName]);

//   useEffect(() => {
//     // Filter products based on the search query whenever it changes
//     if (searchQuery) {
//       setFilteredProducts(
//         products.filter((product) =>
//           product.title.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//     } else {
//       // If search query is empty, display all products
//       setFilteredProducts(products);
//     }
//   }, [searchQuery, products]);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       {categoryName && (
//         <h2 className="text-2xl font-semibold mb-4 capitalize">
//           Showing: {categoryName}
//         </h2>
//       )}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.length ? (
//           filteredProducts.map((product) => (
//             <ProductCard
//               key={product.id}
//               id={product.id}
//               title={product.title}
//               price={product.price}
//               category={product.category?.name}
//               image={product.images?.[0]}
//             />
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCards";

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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
      })
      .catch((err) => console.error("Error fetching products:", err));
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
          <p className="text-center text-lg text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
