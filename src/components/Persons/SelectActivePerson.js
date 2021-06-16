import React, { useContext, useEffect } from "react";
import { connect, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

import {changeActivePersonId, getPerson} from '../../store/action/persons'

const SelectActivePerson = ({
  persons,
  activePerson,
  getPersonsObj,
  changeActivePerson,
}) => {
   const personProFile = useSelector(state=>{
     const idx=state.persons.list.findIndex(p=>p.id===activePerson)
     return state.persons.list[idx]
   })
  useEffect(() => {
    getPersonsObj();
  }, []);
  useEffect(() => {
     getPersonsObj();
   }, [persons.length]);

  const changeSelectValue = (event) => {
    changeActivePerson(+event.target.value);
    
  };

    const activPersonData = (name) => {
     
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
    getPersonsObj: () =>
      dispatch(getPerson()),
    changeActivePerson: (newId) =>
      dispatch(changeActivePersonId(newId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectActivePerson);
