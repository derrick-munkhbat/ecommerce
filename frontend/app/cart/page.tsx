// app/cart/page.tsx

"use client"; // Ensure this component can use hooks

import React from "react";
import { useCart } from "../../context/CartContext"; // Adjust the import path as necessary

const CartPage = () => {
  const { cart, removeFromCart } = useCart(); // Access cart items and remove function

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cart.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg shadow">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-2 font-bold">
                ${Number(product.price).toFixed(2)}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => addToFavorites(product)} // Add to favorites
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                >
                  Add to Favorites
                </button>
                <button
                  onClick={() => removeFromCart(product.id)} // Remove from cart
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
