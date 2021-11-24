import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleComments, patchCommentsVote } from "./utils/api.js";

const Comments = ({ commentButtonStatus, article_id }) => {
  const [commentsState, setCommentsState] = useState([]);
  const [votesInc, setVotesInc] = useState(0);
  const [buttonStatus, setButtonStatus] = useState("add vote");
  useEffect(() => {
    getArticleComments(article_id).then((commentsFromApi) => {
      setCommentsState(commentsFromApi);
    });
  }, []);

  if (commentButtonStatus === "click to see all comments") {
    return null;
  } else {
    return (
      <div className="revealComments">
        {commentsState.map((comment) => {
          return (
            <div className="commentCard">
              <p>comment_id: {comment.comment_id}</p>
              <p>author: {comment.author}</p>
              <p>{comment.body}</p>
              <p>comment created at: {comment.created_at}</p>

              <p>votes: {comment.votes + votesInc}</p>
              <button
                onClick={() => {
                  if (buttonStatus === "add vote") {
                    patchCommentsVote(article_id, 1);
                    setVotesInc(votesInc + 1);
                    setButtonStatus("undo vote");
                  } else if (buttonStatus === "undo vote") {
                    patchCommentsVote(article_id, -1);
                    setVotesInc(votesInc - 1);
                    setButtonStatus("add vote");
                  }
                }}
              >
                {buttonStatus}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Comments;
