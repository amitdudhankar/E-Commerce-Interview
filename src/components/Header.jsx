// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

// const Header = () => {
//   const { cartItems } = useCart();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);

//   return (
//     <div
//       style={{
//         position: "sticky",
//         top: 0,
//         background: "#fff",
//         zIndex: 10,
//         boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//       }}
//     >
//       <div className="flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto">
//         {/* Left Section */}
//         <div className="flex items-center gap-6">
//           <Link to="/" className="text-blue-600 text-xl font-semibold">
//             E-Commerce Shop
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex gap-4">
//             <Link to="/" className="text-sm text-gray-700 hover:text-blue-500">
//               All
//             </Link>
//             <Link
//               to="/category/clothes"
//               className="text-sm text-gray-700 hover:text-blue-500"
//             >
//               Clothes
//             </Link>
//             <Link
//               to="/category/electronics"
//               className="text-sm text-gray-700 hover:text-blue-500"
//             >
//               Electronics
//             </Link>
//             <Link
//               to="/category/furniture"
//               className="text-sm text-gray-700 hover:text-blue-500"
//             >
//               Furniture
//             </Link>
//             <Link
//               to="/category/shoes"
//               className="text-sm text-gray-700 hover:text-blue-500"
//             >
//               Shoes
//             </Link>
//             <Link
//               to="/category/miscellaneous"
//               className="text-sm text-gray-700 hover:text-blue-500"
//             >
//               Miscellaneous
//             </Link>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="hidden md:flex items-center gap-4">
//           <p className="text-sm">akdudhankar11@gmail.com</p>
//           <Link
//             to="/orders"
//             className="text-sm text-gray-700 hover:text-blue-500"
//           >
//             My Orders
//           </Link>
//           <Link
//             to="/account"
//             className="text-sm text-gray-700 hover:text-blue-500"
//           >
//             My Account
//           </Link>
//           <Link to="/cart" className="flex items-center gap-1">
//             <FiShoppingCart size={20} />
//             <span>{cartItems.length}</span>
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={toggleDrawer}
//           className="md:hidden text-gray-700 focus:outline-none"
//         >
//           {drawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Drawer */}
//       {drawerOpen && (
//         <div className="md:hidden px-4 py-3 bg-white border-t border-gray-200 flex flex-col gap-3">
//           <Link
//             to="/"
//             onClick={toggleDrawer}
//             className="text-gray-700 hover:text-blue-500"
//           >
//             All
//           </Link>
//           <Link
//             to="/category/clothes"
//             onClick={toggleDrawer}
//             className="text-gray-700 hover:text-blue-500"
//           >
//             Clothes
//           </Link>
//           <Link
//             to="/category/electronics"
//             onClick={toggleDrawer}
//             className="text-gray-700 hover:text-blue-500"
//           >
//             Electronics
//           </Link>
//           <Link
//             to="/category/furniture"
//             onClick={toggleDrawer}
//             className="text-gray-700 hover:text-blue-500"
//           >
//             Furniture
//           </Link>
//           <Link
//             to="/category/shoes"
//             onClick={toggleDrawer}
//             className="text-gray-700 hover:text-blue-500"
//           >
//             Shoes
//           </Link>
//           <Link
//             to="/category/miscellaneous"
//             onClick={toggleDrawer}
//             className="text-gray-700 hover:text-blue-500"
//           >
//             Miscellaneous
//           </Link>
//           <hr />
//           <Link
//             to="/orders"
//             onClick={toggleDrawer}
//             className="text-gray-700 hover:text-blue-500"
//           >
//             My Orders
//           </Link>
//           <Link
//             to="/account"
//             onClick={toggleDrawer}
//             className="text-gray-700 hover:text-blue-500"
//           >
//             My Account
//           </Link>
//           <Link
//             to="/cart"
//             onClick={toggleDrawer}
//             className="flex items-center gap-1 text-gray-700 hover:text-blue-500"
//           >
//             <FiShoppingCart size={20} />
//             <span>{cartItems.length}</span>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const { cartItems } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-blue-600 text-2xl font-bold tracking-wide"
          >
            E-Shop
          </Link>
          <nav className="hidden md:flex gap-6">
            {[
              "All",
              "Clothes",
              "Electronics",
              "Furniture",
              "Shoes",
              "Miscellaneous",
            ].map((cat) => (
              <Link
                key={cat}
                to={cat === "All" ? "/" : `/category/${cat.toLowerCase()}`}
                className="text-gray-700 text-sm hover:text-blue-600 transition"
              >
                {cat}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-sm text-gray-600">akdudhankar11@gmail.com</span>
          <Link
            to="/orders"
            className="text-sm text-gray-700 hover:text-blue-600 transition"
          >
            My Orders
          </Link>
          <Link
            to="/account"
            className="text-sm text-gray-700 hover:text-blue-600 transition"
          >
            My Account
          </Link>
          <Link to="/cart" className="relative">
            <FiShoppingCart
              size={22}
              className="text-gray-700 hover:text-blue-600 transition"
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleDrawer} className="md:hidden text-gray-700">
          {drawerOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Animated Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-sm px-4 py-4"
          >
            <div className="flex flex-col gap-4">
              {[
                "All",
                "Clothes",
                "Electronics",
                "Furniture",
                "Shoes",
                "Miscellaneous",
              ].map((cat) => (
                <Link
                  key={cat}
                  to={cat === "All" ? "/" : `/category/${cat.toLowerCase()}`}
                  onClick={toggleDrawer}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {cat}
                </Link>
              ))}
              <hr className="my-2" />
              <Link
                to="/orders"
                onClick={toggleDrawer}
                className="text-gray-700 hover:text-blue-600"
              >
                My Orders
              </Link>
              <Link
                to="/account"
                onClick={toggleDrawer}
                className="text-gray-700 hover:text-blue-600"
              >
                My Account
              </Link>
              <Link
                to="/cart"
                onClick={toggleDrawer}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <FiShoppingCart size={20} />
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
