import { useEffect, useState } from "react";
import CommentVoter from "./CommentVoter.jsx";
import DeleteComment from "./DeleteComment.jsx";
import PostComment from "./PostComment.jsx";
import { getArticleComments } from "./utils/api.js";

const Comments = ({ commentButtonStatus, article_id }) => {
  const [commentsState, setCommentsState] = useState([]);

  const [postButtonStatus, setPostButtonStatus] = useState(
    "click here to post a comment..."
  );

  useEffect(() => {
    let mounted = true;
    getArticleComments(article_id).then((commentsFromApi) => {
      if (mounted) {
        setCommentsState(commentsFromApi);
      }
    });
    return function cleanup() {
      mounted = false;
    };
  }, [article_id]);

  if (commentButtonStatus === "click to see all comments") {
    return null;
  } else {
    return (
      <div className="revealComments">
        <div>
          {commentsState.map((comment) => {
            return (
              <div className="commentCard" key={comment.comment_id}>
                <p className="commentBody">{comment.body}</p>
                <p className="Lbreak1" />
                <p className="commentCreated">
                  comment posted at: {comment.created_at}
                </p>
                <p className="Lbreak2" />
                <p className="commentAuthor">by author: {comment.author}</p>
                <CommentVoter votes={comment.votes} />

                <p className="Lbreak3" />

                <DeleteComment
                  className="deleteComment"
                  commentUsername={comment.author}
                  comment_id={comment.comment_id}
                  setCommentsState={setCommentsState}
                  commentsState={commentsState}
                />
              </div>
            );
          })}
        </div>
        <div className="postCommentsContainer">
          <button
            onClick={() => {
              if (postButtonStatus === "click here to post a comment...") {
                setPostButtonStatus("click to minimize posting your comment");
              } else if (
                postButtonStatus === "click to minimize posting your comment"
              ) {
                setPostButtonStatus("click here to post a comment...");
              }
            }}
          >
            {postButtonStatus}
          </button>
          <PostComment
            //pass down post comment props
            postButtonStatus={postButtonStatus}
            article_id={article_id}
            setCommentsState={setCommentsState}
            commentsState={commentsState}
          />
        </div>
      </div>
    );
  }
};

export default Comments;
