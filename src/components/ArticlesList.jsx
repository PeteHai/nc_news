import React from "react";
import { useEffect, useState } from "react";
import { getArticles } from "./utils/api";

const ArticlesList = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setNewsArticles(articles);
    });
  }, []);

  return (
    <main className="articleList">
      <h2> Articles List here </h2>
    </main>
  );
};

export default ArticlesList;
