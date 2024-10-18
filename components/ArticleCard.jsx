import React from "react";
import Link from "next/link";

function ArticleCard({ article, onEdit, onDelete }) {
  return (
    <div className="flex flex-col w-[300px] h-[300px] mx-auto bg-white rounded-xl shadow-md overflow-hidden p-5">
      {article.image ? (
        <img
          src={article.image}
          alt={article.topic || "Article image"}
          className="w-full h-48 object-cover border rounded"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 rounded"></div>
      )}
      <div className="flex-grow p-4">
        <h2 className="text-lg font-bold">
          {article.topic || "Untitled Article"}
        </h2>
        <p className="text-sm text-gray-600">
          {article.description || "No description available."}
        </p>
        <p className="text-sm text-gray-600">{article.date}</p>
      </div>
      <div className="flex justify-between mt-4">
        <Link href={`/articles/${article.id}`}>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
            View
          </button>
        </Link>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(article);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(article);
          }}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ArticleCard;
