"use client";

// pages/HomePage.js

import React, { useState } from "react";
// import ModalForm from "../components/ModalForm";
import Card from "../components/Card"; // Import the Card component
import useFetchProducts from "../hooks/useFetchProducts";

const HomePage = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { products, loading, error } = useFetchProducts();

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className="mx-auto w-full mb-10">
      <h3 className="flex items-center justify-center text-3xl font-bold mt-5">
        Products
      </h3>

      {loading && <p className="text-center">Loading products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image} // Assuming you have an image field
                price={product.price}
                onAddToCart={() => console.log("Added to cart:", product)}
                onViewDetails={() =>
                  console.log("Viewing details for:", product)
                }
                onAddToFavorites={() =>
                  console.log("Added to favorites:", product)
                }
                onEdit={function (): void {
                  throw new Error("Function not implemented.");
                }}
                onDelete={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      )}

      {/* {isModalOpen && <ModalForm onClose={closeModal} />} */}
    </div>
  );
};

export default HomePage;
