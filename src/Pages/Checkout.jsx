// import React, { useState } from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const Checkout = () => {
//   const { cartItems, getTotalPrice, clearCart } = useCart();
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const navigate = useNavigate();

//   const handlePlaceOrder = () => {
//     const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

//     const newOrder = {
//       id: Date.now(),
//       items: cartItems,
//       total: getTotalPrice(),
//       date: new Date().toLocaleString(),
//     };

//     const updatedOrders = [newOrder, ...existingOrders];
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));

//     setOrderPlaced(true);

//     setTimeout(() => {
//       clearCart();
//       navigate("/orders");
//     }, 2000);
//   };

//   if (cartItems.length === 0 && !orderPlaced)
//     return (
//       <p className="text-center mt-10 text-base sm:text-lg">
//         Your cart is empty.
//       </p>
//     );

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <h1 className="text-xl sm:text-2xl font-bold mb-6">Checkout</h1>

//       {orderPlaced ? (
//         <div className="text-center text-green-600 text-lg sm:text-xl font-semibold">
//           ✅ Your order has been placed!
//         </div>
//       ) : (
//         <>
//           {/* Order Summary */}
//           <div className="mb-6">
//             <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
//             <ul className="space-y-2 text-sm sm:text-base">
//               {cartItems.map((item) => (
//                 <li
//                   key={item.id}
//                   className="flex flex-col sm:flex-row justify-between"
//                 >
//                   <span>
//                     {item.title} × {item.quantity}
//                   </span>
//                   <span className="text-right sm:text-left">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//             <p className="mt-4 text-right font-bold text-lg sm:text-xl">
//               Total: ${getTotalPrice().toFixed(2)}
//             </p>
//           </div>

//           {/* Billing Info */}
//           <div className="mb-6">
//             <h2 className="text-lg font-semibold mb-2">Billing Info</h2>
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full p-2 border rounded mb-2 text-sm sm:text-base"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full p-2 border rounded mb-2 text-sm sm:text-base"
//             />
//             <input
//               type="text"
//               placeholder="Shipping Address"
//               className="w-full p-2 border rounded mb-2 text-sm sm:text-base"
//             />
//           </div>

//           <button
//             onClick={handlePlaceOrder}
//             className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded hover:bg-green-700 text-sm sm:text-base"
//           >
//             Place Order
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Checkout;

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: getTotalPrice(),
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("orders", JSON.stringify([newOrder, ...existingOrders]));
    setOrderPlaced(true);

    setTimeout(() => {
      clearCart();
      navigate("/orders");
    }, 2000);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-[#f9fafb] min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">Checkout</h1>

      {orderPlaced ? (
        <div className="text-center text-green-600 text-xl font-semibold">
          Your order has been placed!
        </div>
      ) : (
        <>
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <ul className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between py-2 text-gray-700">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-right text-xl font-bold text-gray-900">
              Total: <span className="text-blue-600">${getTotalPrice().toFixed(2)}</span>
            </p>
          </div>

          {/* Billing Info */}
          <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-200 mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Billing Information</h2>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
              <input
                type="text"
                placeholder="Shipping Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            </div>
          </div>

          {/* Place Order Button */}
          <div className="text-right">
            <button
              onClick={handlePlaceOrder}
              className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg transition duration-300"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
