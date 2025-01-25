// components/Card.js

import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 m-2">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-gray-700 mt-1">{description}</p>
    </div>
  );
};

export default Card;
