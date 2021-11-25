import { useContext, React, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { postCommentOnArticle } from "../components/utils/api.js";

const PostComment = ({ postButtonStatus, article_id }) => {
  //useContext so we can get user access
  const { currentUser, setCurrentUser } = useContext(UserContext);
  //comment body state
  const [newCommentBody, setNewCommentBody] = useState("");

  //handle form submit

  const handleSubmit = (event) => {
    event.preventDefault();

    //comment to post in correct format
    const commentToPost = {
      author: currentUser.username,
      body: newCommentBody,
    };

    if (newCommentBody.length > 0) {
      postCommentOnArticle(article_id, commentToPost);
      setNewCommentBody("");
    } else {
      console.log("error - you cannot post a blank comment");
    }
  };
  //conditional rendering:
  if (postButtonStatus === "click here to post a comment...") {
    return null;
  } else {
    //if logged in

    if (currentUser.username === undefined) {
      return <p>error: you must be logged in to post a comment</p>;
    } else {
      return (
        <div className="postCommentsForm">
          <p>you are posting as {currentUser.username}</p>
          <h2> Post Comment Form </h2>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label for="postCommentBody">write your comment here:</label>
              <input
                type="text"
                name="postCommentBody"
                id="postCommentBody"
                value={newCommentBody}
                onChange={(event) => {
                  setNewCommentBody(event.target.value);
                }}
              ></input>
              <button>post comment</button>
            </fieldset>
          </form>
        </div>
      );
    }
  }
};

export default PostComment;
