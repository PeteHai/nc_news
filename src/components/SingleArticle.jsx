import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleArticle } from "./utils/api";

const SingleArticle = () => {
  const [articleState, setArticleState] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((articleFromApi) => {
      setArticleState(articleFromApi);
    });
  }, []);

  return (
    <div>
      <h3>{articleState.title}</h3>
      <p>{articleState.body}</p>
      <p>author: {articleState.author}</p>
    </div>
  );
};

export default SingleArticle;
