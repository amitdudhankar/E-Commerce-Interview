import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const { cartItems } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

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
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-blue-600 text-xl font-semibold">
            E-Commerce Shop
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4">
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
              to="/category/shoes"
              className="text-sm text-gray-700 hover:text-blue-500"
            >
              Shoes
            </Link>
            <Link
              to="/category/miscellaneous"
              className="text-sm text-gray-700 hover:text-blue-500"
            >
              Miscellaneous
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <p className="text-sm">akdudhankar11@gmail.com</p>
          <Link
            to="/orders"
            className="text-sm text-gray-700 hover:text-blue-500"
          >
            My Orders
          </Link>
          <Link
            to="/account"
            className="text-sm text-gray-700 hover:text-blue-500"
          >
            My Account
          </Link>
          <Link to="/cart" className="flex items-center gap-1">
            <FiShoppingCart size={20} />
            <span>{cartItems.length}</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleDrawer}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {drawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="md:hidden px-4 py-3 bg-white border-t border-gray-200 flex flex-col gap-3">
          <Link
            to="/"
            onClick={toggleDrawer}
            className="text-gray-700 hover:text-blue-500"
          >
            All
          </Link>
          <Link
            to="/category/clothes"
            onClick={toggleDrawer}
            className="text-gray-700 hover:text-blue-500"
          >
            Clothes
          </Link>
          <Link
            to="/category/electronics"
            onClick={toggleDrawer}
            className="text-gray-700 hover:text-blue-500"
          >
            Electronics
          </Link>
          <Link
            to="/category/furniture"
            onClick={toggleDrawer}
            className="text-gray-700 hover:text-blue-500"
          >
            Furniture
          </Link>
          <Link
            to="/category/shoes"
            onClick={toggleDrawer}
            className="text-gray-700 hover:text-blue-500"
          >
            Shoes
          </Link>
          <Link
            to="/category/miscellaneous"
            onClick={toggleDrawer}
            className="text-gray-700 hover:text-blue-500"
          >
            Miscellaneous
          </Link>
          <hr />
          <Link
            to="/orders"
            onClick={toggleDrawer}
            className="text-gray-700 hover:text-blue-500"
          >
            My Orders
          </Link>
          <Link
            to="/account"
            onClick={toggleDrawer}
            className="text-gray-700 hover:text-blue-500"
          >
            My Account
          </Link>
          <Link
            to="/cart"
            onClick={toggleDrawer}
            className="flex items-center gap-1 text-gray-700 hover:text-blue-500"
          >
            <FiShoppingCart size={20} />
            <span>{cartItems.length}</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
