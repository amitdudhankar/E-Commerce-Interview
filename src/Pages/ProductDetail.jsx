// import { useParams } from "react-router-dom";
// import { useCart } from "../context/CartContext"; // 👈 import
// import { useEffect, useState } from "react";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(undefined);
//   const { addToCart } = useCart(); // 👈 use cart context

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
//         if (!res.ok) throw new Error("Product not found");
//         const data = await res.json();
//         setProduct(data);
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setProduct(null);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (product === null) return <p className="text-center mt-10 text-red-500">Product not found.</p>;
//   if (!product || !product.images) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="space-y-4">
//           {product.images.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt={`Product ${i}`}
//               className="w-full h-[500px] object-cover rounded shadow"
//             />
//           ))}
//         </div>

//         <div>
//           <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
//           <p className="text-gray-700 mb-4">{product.description}</p>
//           <p className="text-xl font-semibold mb-2">${product.price}</p>
//           <p className="text-sm text-gray-600 mb-4">
//             Category: <span className="font-medium">{product.category?.name}</span>
//           </p>

//           <button
//             className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//             onClick={() => addToCart(product)}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; // 👈 import
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(undefined);
  const { addToCart } = useCart(); // 👈 use cart context

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [id]);

  if (product === null) return <p className="text-center mt-10 text-red-500">Product not found.</p>;
  if (!product || !product.images) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="space-y-4">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Product ${i}`}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded shadow"
            />
          ))}
        </div>

        {/* Product Details Section */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-2">${product.price}</p>
          <p className="text-sm text-gray-600 mb-4">
            Category: <span className="font-medium">{product.category?.name}</span>
          </p>

          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
