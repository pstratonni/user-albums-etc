import postInitial, { setPostsToStorage } from "../../data/posts";
import { ADD_NEW_POST, FETCH_POSTS } from "../typeList";

export const getPost = () => {
  return async (dispatch) => {
    try {
      const obj = await getObj();
      dispatch(fetchPosts(obj));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const getObj = () => {
  return {
    list: [...postInitial],
  };
};

const fetchPosts = (obj) => {
  return {
    type: FETCH_POSTS,
    payload: obj,
  };
};

export const addNewPost = (data) => {
  return async (dispatch) => {
    try {
      const post = await createPost(data);
      await dispatch(addPost(post));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const createPost = (data) => {
  const posts = postInitial;
  const newPost = { ...data, id: Date.now(), datetime: Date.now() };
  posts.push(newPost);
  setPostsToStorage(posts);
  return newPost;
};

const addPost = (post) => {
  return { type: ADD_NEW_POST, payload: post };
};
