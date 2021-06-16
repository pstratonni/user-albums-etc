import { ADD_LIKE, ADD_NEW_PHOTO, CHANGE_EDIT_PHOTO, FETCH_PHOTOS } from "../typeList";

export const PhotosReducer = (state = {}, action) => {
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
          const idx=state.list.findIndex(photo=>photo.id===action.payload.id)
          if (idx===-1)return state
          const _arr=[...state.list]
          _arr.splice(idx,1,action.payload)
          return{
              ...state,list:_arr
          }
    default:
      return state;
  }
};
