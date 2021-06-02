import React, { useContext } from "react";
import { GlobalContext } from "../App";
import AddComment from "../Comments/AddComent";
import CommentCard from "../Comments/CommentCard";

const PersonalBlog = ({ personId }) => {
  const { posts, comments, getPersonById } = useContext(GlobalContext);

  const renderBlog = () => {
    const personalPost = posts.filter((item) => item.personId === personId);
    if (!personalPost.length) {
      return null;
    }
    return personalPost.map((post) => (
      <div key={post.id} className="card my-2">
        <div className="card-body">
          <h4
            className="card-title"
            //    onClick={openPost}
          >
            {post.title}
          </h4>
          <p className="card-text">{post.short}</p>
          <p className="card-text"></p>
          {renderComments(post.id)}
          <AddComment postId={post.id} />
        </div>
      </div>
    ));
  };

  const renderComments = (postId) => {
    const postComments = comments.filter((c) => c.postId === postId);
    if (!postComments.length) return false;
    return (
      <div className="container">
        {postComments.map((c) => (
          <div key={c.id} className="card my-2">
            <CommentCard
            dateTime={c.datetime}
              personId={c.personId}
              body={c.body}
              getPersonById={getPersonById}
            />
          </div>
        ))}
      </div>
    );
  };

  return <div className="my-2">{renderBlog()}</div>;
};
export default PersonalBlog;
