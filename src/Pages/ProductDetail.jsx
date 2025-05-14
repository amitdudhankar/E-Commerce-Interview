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
        const res = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
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

  if (product === null)
    return <p className="text-center mt-10 text-red-500">Product not found.</p>;
  if (!product || !product.images)
    return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafc] to-[#ffffff] px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-6">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Product ${i}`}
                className="w-full h-[350px] sm:h-[450px] md:h-[550px] object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
              />
            ))}
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
              {product.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-blue-600 mb-4">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500">
              Category:{" "}
              <span className="font-medium text-blue-600">
                {product.category?.name}
              </span>
            </p>

            {/* Add to Cart Button */}
            <div className="flex gap-4">
              <button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
