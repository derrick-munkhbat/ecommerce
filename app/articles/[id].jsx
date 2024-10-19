import { useRouter } from "next/router";
import mockArticles from "../api/mockData.json";

const ArticleDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>; // Show loading state
  }

  const article = mockArticles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>; // Handle article not found
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
