import React from "react";

function ArticleCard({ article, onEdit, onDelete }) {
  return (
    <div className="flex flex-col w-[300px] h-[300px] mx-auto bg-white rounded-xl shadow-md overflow-hidden p-5">
      <img
        src={article.image}
        alt={article.topic}
        className="w-full h-48 object-cover border rounded-"
      />
      <div className="flex-grow p-4">
        <h2 className="text-lg font-bold">{article.topic}</h2>
        <p className="text-sm text-gray-600">{article.description}</p>
        <p className="text-sm text-gray-600">{article.date}</p>
      </div>
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
  );
}

export default ArticleCard;
