"use client";

import React, { useState } from "react";
import CreateArticleButton from "../components/CreateArticleButton";
import ModalForm from "../components/ModalForm";
import ArticleCard from "../components/ArticleCard";
import mockArticles from "../api/mockData.json";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articles, setArticles] = useState(mockArticles);
  const [editingArticle, setEditingArticle] = useState(null); // Track the article being edited

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingArticle(null); // Reset editing article on close
  };

  const handleSubmit = (data) => {
    if (editingArticle) {
      // Update existing article
      setArticles((prev) =>
        prev.map((article) =>
          article.id === editingArticle.id ? { ...article, ...data } : article
        )
      );
    } else {
      // Add new article
      setArticles((prev) => [...prev, { id: Date.now(), ...data }]);
    }
  };

  const handleEdit = (article) => {
    setEditingArticle(article); // Set the article to be edited
    setIsModalOpen(true); // Open the modal
  };

  const handleDelete = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div className="mx-auto w-full mb-10">
      <h3 className="flex items-center justify-center text-3xl font-bold mt-5">
        Articles
      </h3>
      <CreateArticleButton onClick={handleOpenModal} />
      <ModalForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        initialData={editingArticle} // Pass the article data to be edited
      />
      <div className="grid-cols-1 gap-5 flex flex-wrap">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onEdit={handleEdit}
            onDelete={() => handleDelete(article.id)} // Pass the article's id to handleDelete
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
