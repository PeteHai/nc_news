const Comments = ({ commentButtonStatus }) => {
  if (commentButtonStatus === "click to see all comments") {
    return null;
  } else {
    return <div>hello</div>;
  }
};

export default Comments;
