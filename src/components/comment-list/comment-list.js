import React, { useState } from "react";
import Comment from "../comment";
import toggleOpen from "./../../decorators/toggle-open";

function CommentList({ comments, isOpen, toggleOpenState }) {
  return (
    <div>
      {isOpen &&
        comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      <button onClick={toggleOpenState()}>
        {isOpen ? "hide" : "show"} comments
      </button>
    </div>
  );
}

export default toggleOpen(CommentList);
