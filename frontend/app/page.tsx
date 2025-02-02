"use client";

// pages/HomePage.js

import React from "react";
import { useRouter } from "next/navigation";
import Products from "../components/Products"; // Import the Products component
import { useCart } from "../context/CartContext"; // Import cart context

const HomePage = () => {
  const router = useRouter(); // Hook to programmatically navigate
  const { cart } = useCart(); // Access the cart from the context

  const goToCart = () => {
    router.push("/cart"); // Navigate to the cart page
  };

  return (
    <div className="mx-auto w-full mb-10">
      <div className="flex items-center justify-center mt-5">
        <button
          onClick={goToCart}
          className="mr-4 bg-green-500 text-white text-2xl font-bold py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
        >
          Shopping Cart ({cart.length}) {/* Display the cart length */}
        </button>
      </div>
      <Products /> {/* Render the Products component */}
    </div>
  );
};

export default HomePage;
