import postInitial, { setPostsToStorage } from "../../data/posts";
import { FETCH_POSTS } from "../typeList";

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
