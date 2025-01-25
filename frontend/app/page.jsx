"use client";
import { v4 as uuidv4 } from "uuid";

import React, { useState, useEffect } from "react";
import CreateArticleButton from "../components/CreateArticleButton";
import ModalForm from "../components/ModalForm";
import ArticleList from "../components/ArticleList";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/mockdata");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingArticle(null);
  };

  // const handleSubmit = async (data) => {
  //   if (editingArticle) {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:3000/api/mockdata/${editingArticle.id}`,
  //         {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(data),
  //         }
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to update article");
  //       }
  //       const updatedArticle = await response.json();
  //       setArticles((prev) =>
  //         prev.map((article) =>
  //           article.id === editingArticle.id ? updatedArticle : article
  //         )
  //       );
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   } else {
  //     try {
  //       const response = await fetch("http://localhost:3000/api/mockdata", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       });
  //       if (!response.ok) {
  //         throw new Error("Failed to create article");
  //       }
  //       const newArticle = await response.json();
  //       setArticles((prev) => [...prev, newArticle]);
  //       fetchArticles(); // Fetch updated data from backend
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  const handleSubmit = async (data) => {
    if (editingArticle) {
      // Update existing article
      try {
        const response = await fetch(
          `http://localhost:3000/api/mockdata/${editingArticle.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update article");
        }
        const updatedArticle = await response.json();
        setArticles((prev) =>
          prev.map((article) =>
            article.id === editingArticle.id ? updatedArticle : article
          )
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      // Create new article
      const newArticle = { ...data, id: uuidv4() }; // Generate a unique ID here
      try {
        const response = await fetch("http://localhost:3000/api/mockdata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newArticle),
        });
        if (!response.ok) {
          throw new Error("Failed to create article");
        }
        const createdArticle = await response.json(); // Get the created article from the response
        console.log("Created Article:", createdArticle);
        setArticles((prev) => [...prev, createdArticle]); // Update the state with the new article
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDelete = async (id) => {
    // Implement delete functionality if needed
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
        initialData={editingArticle}
      />
      <ArticleList
        articles={articles}
        // onEdit={handleEdit}
        // onDelete={handleDelete}
      />
    </div>
  );
};

export default HomePage;
