import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Persons from "../components/Persons/Persons";
import AddNewPerson from "../components/Persons/AddNewPerson";
import PersonProfile from "../components/Persons/PersonProfile";
import Albums from "../components/Albums/Albums";
import Album from "../components/Albums/Album";

const Pages = () => {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Home />
      </Route>
      <Route exact={true} path="/persons">
        <Persons />
      </Route>
      <Route path="/persons/add">
        <AddNewPerson />
      </Route>
      <Route path="/persons/:id">
        <PersonProfile />
      </Route>
      <Route exact path="/albums">
        <Albums />
      </Route>
      <Route path="/albums/:id">
        <Album />
      </Route>
      <Route>
        
      </Route>
    </Switch>
  );
};
export default Pages;
