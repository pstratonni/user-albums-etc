import {
  ADD_NEW_PERSON,
  CHANGE_ACTIVE_PERSON,
  DELETE_PERSON,
  FETCH_PERSONS,
  EDIT_PERSON,
} from "../typeList";
import personsInitial, {
  activePersonId,
  setActivePersonIdToStorage,
  setPersonsToStorage,
} from "../../data/person";
import sortPerson from "../../function/sortArray";

export const changeActivePersonId = (personId) => {
  return (dispatch) => {
    try {
      setActivePersonIdToStorage(personId);
      dispatch(setActivePerson(personId));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const setActivePerson = (id) => {
  return {
    type: CHANGE_ACTIVE_PERSON,
    payload: id,
  };
};

export const getPerson = () => {
  return (dispatch) => {
    try {
      const obj = getObj();
      dispatch(fetchPersons(obj));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const fetchPersons = (obj) => {
  return {
    type: FETCH_PERSONS,
    payload: obj,
  };
};

export const addNewPerson = (data) => {
  return async (dispatch) => {
    try {
      const person = await createPerson(data);
      await dispatch(addPerson(person));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const addPerson = (person) => {
  return {
    type: ADD_NEW_PERSON,
    payload: person,
  };
};

export const deletePerson = (personId) => {
  return async (dispatch) => {
    try {
      await deleteFromServer(personId);
      await dispatch(deleteFromState(personId));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const deleteFromState = (personId) => {
  return {
    type: DELETE_PERSON,
    payload: personId,
  };
};

export const editPerson = (data) => {
  return async (dispatch) => {
    try {
      await editPersonToServer(data);
      await dispatch(editPersonToState(data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const editPersonToState = (data) => {
  return {
    type: EDIT_PERSON,
    payload: data,
  };
};

export const getPersonById=personId=>{
    return {
        
    }
}

// Server emulation
const getObj = () => {
  return {
    list: [...personsInitial],
    activePerson: +activePersonId,
  };
};

const createPerson = (data) => {
  const newPerson = {
    ...data,
    id: Date.now(),
  };
  const persons = personsInitial;
  persons.push(newPerson);
  sortPerson(persons);
  setPersonsToStorage(persons);
  return newPerson;
};

const deleteFromServer = (personId) => {
  const idx = personsInitial.findIndex((p) => p.id === personId);
  if (idx === -1) return null;
  personsInitial.splice(idx, 1);
  setPersonsToStorage(personsInitial);
  setActivePersonIdToStorage(null);
};

const editPersonToServer = (data) => {
  const idx = personsInitial.findIndex((p) => p.id === data.id);
  if (idx === -1) return null;
  personsInitial.splice(idx, 1, data);
  sortPerson(personsInitial);
  setPersonsToStorage(personsInitial);
};
