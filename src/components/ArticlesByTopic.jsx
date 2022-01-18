import { useEffect, useState } from "react";
import { getArticlesByTopic } from "./utils/api";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import Select from "react-select";

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
      params.append("sort_by", sortBy);
    } else {
      params.delete("sort_by");
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
      <div className="sortByForm">
        <form className="articleSortingForm">
          <Select
            className="sortBy"
            name="sortBy"
            id="sortBy"
            isSearchable="false"
            placeholder="sort articles by ..."
            options={[
              { label: "date created", value: "created_at" },
              { label: "comment count", value: "comment_count" },
              { label: "votes", value: "votes" },
            ]}
            onChange={(event) => {
              setSortBy(event.value);
            }}
          ></Select>
          <Select
            className="sortBy"
            name="orderby"
            id="orderby"
            isSearchable="false"
            placeholder="order artciles by ..."
            options={[
              { label: "ascending", value: "asc" },
              { label: "descending", value: "desc" },
            ]}
            onChange={(event) => {
              setOrderby(event.value);
            }}
          ></Select>
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
                <h3 className="SATitle">title: {article.title}</h3>
                <p className="SAAuthor">author: {article.author} </p>
                <div className="lineBreak"></div>
                <p className="SATopic">topic: {article.topic} </p>
                <p className="SACreated">
                  posted at:{" "}
                  {article.created_at.slice(11, -8) +
                    ",   " +
                    article.created_at.slice(0, 10)}{" "}
                </p>
                <p className="SAVotes">votes : {article.votes} </p>
                <p className="SAComments">comments: {article.comment_count} </p>
              </li>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default ArticlesByTopic;
