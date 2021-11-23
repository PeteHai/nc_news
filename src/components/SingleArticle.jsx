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

  return <p>placeholder</p>;
};

export default SingleArticle;
