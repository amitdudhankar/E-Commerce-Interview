import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const getImageUrl = (images) => {
    return images?.[0] || "/path/to/default/image.jpg"; // fallback image
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p>You haven’t placed any orders yet.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="border p-4 mb-6 rounded shadow-sm bg-white"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600 text-sm">Order ID: {order.id}</p>
              <p className="text-sm text-gray-600">{order.date}</p>
            </div>

            <div className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={getImageUrl(item.images)}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 font-bold text-right">
              Total: ${order.total.toFixed(2)}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
