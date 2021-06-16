import {
  ADD_NEW_COMMENT,
  CHANGE_EDIT_COMMENTS,
  FETCH_COMMENTS,
} from "../typeList";

export const CommentsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, ...action.payload };
    case ADD_NEW_COMMENT:
      return {
        ...state,
        list: [...state.list, action.payload],
        addComment: false,
      };
    case CHANGE_EDIT_COMMENTS:
      return { ...state, addComment: !state.addComment };
    default:
      return state;
  }
};
