import React from "react";
import Button from "../button/button";

export default function Grid({
  isHidden,
  voteText,
  votesCount,
  title,
  tagline,
  voteUnvote,
  hide
}: any) {
  return (
    <>
      {!isHidden && (
        <div className="listing">
          <Button onClick={voteUnvote}>{voteText}</Button>
          <div>
            <div className="first-row">
              <div>{title}</div>
              <Button onClick={hide}>Hide</Button>
            </div>
            <div className="first-row">
              <div>{tagline}</div>
              <div> Votes:{votesCount}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
