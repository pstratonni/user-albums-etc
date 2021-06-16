import {
  ADD_NEW_PERSON,
  FETCH_PERSONS,
  CHANGE_ACTIVE_PERSON,
  DELETE_PERSON,
  EDIT_PERSON,
  CHANGE_EDIT,
  CHANGE_DELETE,
  SET_PERSON_BY_ID,
} from "../typeList";

// const stateInit = {
//   persons: {
//     list: [],
//     activePerson: null,
//     isEdit: false,
//     personDelete: false,
//     personById:{}
//   },
// };

export const PersonsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_PERSON:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case CHANGE_ACTIVE_PERSON:
      return {
        ...state,
        activePerson: action.payload,
      };
    case FETCH_PERSONS:
      return { ...state, ...action.payload };
    case DELETE_PERSON:
      const idxDelete = state.list.findIndex((p) => p.id === action.payload);
      if (idxDelete === -1) return state;
      const _arrDelete = [...state.list];
      _arrDelete.splice(idxDelete, 1);
      return {
        ...state,
        list: _arrDelete,
        activePerson: null,
        personDelete: false,
      };
    case EDIT_PERSON:
      const idxEdit = state.list.findIndex((p) => p.id === action.payload.id);
      if (idxEdit === -1) return state;
      const _arrEdit = [...state.list];
      _arrEdit.splice(idxEdit, 1, action.payload);
      return {
        ...state,
        list: _arrEdit,
        isEdit: false,
      };
    case CHANGE_EDIT:
      return {
        ...state,
        isEdit: !state.isEdit,
      };

    case CHANGE_DELETE:
      return {
        ...state,
        personDelete: !state.persons.personDelete,
      };
    case SET_PERSON_BY_ID:
      const idxById = state.list.findIndex((p) => p.id === action.payload);
      if (idxById === -1) return { ...state, personById: {} };
      return {
        ...state,
        personById: state.list[idxById],
      };
    default:
      return state;
  }
};
