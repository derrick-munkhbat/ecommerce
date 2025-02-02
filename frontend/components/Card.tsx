// components/Card.tsx

import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  onAddToCart: () => void; // Function to handle adding to cart
  isInCart: boolean; // New prop to indicate if the item is in the cart
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  price,
  onAddToCart,
  isInCart, // Destructure the new prop
}) => {
  return (
    <div className="border p-4 mb-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-white">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <h4 className="text-xl font-semibold mt-2">{title}</h4>
      <p className="mt-2 text-gray-600">{description}</p>
      <p className="mt-2 font-bold">${Number(price).toFixed(2)}</p>
      <div className="flex justify-between mt-4 gap-2">
        <button
          onClick={onAddToCart}
          disabled={isInCart} // Disable the button if the item is in the cart
          className={`bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ${
            isInCart ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isInCart ? "Added to Cart" : "Add to Cart"}{" "}
          {/* Change button text */}
        </button>
      </div>
    </div>
  );
};

export default Card;
