import { useEffect, useState } from "react";
import { getArticlesByTopic } from "./utils/api";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const ArticlesByTopic = () => {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const { topic } = useParams();

  const [sortBy, setSortBy] = useState(undefined);
  const [orderBy, setOrderby] = useState(undefined);
  let navigate = useNavigate();

  useEffect(() => {
    let mounted = true;

    getArticlesByTopic(sortBy, orderBy, topic).then(
      (articlesByTopicFromApi) => {
        if (mounted) {
          setArticlesByTopic(articlesByTopicFromApi);
        }
      }
    );

    const params = new URLSearchParams();

    if (sortBy !== undefined) {
      params.append("sortBy", sortBy);
    } else {
      params.delete("sortBy");
    }

    if (orderBy !== undefined) {
      params.append("order", orderBy);
    } else {
      params.delete("orderBy");
    }

    navigate({ search: params.toString() });

    return function cleanup() {
      mounted = false;
    };
  }, [sortBy, orderBy, topic, navigate]);

  //another useEffect - triggered by sortByQuery changing

  const isThereATopic = (topic) => {
    return !topic ? "/all-articles" : `/${topic}`;
  };

  return (
    <main className="articlesByTopic">
      <h2 className="articlesByTopicHeader">
        {" "}
        articles{isThereATopic(topic)}{" "}
      </h2>
      <div className="sortBy">
        sortBy bar
        <form className="articleSortingForm">
          <select
            className="sortBy"
            name="sortBy"
            id="sortBy"
            multiple="multiple"
            onChange={(value) => {
              //trigger fn that sets URL and setSortBy
              setSortBy(value.target.value);
            }}
          >
            <option value="created_at">date created</option>
            <option value="comment_count">comment count</option>
            <option value="votes">votes</option>
          </select>
          <select
            className="sortBy"
            name="orderby"
            id="orderby"
            multiple="multiple"
            onChange={(value) => {
              setOrderby(value.target.value);
            }}
          >
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </select>
        </form>
      </div>

      <div>
        {articlesByTopic.map((article) => {
          return (
            <Link
              className="linkToArticle"
              to={`/articles/${article.topic}/${article.article_id}`}
              key={article.article_id}
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
