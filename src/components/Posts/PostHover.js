import React from "react";
import { useState } from "react";

const PostHover = ({ post, openPost, quantityComments }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`card my-2 cur-pointer ${
        active ? "bg-secondary" : "bg-light "
      }`}
      onClick={(event) => openPost(event, post.id)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="card-body">
        <h4 className="card-title">{post.title}</h4>
        <p className="card-text">{post.short}</p>
        <p className="card-text">
          Comments: {quantityComments(post.id).length}
        </p>
      </div>
    </div>
  );
};
export default PostHover;
