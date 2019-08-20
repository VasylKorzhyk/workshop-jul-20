import React from "react";
import styles from "./styles.css";

function Comment({ comment }) {
  return (
    <div className={styles.comment}>
      <p className={styles.header}>{comment.user}</p>
      <span className={styles.body}>{comment.text}</span>
    </div>
  );
}

export default Comment;
