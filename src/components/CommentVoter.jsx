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
      </button>
    </div>
  );
};

export default CommentVoter;
