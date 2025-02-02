"use client";
// src/pages/cart/page.tsx

import React from "react";
import { useCart } from "../../context/CartContext"; // Adjust the import path as necessary

const CartPage = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } =
    useCart(); // Access the cart and functions from the context

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div className="flex-1">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 object-cover rounded-t-lg"
                />
                <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <p className="mt-2 font-bold">
                  ${Number(product.price).toFixed(2)} x {product.quantity}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <button
                    onClick={() => decrementQuantity(product.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  >
                    -
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(product.id)}
                    className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-2 bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700"
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
