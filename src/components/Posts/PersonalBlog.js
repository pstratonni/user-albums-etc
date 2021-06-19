import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PostHover from "./PostHover";

const PersonalBlog = ({ personId, posts, comments }) => {
  let history = useHistory();

  const openPost = (event, postId) => {
    event.preventDefault();
    history.push(`/posts/${postId}`);
  };

  const quantityComments = (postId) => {
    const postComments = comments.filter((c) => c.postId === postId);
    return postComments;
  };

  const renderBlog = () => {
    const personalPost = posts.filter((item) => item.personId === personId);
    if (!personalPost.length) {
      return null;
    }
    return (
      <div className="row">
        <h4 className="my-3">Posts</h4>
        {personalPost.map((post) => (
          <div className="col-6 col-sm-4 col-md-3 " key={post.id}>
            <PostHover post={post} quantityComments={quantityComments} openPost={openPost}/>
          </div>
        ))}
      </div>
    );
  };

  return <div className="my-2">{renderBlog()}</div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.list,
    comments: state.comments.list,
  };
};
export default connect(mapStateToProps, null)(PersonalBlog);
