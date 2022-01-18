import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleArticle, patchArticleVote } from "./utils/api.js";
import Comments from "./Comments.jsx";

const SingleArticle = () => {
  const [articleState, setArticleState] = useState([]);
  const [votesInc, setVotesInc] = useState(0);
  const [buttonStatus, setButtonStatus] = useState("add vote");
  const [commentButtonStatus, setCommentButtonStatus] = useState(
    "click to see all comments"
  );
  // const [postButtonStatus, setPostButtonStatus] = useState(
  //   "click here to post a comment..."
  // );

  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((articleFromApi) => {
      setArticleState(articleFromApi);
    });
  }, [articleState, article_id]); //should article_id be in here?

  return (
    <div className="articleContainer">
      <h2 className="navTitle">
        {" "}
        articles/{articleState.topic}/{articleState.title}{" "}
      </h2>
      <div id="articleInFull" className="articleInFull">
        <h3 id="articleHeader" className="articleHeader">
          {articleState.title}
        </h3>
        <p className="lineBreak2"></p>
        <p id="articleBody" className="articleBody">
          {articleState.body}
        </p>
        <p className="lineBreak3"></p>
        <ul id="articleAuthorBox" className="articleAuthorBox">
          <p>posted at: {articleState.created_at} </p>
          <p>by author: {articleState.author}</p>

          {/* <p>
            posted at:{" "}
            {articleState.created_at.slice(11, -8) +
              ",   " +
              articleState.created_at.slice(0, 10)}{" "}
          </p> */}
        </ul>
        <ul className="articleVotingBox">
          <p>votes: {articleState.votes + votesInc}</p>
          <button
            onClick={() => {
              if (buttonStatus === "add vote") {
                patchArticleVote(article_id, 1);
                setVotesInc(votesInc);
                setButtonStatus("undo vote");
              } else if (buttonStatus === "undo vote") {
                setVotesInc(votesInc);
                patchArticleVote(article_id, -1);
                setButtonStatus("add vote");
              }
            }}
          >
            {buttonStatus}
            <img
              className="likeEmoji"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/thumbs-up_1f44d.png"
              alt=""
            ></img>
          </button>
        </ul>
        <p className="lineBreak4"></p>

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
      </div>
    </div>
  );
};

export default SingleArticle;
