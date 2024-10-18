"use client";

import { useRouter } from "next/navigation";
import mockArticles from "../../../api/mockData.json"; // Adjust the path as necessary

const FullStoryPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the article ID from the URL

  // Check if id is available
  if (!id) {
    return <div>Loading...</div>; // Show a loading state while the ID is being fetched
  }

  const article = mockArticles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-64 object-cover"
      />
      <p className="mt-4">{article.content}</p>
    </div>
  );
};

export default FullStoryPage;
