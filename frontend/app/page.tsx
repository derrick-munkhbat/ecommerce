"use client";

// pages/HomePage.js

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../components/Card"; // Import the Card component
import useFetchProducts from "../hooks/useFetchProducts";


const HomePage = () => {
  const { products, loading, error } = useFetchProducts();
  const router = useRouter(); // Hook to programmatically navigate
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]); // State for cart items
  const [favorites, setFavorites] = useState([]); // State for favorite items

  const goToCart = () => {
    router.push("/cart"); // Navigate to the cart page
  };

  const goToFavorites = () => {
    router.push("/favorites"); // Navigate to the favorites page
  };

  const openModal = (product) => {
    setSelectedProduct(product); // Set the selected product
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProduct(null); // Clear the selected product
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to cart
    console.log("Added to cart:", product);
    // Optionally show a notification
  };

  const handleAddToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]); // Add product to favorites
    console.log("Added to favorites:", product);
    // Optionally show a notification
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
        <button
          onClick={goToFavorites}
          className="bg-blue-500 text-white text-2xl font-bold py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
        >
          Favorites
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
                onViewDetails={() => openModal(product)} // Open modal with product details
                onAddToFavorites={() =>
                  console.log("Added to favorites:", product)
                }
                onEdit={() => console.log("Edit product:", product)}
                onDelete={() => console.log("Delete product:", product)}
              />
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      )}

      {/* Modal for viewing product details */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
              <button
                onClick={closeModal}
                className="text-xl font-bold text-red-500"
              >
                &times; {/* This is the "X" icon */}
              </button>
            </div>
            <p className="mt-2">{selectedProduct.description}</p>
            <p className="mt-4">
              Price: ${Number(selectedProduct.price).toFixed(2)}
            </p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleAddToFavorites(selectedProduct)}
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
              >
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
function setCart(arg0: (prevCart: any) => any[]) {
  throw new Error("Function not implemented.");
}

function setFavorites(arg0: (prevFavorites: any) => any[]) {
  throw new Error("Function not implemented.");
}
