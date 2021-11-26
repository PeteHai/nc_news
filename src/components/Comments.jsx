import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentVoter from "./CommentVoter.jsx";
import DeleteComment from "./DeleteComment.jsx";
import { getArticleComments } from "./utils/api.js";

const Comments = ({ commentButtonStatus, article_id }) => {
  const [commentsState, setCommentsState] = useState([]);

  useEffect(() => {
    getArticleComments(article_id).then((commentsFromApi) => {
      setCommentsState(commentsFromApi);
    });
  }, [commentsState]);

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
              <CommentVoter votes={comment.votes} />
              <DeleteComment
                commentUsername={comment.author}
                comment_id={comment.comment_id}
              />
            </div>
          );
        })}
      </div>
    );
  }
};

export default Comments;
