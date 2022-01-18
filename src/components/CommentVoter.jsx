import { useState } from "react";

//dev note - backend does not have a patch to the comments API yet, therefore these vote changes will disappear on refresh

const CommentVoter = ({ votes }) => {
  const [voteButtonStatus, setVoteButtonStatus] = useState("add vote");
  const [votesInc, setVotesInc] = useState(votes);

  return (
    <div className="commentVoter">
      <p className="commentVoterVotes">Votes: {votesInc}</p>
      <button
        onClick={() => {
          if (voteButtonStatus === "add vote") {
            setVoteButtonStatus("undo vote");
            setVotesInc(votesInc + 1);
          } else if (voteButtonStatus === "undo vote") {
            setVotesInc(votesInc - 1);
            setVoteButtonStatus("add vote");
          }
        }}
      >
        {voteButtonStatus}
        <img className="likeEmoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/thumbs-up_1f44d.png" alt=""></img>
      </button>
    </div>
  );
};

export default CommentVoter;
