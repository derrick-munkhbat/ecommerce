"use client";

// pages/HomePage.js

import React from "react";
import { useRouter } from "next/navigation";
import Card from "../components/Card"; // Import the Card component
import useFetchProducts from "../hooks/useFetchProducts";

const HomePage = () => {
  const { products, loading, error } = useFetchProducts();
  const router = useRouter(); // Hook to programmatically navigate

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
          Cart
        </button>
      </div>

      {loading && <p className="text-center mt-5">Loading products...</p>}
      {error && <p className="text-center text-blue-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image} // Assuming you have an image field
                price={product.price}
                onAddToCart={() => console.log("Added to cart:", product)}
              />
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
