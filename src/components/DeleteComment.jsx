import { useContext, React, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { deleteCommentFromArticle } from "./utils/api.js";

const DeleteComment = ({ commentUsername, comment_id }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [deleteButtonStatus, setDeleteButtonStatus] =
    useState("delete comment");

  const [confirmStatus, setConfirmStatus] = useState("");

  const handleConfirmedDelete = () => {
    //confirmation message - where
    //delete request
    //re-render
    //do we need to reset delete ButtonStatus etc
    deleteCommentFromArticle(comment_id);
    setDeleteButtonStatus("delete comment");
    return null;
  };
  const handleCancelDelete = () => {
    //go back to original state
    setDeleteButtonStatus("delete comment");
    setConfirmStatus("");
    return null;
  };

  const handleClick = () => {
    if (deleteButtonStatus === "delete comment") {
      setDeleteButtonStatus("");
      setConfirmStatus(
        <div>
          <p>are you sure you want to delete this comment?</p>
          <button
            onClick={() => {
              handleConfirmedDelete();
            }}
          >
            yes
          </button>
          <button
            onClick={() => {
              handleCancelDelete();
            }}
          >
            no
          </button>
        </div>
      );
    } else if (
      deleteButtonStatus === "are you sure you want to delete this comment?"
    ) {
    }

    return null;
  };

  if (currentUser.username === commentUsername) {
    if (deleteButtonStatus !== "") {
      return (
        <div>
          <button
            onClick={() => {
              handleClick();
            }}
          >
            {deleteButtonStatus}
          </button>

          <div>{confirmStatus}</div>
        </div>
      );
    } else {
      return <div>{confirmStatus}</div>;
    }
  } else {
    return null;
  }
};

export default DeleteComment;
