import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddComent from "../Comments/AddComent";
import CommentCard from "../Comments/CommentCard";
import Loading from "../Home/Loading";

const Post = () => {
  const [commentsRead, setCommentsRead] = useState(false);

  const { id } = useParams();

  let idx;

  const post = useSelector((state) => {
    idx = state.posts.list.findIndex((p) => p.id === +id);
    if (idx === -1) return null;
    return state.posts.list[idx];
  });
  const person = useSelector((state) => {
    if (!post) return null;
    idx = state.persons.list.findIndex((p) => p.id === post.personId);
    if (idx === -1) return { fName: "Deleted person", lName: " " };
    return state.persons.list[idx];
  });

  const comments = useSelector((state) => {
    if (!post) return null;
    return state.comments.list.filter((c) => c.postId === post.id);
  });

  const renderComments = () => {
    if (!comments.length) return false;
    return (
      <div className="container">
        {comments.map((c) => (
          <div key={c.id} className="card my-2">
            <CommentCard
              dateTime={c.datetime}
              personId={c.personId}
              body={c.body}
            />
          </div>
        ))}
      </div>
    );
  };

  const turnChevron=()=>{
   const span=document.querySelector('#turn')
   span.classList.toggle('turn')
    setCommentsRead(!commentsRead)
  }

  const renderPost = () => {
    if (!post || !person) return <Loading />;
    return (
      <Fragment>
        <h4>{post.title}</h4>
        <p>{post.body}</p>

        <h4>
          <span>Comments: {comments.length}</span>
          <span
            className="mx-2 cur-pointer "
            onClick={turnChevron}
          >
            <FontAwesomeIcon icon="chevron-right" className="green" id='turn'/>
          </span>
        </h4>
        {commentsRead ? renderComments() : null}
        <AddComent postId={post.id} />
      </Fragment>
    );
  };
  return <div className="container">{renderPost()}</div>;
};
export default Post;
