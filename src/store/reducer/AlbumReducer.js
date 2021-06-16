import {
  ADD_NEW_ALBUM,
  CHANGE_EDIT_ALBUM,
  FETCH_ALBUMS,
} from "../typeList";

export const AlbumReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return { ...state, ...action.payload };
    case ADD_NEW_ALBUM:
      return {
        ...state,
        list: [...state.list, action.payload],
        addAlbum: false,
      };
    case CHANGE_EDIT_ALBUM:
      return { ...state, addAlbum: !state.addAlbum };
    default:
      return state;
  }
};
