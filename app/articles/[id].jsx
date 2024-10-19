"use client";

import { useRouter } from "next/navigation";
import mockData from "../api/mockData.json";
import { useEffect, useState } from "react";

const ArticleDetails = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Router is ready:", router.isReady);
    if (router.isReady) {
      setLoading(false);
    }
  }, [router.isReady]);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
        <p>Please wait while we load the article details.</p>
      </div>
    );
  }

  const { id } = router.query;

  if (!id) {
    return (
      <div>
        <h1>Loading...</h1>
        <p>Please wait while we load the article details.</p>
      </div>
    );
  }

  const articleId = parseInt(id);
  const article = mockData.find((article) => article.id === articleId);

  if (!article) {
    console.error("Article not found for ID:", articleId);
    return (
      <div>
        <h1>Article not found</h1>
        <p>Sorry, we couldn't find the article you're looking for.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{article.topic}</h1>
      <p>{article.description}</p>
      <img src={article.image} alt={article.topic} />
      <p>Date: {article.date}</p>
      <button onClick={() => router.back()}>Back to article list</button>
    </div>
  );
};

export default ArticleDetails;
