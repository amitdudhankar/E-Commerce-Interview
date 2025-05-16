import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = (props) => {
  const { addToCart } = useCart();

  // Add product to cart function
  const handleAddToCart = () => {
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      category: props.category,
      images: [props.image], // making it an array
    };
    addToCart(item);
  };

  return (
    <Link to={`/product/${props.id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 relative overflow-hidden">
        {/* Add to Cart button in top-right corner */}
        <button
          onClick={(e) => {
            e.preventDefault(); // stop link from triggering
            handleAddToCart();
          }}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow text-gray-700 hover:bg-blue-600 hover:text-white z-10"
        >
          <FiPlus size={16} />
        </button>

        {/* Image Section */}
        <div className="w-full h-52 bg-gray-100 overflow-hidden">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Category Tag */}
          <div className="mb-2">
            <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
              {props.category}
            </span>
          </div>

          {/* Product Title */}
          <h2 className="text-sm font-semibold text-gray-800 mb-1">
            {props.title}
          </h2>

          {/* Price */}
          <p className="text-base font-bold text-gray-900">${props.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
