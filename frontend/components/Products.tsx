// src/components/Products.js

import React from "react";
import Card from "./Card"; // Import the Card component
import useFetchProducts from "../hooks/useFetchProducts"; // Custom hook to fetch products
import { useCart } from "../context/CartContext"; // Import cart context

const Products = () => {
  const { products, loading, error } = useFetchProducts(); // Fetch products
  const { addToCart } = useCart(); // Access cart context functions

  if (loading) return <p className="text-center mt-5">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {products.length > 0 ? (
        products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            onAddToCart={() => addToCart(product)} // Add to cart
          />
        ))
      ) : (
        <p className="text-center">No products found.</p>
      )}
    </div>
  );
};

export default Products;
