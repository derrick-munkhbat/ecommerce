// components/ArticleCard.js
import React from "react";

function ArticleCard({ article, onEdit, onDelete }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <img
        src={article.image}
        alt={article.topic}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{article.topic}</h2>
        <p className="text-sm text-gray-600">{article.description}</p>
        <p className="text-sm text-gray-600">{article.date}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => onEdit(article)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(article)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
