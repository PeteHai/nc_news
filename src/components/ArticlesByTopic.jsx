import { useEffect, useState } from "react";
import { getArticlesByTopic } from "./utils/api";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const ArticlesByTopic = () => {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticlesByTopic(topic).then((articlesByTopicFromApi) => {
      //need use params to get topic
      setArticlesByTopic(articlesByTopicFromApi);
    });
  }, []);

  // now this renders below all the other articles

  return (
    <main className="articlesByTopic">
      <h2> articles/{`${topic}`} </h2>
      <div>
        {articlesByTopic.map((article) => {
          return (
            //return item cards here???
            <li className="singleArticle" key={article.article_id}>
              <h3>title: {article.title}</h3>
              <p>topic: {article.topic} </p>
              <p>author: {article.author} </p>
              <p>created_at: {article.created_at} </p>
              <p>votes: {article.votes} </p>
              <p>comments: {article.comment_count} </p>
            </li>
          );
        })}
      </div>
    </main>
  );
};

export default ArticlesByTopic;
