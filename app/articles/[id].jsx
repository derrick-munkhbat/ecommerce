import { useRouter } from "next/router";
import mockArticles from "./api/mockData.json";

const ArticleDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log("Router ID:", id); // Log the ID from the router
  console.log("Mock Articles:", mockArticles); // Log the articles array

  // Find the article based on the id
  const article = mockArticles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.topic}</h1>
      <p>{article.description}</p>
      <img src={article.image} alt={article.topic} />
      <p>Date: {article.date}</p>
    </div>
  );
};

export default ArticleDetails;
