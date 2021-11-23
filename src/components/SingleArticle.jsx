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
    <div id="articleInFull" className="articleInFull">
      <h3 id="articleHeader" className="articleHeader">
        {articleState.topic} : {articleState.title}
      </h3>
      <p id="articleBody" className="articleBody">
        {articleState.body}
      </p>

      <ul id="articleAuthorBox" className="articleAuthorBox">
        <p>author: {articleState.author}</p>
        <p>posted at: {articleState.created_at}</p>
      </ul>
      
      <ul className="articleVotingBox">
        <p>votes: {articleState.votes}</p>
        <button>vote</button>
      </ul>

      <ul className="articleCommentsBox">
        <p>comments: {articleState.comment_count}</p>
        <button>see all comments</button>
      </ul>
    </div>
  );
};

export default SingleArticle;

//add detail to topic, button to show comments and add form etc
