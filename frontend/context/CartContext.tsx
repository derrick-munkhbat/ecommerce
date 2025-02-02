// src/context/CartContext.js

"use client";

import React, { createContext, useContext, useState } from "react";

// Define the shape of the product
interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number; // Add quantity to the product
}

// Define the shape of the cart context
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  incrementQuantity: (productId: number) => void; // New function
  decrementQuantity: (productId: number) => void; // New function
  removeFromCart: (productId: number) => void; // New function
}

// Create a context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]); // State for cart items

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product already exists, increment the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product does not exist, add it with quantity 1
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
    console.log("Added to cart:", product);
  };

  const incrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    console.log("Removed from cart:", productId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
