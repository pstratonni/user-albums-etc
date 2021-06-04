import { setPersonsToStorage } from "../data/person";
import {
  ADD_NEW_PERSON,
  FETCH_PERSONS,
  CHANGE_ACTIVE_PERSON,
} from "./typeList";

const stateInit = {
  persons: {
    list: [],
    activePerson: null,
  },
};

export const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case ADD_NEW_PERSON:
      const _arr = [
        ...state.persons.list,
        { ...action.payload, id: Date.now() },
      ];
      setPersonsToStorage(_arr);
      return {
        ...state,
        persons: {
          ...state.persons,
          list: _arr,
        },
      };
    case CHANGE_ACTIVE_PERSON:
      return{...state,persons:{...state.persons, activePerson:action.payload}}
      case FETCH_PERSONS:
        return{...state,persons:{...state.persons, ...action.payload}}
    default:
      return state;
  }
};
