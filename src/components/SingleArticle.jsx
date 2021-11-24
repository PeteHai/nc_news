import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleArticle, patchArticleVote } from "./utils/api.js";

const SingleArticle = () => {
  const [articleState, setArticleState] = useState([]);
  const [votesInc, setVotesInc] = useState(0);
  const [buttonStatus, setButtonStatus] = useState("add vote");

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
        <p>votes: {articleState.votes + votesInc}</p>
        <button
          onClick={() => {
            if (buttonStatus === "add vote") {
              patchArticleVote(article_id, 1);
              setVotesInc(votesInc + 1);
              setButtonStatus("undo vote");
            } else if (buttonStatus === "undo vote") {
              patchArticleVote(article_id, -1);
              setVotesInc(votesInc - 1);
              setButtonStatus("add vote");
            }
          }}
        >
          {buttonStatus}
        </button>
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
