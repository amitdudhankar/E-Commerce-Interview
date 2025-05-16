import React from "react";

const MyAccount = () => {
  const user = {
    name: "Amit Dudhankar",
    email: "akdudhankar11@gmail.com",
    phone: "+91-8329005933",
    address: "Pune, Maharashtra, India",
    joined: "May 14, 2025",
  };

  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", fontSize: "28px", marginBottom: "30px" }}>
          My Account
        </h1>

        <div style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
          {/* Profile Picture and Name */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <img
              src="/assets/Amit Photo.jpg"
              alt="User"
              style={{ width: "80px", height: "80px", borderRadius: "50%", marginRight: "20px", objectFit: "cover" }}
            />
            <div>
              <h2 style={{ fontSize: "20px", margin: "0" }}>{user.name}</h2>
              <p style={{ color: "#555" }}>{user.email}</p>
            </div>
          </div>

          {/* User Info */}
          <div style={{ lineHeight: "1.8" }}>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Joined:</strong> {user.joined}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
