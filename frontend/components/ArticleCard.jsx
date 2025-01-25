// ArticleCard.jsx
import React from "react";
import PropTypes from "prop-types";

const ArticleCard = ({ article, onEdit, onDelete }) => {
  return (
    <div className="article-card border p-4 m-2">
      <h2 className="text-xl font-bold">{article.topic}</h2>
      {/* <img src={article.image} alt={article.topic} /> */}
      <p>{article.description}</p>
      <p>{article.date}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => onEdit(article)}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ArticleCard;
