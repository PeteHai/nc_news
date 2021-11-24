import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleArticle, patchArticleVote } from "./utils/api.js";
import Comments from "./Comments.jsx";
import PostComment from "./PostComment.jsx";

const SingleArticle = () => {
  const [articleState, setArticleState] = useState([]);
  const [votesInc, setVotesInc] = useState(0);
  const [buttonStatus, setButtonStatus] = useState("add vote");
  const [commentButtonStatus, setCommentButtonStatus] = useState(
    "click to see all comments"
  );
  const [postButtonStatus, setPostButtonStatus] = useState(
    "click here to post a comment..."
  );

  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((articleFromApi) => {
      setArticleState(articleFromApi);
    });
  }, [article_id]); //should article_id be in here?

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
        <button
          onClick={() => {
            if (commentButtonStatus === "click to see all comments") {
              setCommentButtonStatus("click to hide comments");
            } else if (commentButtonStatus === "click to hide comments") {
              setCommentButtonStatus("click to see all comments");
            }
          }}
        >
          {commentButtonStatus}
        </button>
      </ul>
      <Comments
        commentButtonStatus={commentButtonStatus}
        article_id={article_id}
      />
      <div>
        <button
          onClick={() => {
            if (postButtonStatus === "click here to post a comment...") {
              setPostButtonStatus("click to cancel posting your comment");
            } else if (
              postButtonStatus === "click to cancel posting your comment"
            ) {
              setPostButtonStatus("click here to post a comment...");
            }
          }}
        >
          {postButtonStatus}
        </button>

        <PostComment
          //pass down post comment props

          commentButtonStatus={commentButtonStatus}
          article_id={article_id}
        />
      </div>
    </div>
  );
};

export default SingleArticle;

//add detail to topic, button to show comments and add form etc
