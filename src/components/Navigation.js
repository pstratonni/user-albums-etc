import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import person from "../data/person";
import { GlobalContext } from "./App";

const Navigation = () => {
  const { persons, activePerson, changeActivePerson, getPersonById } =
    useContext(GlobalContext);

  const changeSelectValue = (event) => {
    changeActivePerson(+event.target.value);
  };

  const activPersonData = (name) => {
    const person = getPersonById(activePerson);
    return person[name];
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary mb-3">
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink exact={true} to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact={true} to="/persons">
              All Persons
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/persons/add">Add Person</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/albums">Albums</NavLink>
          </li>
        </ul>
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
      </div>
    </nav>
  );
};
export default Navigation;
