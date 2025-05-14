import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ id, title, price, category, image }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      id,
      title,
      price,
      category,
      images: [image],
    };
    addToCart(product);
  };

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="relative rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
        {/* Add to Cart Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-blue-600 hover:text-white transition duration-200 z-10"
        >
          <FiPlus size={16} />
        </button>

        {/* Product Image */}
        <div className="w-full h-52 sm:h-60 md:h-[300px] bg-gray-100 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          {/* Category */}
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
            {category}
          </span>

          {/* Title */}
          <h2 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
            {title}
          </h2>

          {/* Price */}
          <p className="text-sm sm:text-base font-bold text-gray-900">
            ${price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
