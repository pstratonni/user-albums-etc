import {
  ADD_LIKE,
  ADD_NEW_PHOTO,
  CHANGE_DELETE_PHOTO,
  CHANGE_EDIT_PHOTO,
  DELETE_PHOTO,
  FETCH_PHOTOS,
} from "../typeList";

export const PhotosReducer = (state = {}, action) => {
  let idx;
  let _arr;
  switch (action.type) {
    case FETCH_PHOTOS:
      return {
        ...state,
        ...action.payload,
      };
    case CHANGE_EDIT_PHOTO:
      return { ...state, addPhoto: !state.addPhoto };
    case ADD_NEW_PHOTO:
      return {
        ...state,
        list: [...state.list, action.payload],
        addPhoto: false,
      };
    case ADD_LIKE:
      idx = state.list.findIndex((photo) => photo.id === action.payload.id);
      if (idx === -1) return state;
      _arr = [...state.list];
      _arr.splice(idx, 1, action.payload);
      return {
        ...state,
        list: _arr,
      };
    case DELETE_PHOTO:

      idx = state.list.findIndex((photo) => photo.id === action.payload);
      console.log(idx);
      _arr = [...state.list];
      _arr.splice(idx, 1);
      return {
        ...state,
        list: _arr,
        delPhoto: false,
      };
    case CHANGE_DELETE_PHOTO:
      return { ...state, delPhoto: !state.delPhoto };
    default:
      return state;
  }
};
