// ArticleList.jsx
import React from "react";
import ArticleCard from "./ArticleCard"; // Adjust the path as necessary

const ArticleList = ({ articles, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          onEdit={onEdit}
          onDelete={() => onDelete(article.id)}
        />
      ))}
    </div>
  );
};

export default ArticleList;
