
import {
  ADD_NEW_PERSON,
  FETCH_PERSONS,
  CHANGE_ACTIVE_PERSON,
  DELETE_PERSON,
  EDIT_PERSON,
  CHANGE_EDIT,
  CHANGE_DELETE,
} from "./typeList";

const stateInit = {
  persons: {
    list: [],
    activePerson: null,
    isEdit: false,
    personDelete:false
  },
};

export const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case ADD_NEW_PERSON:
      return {
        ...state,
        persons: {
          ...state.persons,
          list: [...state.persons.list, action.payload],
        },
      };
    case CHANGE_ACTIVE_PERSON:
      return {
        ...state,
        persons: { ...state.persons, activePerson: action.payload },
      };
    case FETCH_PERSONS:
      return { ...state, persons: { ...state.persons, ...action.payload } };
    case DELETE_PERSON:
      const idxDelete = state.persons.list.findIndex(
        (p) => p.id === action.payload
      );
      if (idxDelete === -1) return state;
      const _arrDelete = [...state.persons.list];
      _arrDelete.splice(idxDelete, 1);
      return {
        ...state,
        persons: { ...state.persons, list: _arrDelete, activePerson: null },
      };
    case EDIT_PERSON:
      const idxEdit = state.persons.list.findIndex(
        (p) => p.id === action.payload.id
      );
      if (idxEdit === -1) return state;
      const _arrEdit = [...state.persons.list];
      _arrEdit.splice(idxEdit, 1, action.payload);
      return {
        ...state,
        persons: { ...state.persons, list: _arrEdit, isEdit: false },
      };
    case CHANGE_EDIT:
      return{
        ...state,persons:{...state.persons,isEdit:!state.persons.isEdit}
      }
      case CHANGE_DELETE:
      const deleteP=!state.persons.personDelete
      return{
        ...state,persons:{...state.persons,personDelete:deleteP}
      }
    default:
      return state;
  }
};
