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

  // Function to get image from array
  const getImage = (arr) => {
    if (arr && arr.length > 0) {
      return arr[0];
    } else {
      return "/placeholder.jpg";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-[#f2f2f2] min-h-screen">
      <h1 className="text-3xl font-bold mb-10 text-gray-800">Shopping Cart</h1>

      {/* If no items in cart */}
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">You have no items in cart.</p>
        </div>
      ) : (
        <>
          {/* Loop through each cart item */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border p-5 mb-6 flex flex-col sm:flex-row gap-5 items-center shadow-sm"
            >
              {/* Product Image */}
              <img
                src={getImage(item.images)}
                alt="product"
                className="w-24 h-24 object-cover rounded-lg border"
              />

              {/* Product Info */}
              <div className="flex-1 w-full">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>

                {/* Quantity Controls */}
                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-8 h-8 bg-gray-200 text-gray-800 rounded-full font-bold"
                  >
                    -
                  </button>
                  <span className="text-base font-medium">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-8 h-8 bg-gray-200 text-gray-800 rounded-full font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-500 flex items-center gap-1 hover:text-red-600"
              >
                <FiTrash2 size={16} />
                Remove
              </button>
            </div>
          ))}

          {/* Total Price & Checkout Button */}
          <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xl font-semibold text-gray-800">
              Total Price:{" "}
              <span className="text-blue-600">
                ${getTotalPrice().toFixed(2)}
              </span>
            </p>

            <button
              onClick={() => navigate("/checkout")}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
