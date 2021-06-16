import { ADD_NEW_POST, CHANGE_EDIT_POST, FETCH_POSTS } from "../typeList";

export const PostsReduser = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, ...action.payload };
    case CHANGE_EDIT_POST:
      return { ...state, addPost: !state.addPost };
    case ADD_NEW_POST:
      return {
        ...state,
        list: [...state.list, action.payload],
        addPost: false,
      };
    default:
      return state;
  }
};
