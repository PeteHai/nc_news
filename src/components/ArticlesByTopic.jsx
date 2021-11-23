import { useEffect, useState } from "react";
import { getArticlesByTopic } from "./utils/api";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const ArticlesByTopic = () => {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticlesByTopic(topic).then((articlesByTopicFromApi) => {
      setArticlesByTopic(articlesByTopicFromApi);
    });
  }, [topic]);

  const isThereATopic = (topic) => {
    return !topic ? "/all-articles" : `/${topic}`;
  };

  return (
    <main className="articlesByTopic">
      <h2> articles{isThereATopic(topic)} </h2>
      <div>
        {articlesByTopic.map((article) => {
          return (

            <Link
              className="linkToArticle"
              to={`/articles/${article.topic}/${article.article_id}`}
            >
              <li className="singleArticleOnHome" key={article.article_id}>
                <h3>title: {article.title}</h3>
                <p>topic: {article.topic} </p>
                <p>author: {article.author} </p>
                <p>created_at: {article.created_at} </p>
                <p>votes: {article.votes} </p>
                <p>comments: {article.comment_count} </p>
              </li>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default ArticlesByTopic;
