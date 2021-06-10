import { FETCH_POSTS } from "../typeList";

export const PostsReduser = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state,...action.payload};

    default:
      return state;
  }
};
