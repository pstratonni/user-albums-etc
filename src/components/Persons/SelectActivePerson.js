import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { CHANGE_ACTIVE_PERSON, FETCH_PERSONS } from "../../store/typeList";
import { NavLink } from "react-router-dom";
import personInitial, {
  activePersonId,
  setActivePersonIdToStorage,
} from "../../data/person";
import { GlobalContext } from "../App";

const SelectActivePerson = ({
  persons,
  activePerson,
  getPersonsObj,
  changeActivePerson,
}) => {
  const {getPersonById}=useContext(GlobalContext)
  useEffect(() => {
    const obj = {
      list: personInitial,
      activePerson: +activePersonId,
    };
    getPersonsObj(obj);
  }, []);

  const changeSelectValue = (event) => {
    changeActivePerson(+event.target.value);
    setActivePersonIdToStorage(+event.target.value);
  };

    const activPersonData = (name) => {
      const personProFile = getPersonById(activePerson);
      return personProFile[name];
    };

  return persons.length ? (
    <div className="dflex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {activePerson ? (
            <NavLink exact={true} to={`/persons/${activePerson}`}>
              <img
                src={activPersonData("avatar")}
                alt={activPersonData("lName")}
                className="img-profile mx-1"
              />
              My Profile
            </NavLink>
          ) : null}
        </li>
      </ul>
      <form className="my-auto">
        <select
          onChange={changeSelectValue}
          defaultValue={activePerson || null}
          className=""
        >
          <option>Choose a person</option>
          {persons.map((person) => (
            <option key={person.id} value={person.id}>
              {person.fName} {person.lName}
            </option>
          ))}
        </select>
      </form>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    persons: state.persons.list,
    activePerson: state.persons.activePerson,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPersonsObj: (personsObject) =>
      dispatch({ type: FETCH_PERSONS, payload: personsObject }),
    changeActivePerson: (newId) =>
      dispatch({ type: CHANGE_ACTIVE_PERSON, payload: newId }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectActivePerson);
