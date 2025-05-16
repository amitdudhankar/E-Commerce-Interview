import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "28px", textAlign: "center", marginBottom: "30px" }}>
          My Orders
        </h1>

        {orders.length === 0 ? (
          <p style={{ textAlign: "center", color: "#666" }}>
            You haven’t placed any orders yet.
          </p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              {/* Order Header */}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <p><strong>Order ID:</strong> {order.id}</p>
                <p style={{ color: "#555" }}>{order.date}</p>
              </div>

              {/* Order Items */}
              {order.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0",
                    borderTop: "1px solid #eee",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <img
                      src={item.images?.[0] || "/path/to/default/image.jpg"}
                      alt={item.title}
                      style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }}
                    />
                    <div>
                      <p style={{ margin: 0, fontWeight: "bold" }}>{item.title}</p>
                      <p style={{ margin: 0, color: "#777" }}>Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p style={{ fontWeight: "bold" }}>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}

              {/* Order Total */}
              <div style={{ textAlign: "right", marginTop: "15px" }}>
                <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Total: ${order.total.toFixed(2)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
