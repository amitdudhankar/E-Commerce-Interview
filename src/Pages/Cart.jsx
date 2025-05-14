// import React from "react";
// import { useNavigate } from "react-router-dom";

// import { useCart } from "../context/CartContext";

// const Cart = () => {
//   const {
//     cartItems,
//     removeFromCart,
//     increaseQuantity,
//     decreaseQuantity,
//     getTotalPrice,
//   } = useCart();
//   const navigate = useNavigate();

//   // Function to get the image URL with a fallback option
//   const getImageUrl = (imageArray) => {
//     // Return the first image if available, otherwise fallback to a default image
//     return imageArray?.[0] || "/path/to/default/image.jpg"; // Replace with actual default image path
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <h1 className="text-2xl font-bold mb-6">My Cart</h1>

//       {cartItems.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         <div className="space-y-6">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center gap-4 border-b pb-4"
//             >
//               <img
//                 src={getImageUrl(item.images)} // Use the helper function to get image URL
//                 alt={item.title}
//                 className="w-24 h-24 object-cover rounded"
//               />
//               <div className="flex-1">
//                 <h2 className="text-lg font-semibold">{item.title}</h2>
//                 <p className="text-sm text-gray-600">${item.price}</p>

//                 {/* Quantity control */}
//                 <div className="flex items-center gap-4 mt-2">
//                   <button
//                     className="bg-gray-200 p-2 rounded"
//                     onClick={() => decreaseQuantity(item.id)}
//                   >
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     className="bg-gray-200 p-2 rounded"
//                     onClick={() => increaseQuantity(item.id)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               <button
//                 className="text-red-500 text-sm"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Total price and checkout button */}
//       <div className="mt-6 flex justify-between items-center border-t pt-4">
//         <p className="text-xl font-semibold">
//           Total: ${getTotalPrice().toFixed(2)}
//         </p>
//         <button
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//           onClick={() => navigate("/checkout")}
//         >
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
  } = useCart();
  const navigate = useNavigate();

  const getImageUrl = (imageArray) => {
    return imageArray?.[0] || "/path/to/default/image.jpg";
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">My Cart</h1>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b pb-4"
            >
              <img
                src={getImageUrl(item.images)}
                alt={item.title}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-base sm:text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">${item.price}</p>

                <div className="flex items-center gap-4 mt-2">
                  <button
                    className="bg-gray-200 p-1 sm:p-2 rounded text-sm"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    className="bg-gray-200 p-1 sm:p-2 rounded text-sm"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="text-red-500 text-sm self-start sm:self-auto"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Total and Checkout */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-t pt-4 gap-4">
        <p className="text-lg sm:text-xl font-semibold">
          Total: ${getTotalPrice().toFixed(2)}
        </p>
        <button
          className="bg-blue-600 text-white px-4 py-2 sm:px-6 rounded hover:bg-blue-700"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
