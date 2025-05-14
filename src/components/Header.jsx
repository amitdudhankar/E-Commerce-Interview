import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        background: "#fff",
        zIndex: 10,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto">
        {/* brand */}
        <Link to="/" className="text-blue-600 text-xl font-semibold">
          E-Commerce Shop
        </Link>

        {/* categories */}
        <div className="flex gap-4">
          <Link to="/" className="text-sm text-gray-700 hover:text-blue-500">
            All
          </Link>
          <Link
            to="/category/clothes"
            className="text-sm text-gray-700 hover:text-blue-500"
          >
            Clothes
          </Link>
          <Link
            to="/category/electronics"
            className="text-sm text-gray-700 hover:text-blue-500"
          >
            Electronics
          </Link>
          <Link
            to="/category/furniture"
            className="text-sm text-gray-700 hover:text-blue-500"
          >
            Furniture
          </Link>
          <Link
            to="/category/toys"
            className="text-sm text-gray-700 hover:text-blue-500"
          >
            Toys
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
