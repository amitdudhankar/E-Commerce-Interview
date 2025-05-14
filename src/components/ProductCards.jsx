// import { FiPlus } from "react-icons/fi";
// import { Link, useNavigate } from "react-router-dom";

// const ProductCard = ({ id, title, price, category, image }) => {
//   const navigate = useNavigate();

//   return (
//     <Link to={`/product/${id}`}>
//       <div className="border rounded-lg p-2 relative hover:shadow-md transition">
//         <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
//           <FiPlus size={16} />
//         </button>
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-[300px] object-cover rounded"
//         />
//         <span className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full mt-2 inline-block">
//           {category}
//         </span>
//         <h2 className="text-sm mt-1">{title}</h2>
//         <p className="font-semibold">{price}$</p>
//       </div>
//     </Link>
//   );
// };
// export default ProductCard;

import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // 👈 import useCart to access addToCart function

const ProductCard = ({ id, title, price, category, image }) => {
  const { addToCart } = useCart(); // 👈 use addToCart function
  const handleAddToCart = () => {
    const product = {
      id,
      title,
      price,
      category,
      images: [image], // wrap the image in an array
    };
    addToCart(product); // 👈 Add product to the cart when + is clicked
  };

  return (
    <Link to={`/product/${id}`}>
      <div className="border rounded-lg p-2 relative hover:shadow-md transition">
        <button
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation when clicking on the + button
            handleAddToCart(); // Add product to cart
          }}
        >
          <FiPlus size={16} />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover rounded"
        />
        <span className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full mt-2 inline-block">
          {category}
        </span>
        <h2 className="text-sm mt-1">{title}</h2>
        <p className="font-semibold">{price}$</p>
      </div>
    </Link>
  );
};

export default ProductCard;
