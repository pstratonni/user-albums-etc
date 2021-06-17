import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const PersonalBlog = ({ personId, posts, comments }) => {
  let history = useHistory();

  const openPost = (event, postId) => {
    event.preventDefault();
    history.push(`/posts/${postId}`);
  };

  const quantityComments = (postId) => {
    const postComments= comments.filter((c) => c.postId === postId);
    return postComments
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
          <div className="col-6 col-sm-4 col-md-3" key={post.id}>
            <div className="card my-2">
              <div className="card-body">
                <h4
                  className="card-title cur-pointer"
                  onClick={(event) => openPost(event, post.id)}
                >
                  {post.title}
                </h4>
                <p className="card-text">{post.short}</p>
                <p className="card-text">
                  Comments: {quantityComments(post.id).length}
                </p>
              </div>
            </div>
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
