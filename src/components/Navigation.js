import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import SelectActivePerson from "./Persons/SelectActivePerson";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary mb-3">
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink exact={true} to="/">
            <h4><FontAwesomeIcon
        icon="laptop-house"        
      /></h4>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact={true} to="/persons">
              <FontAwesomeIcon icon="users" className="mx-2" />
              All Persons
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/persons/add">
              <FontAwesomeIcon icon="user-plus" className="mx-2" />
              Add Person
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/albums"><FontAwesomeIcon
        icon="images"
        className="mx-2"        
      />Albums</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts">
              <FontAwesomeIcon icon="blog" className="mx-2" />
              Blog
            </NavLink>
          </li>
        </ul>
        <SelectActivePerson />
      </div>
    </nav>
  );
};

export default Navigation;
