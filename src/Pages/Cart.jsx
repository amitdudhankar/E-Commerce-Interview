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

//   const getImageUrl = (imageArray) => {
//     return imageArray?.[0] || "/path/to/default/image.jpg";
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <h1 className="text-xl sm:text-2xl font-bold mb-6">My Cart</h1>

//       {cartItems.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         <div className="space-y-6">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b pb-4"
//             >
//               <img
//                 src={getImageUrl(item.images)}
//                 alt={item.title}
//                 className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded"
//               />
//               <div className="flex-1">
//                 <h2 className="text-base sm:text-lg font-semibold">{item.title}</h2>
//                 <p className="text-sm text-gray-600">${item.price}</p>

//                 <div className="flex items-center gap-4 mt-2">
//                   <button
//                     className="bg-gray-200 p-1 sm:p-2 rounded text-sm"
//                     onClick={() => decreaseQuantity(item.id)}
//                   >
//                     -
//                   </button>
//                   <span className="text-sm">{item.quantity}</span>
//                   <button
//                     className="bg-gray-200 p-1 sm:p-2 rounded text-sm"
//                     onClick={() => increaseQuantity(item.id)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               <button
//                 className="text-red-500 text-sm self-start sm:self-auto"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Total and Checkout */}
//       <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-t pt-4 gap-4">
//         <p className="text-lg sm:text-xl font-semibold">
//           Total: ${getTotalPrice().toFixed(2)}
//         </p>
//         <button
//           className="bg-blue-600 text-white px-4 py-2 sm:px-6 rounded hover:bg-blue-700"
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
import { FiTrash2 } from "react-icons/fi";

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
    return imageArray?.[0] || "/placeholder.jpg";
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-[#f9fafb] min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white border border-gray-200 rounded-3xl shadow-md transition-transform hover:shadow-lg"
              >
                <img
                  src={getImageUrl(item.images)}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-xl border border-gray-200"
                />
                <div className="flex-1 w-full">
                  <h2 className="text-lg font-semibold text-gray-900 leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 flex items-center justify-center text-lg bg-gray-100 hover:bg-gray-200 rounded-full font-semibold"
                    >
                      -
                    </button>
                    <span className="text-base font-medium text-gray-700">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 flex items-center justify-center text-lg bg-gray-100 hover:bg-gray-200 rounded-full font-semibold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1"
                >
                  <FiTrash2 size={16} />
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total & Checkout */}
          <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-2xl font-semibold text-gray-900">
              Total:{" "}
              <span className="text-blue-600">
                ${getTotalPrice().toFixed(2)}
              </span>
            </p>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg transition-all duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
