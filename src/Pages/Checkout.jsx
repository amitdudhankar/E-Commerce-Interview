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
    id: Date.now(), // unique id
    items: cartItems,
    total: getTotalPrice(),
    date: new Date().toLocaleString(),
  };

  const updatedOrders = [newOrder, ...existingOrders];
  localStorage.setItem("orders", JSON.stringify(updatedOrders));

  setOrderPlaced(true);

  setTimeout(() => {
    clearCart();
    navigate("/orders");
  }, 2000);
};


  if (cartItems.length === 0 && !orderPlaced)
    return <p className="text-center mt-10">Your cart is empty.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {orderPlaced ? (
        <div className="text-center text-green-600 text-xl font-semibold">
          ✅ Your order has been placed!
        </div>
      ) : (
        <>
          {/* Order Summary */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
            <ul className="space-y-2">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-right font-bold text-xl">
              Total: ${getTotalPrice().toFixed(2)}
            </p>
          </div>

          {/* Billing Info (dummy for now) */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Billing Info</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Shipping Address"
              className="w-full p-2 border rounded mb-2"
            />
          </div>

          <button
            onClick={handlePlaceOrder}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
