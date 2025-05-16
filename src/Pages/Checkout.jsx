import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const placeOrder = () => {
    const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: getTotalPrice(),
      date: new Date().toLocaleString(),
    };

    const updatedOrders = [newOrder, ...oldOrders];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    setOrderPlaced(true);

    setTimeout(() => {
      clearCart();
      navigate("/orders");
    }, 2000);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 text-lg">No items in your cart.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-[#f1f1f1] min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-gray-800">Checkout</h1>

      {orderPlaced ? (
        <div className="text-green-600 text-lg font-semibold text-center">
          Order placed successfully!
        </div>
      ) : (
        <>
          {/* Order Summary */}
          <div className="bg-white p-5 rounded-xl border mb-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Order Summary</h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between py-2 border-b text-gray-700"
              >
                <span>
                  {item.title} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="mt-4 text-right font-bold text-gray-900">
              Total: ${getTotalPrice().toFixed(2)}
            </div>
          </div>

          {/* Billing Info */}
          <div className="bg-white p-5 rounded-xl border mb-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Billing Info</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Shipping Address"
              className="w-full mb-3 px-3 py-2 border rounded"
            />
          </div>

          {/* Place Order Button */}
          <div className="text-right">
            <button
              onClick={placeOrder}
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
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
