import React, { createContext, useContext, useState } from "react";

// Creating a context for the cart
const CartContext = createContext();

// Hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const itemFound = prevCart.find((item) => item.id === product.id);

      if (itemFound) {
        // If item is already in cart, increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item is not in cart, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  // Function to increase quantity
  const increaseQuantity = (id) => {
    setCartItems((cart) =>
      cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  };

  // Function to decrease quantity but keep it minimum 1
  const decreaseQuantity = (id) => {
    setCartItems((cart) =>
      cart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
    );
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]); // maybe confirm with user later
  };

  // Get total price of all items
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
