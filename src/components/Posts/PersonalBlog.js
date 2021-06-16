import React from "react";
import AddComment from "../Comments/AddComent";
import CommentCard from "../Comments/CommentCard";
import {connect} from 'react-redux'

const PersonalBlog = ({ personId,posts,comments }) => {

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
            />
          </div>
        ))}
      </div>
    );
  };

  return <div className="my-2">{renderBlog()}</div>;
};

const mapStateToProps=state=>{
  return{
    posts:state.posts.list,
    comments:state.comments.list
  }
}
export default connect(mapStateToProps,null) (PersonalBlog);
