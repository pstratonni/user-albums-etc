import React from "react";
import { connect } from "react-redux";
import PostCard from "./PostCard";


const Blog = ({ posts }) => {
  const renderBlog = () => {
    if (!posts.length) return <h3>No posts</h3>;
    return(
        <div className="row">
        {posts.map((post) => {
          
          return(<PostCard key={post.id} post={post}/>)
        })}
      </div>
    )
  };
  return(<div className='container'>{renderBlog()}</div>)
};
const mapStateToProps = (state) => {
  return {
    posts: state.posts.list,
  };
};
export default connect(mapStateToProps, null)(Blog);
