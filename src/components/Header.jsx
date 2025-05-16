import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const { cartItems } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow z-16">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left side: Logo + nav */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-blue-600 text-xl font-bold">
            E-Shop
          </Link>

          {/* Main nav - only for desktop */}
          <div className="hidden md:flex gap-4">
            <Link to="/" className="text-sm text-gray-700 hover:text-blue-600">
              All
            </Link>
            <Link
              to="/category/clothes"
              className="text-sm text-gray-700 hover:text-blue-600"
            >
              Clothes
            </Link>
            <Link
              to="/category/electronics"
              className="text-sm text-gray-700 hover:text-blue-600"
            >
              Electronics
            </Link>
            <Link
              to="/category/furniture"
              className="text-sm text-gray-700 hover:text-blue-600"
            >
              Furniture
            </Link>
            <Link
              to="/category/shoes"
              className="text-sm text-gray-700 hover:text-blue-600"
            >
              Shoes
            </Link>
            <Link
              to="/category/miscellaneous"
              className="text-sm text-gray-700 hover:text-blue-600"
            >
              Misc
            </Link>
          </div>
        </div>

        {/* Right side: Links */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-sm text-gray-600">akdudhankar11@gmail.com</span>
          <Link
            to="/orders"
            className="text-sm text-gray-700 hover:text-blue-600"
          >
            My Orders
          </Link>
          <Link
            to="/account"
            className="text-sm text-gray-700 hover:text-blue-600"
          >
            My Account
          </Link>
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-gray-700" size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Menu icon for mobile */}
        <button onClick={handleMenuClick} className="md:hidden text-gray-700">
          {drawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile nav menu */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="md:hidden bg-white border-t px-4 py-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Just normal nav links here too */}
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={handleMenuClick}
                className="text-gray-700 hover:text-blue-600"
              >
                All
              </Link>
              <Link
                to="/category/clothes"
                onClick={handleMenuClick}
                className="text-gray-700 hover:text-blue-600"
              >
                Clothes
              </Link>
              <Link
                to="/category/electronics"
                onClick={handleMenuClick}
                className="text-gray-700 hover:text-blue-600"
              >
                Electronics
              </Link>
              <Link
                to="/category/furniture"
                onClick={handleMenuClick}
                className="text-gray-700 hover:text-blue-600"
              >
                Furniture
              </Link>
              <Link
                to="/category/shoes"
                onClick={handleMenuClick}
                className="text-gray-700 hover:text-blue-600"
              >
                Shoes
              </Link>
              <Link
                to="/category/miscellaneous"
                onClick={handleMenuClick}
                className="text-gray-700 hover:text-blue-600"
              >
                Misc
              </Link>

              <hr className="my-2" />

              <Link
                to="/orders"
                onClick={handleMenuClick}
                className="text-gray-700 hover:text-blue-600"
              >
                My Orders
              </Link>
              <Link
                to="/account"
                onClick={handleMenuClick}
                className="text-gray-700 hover:text-blue-600"
              >
                My Account
              </Link>
              <Link
                to="/cart"
                onClick={handleMenuClick}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <FiShoppingCart size={18} />
                <span>Cart ({cartItems.length})</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
