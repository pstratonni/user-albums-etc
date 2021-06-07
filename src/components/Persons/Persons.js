import React from "react";
import Loading from "../Home/Loading";
import PersonCard from "./PersonCard";
import { connect } from "react-redux";

const Persons = ({ persons }) => {



 

  const renderPersons = () => {
    if (!persons.length) return <Loading>Add new Persons</Loading>;
    return persons.map((person) => (
      <PersonCard
        key={person.id}
        person={person}
      />
    ));
  };
  return (
    <section className="container">
      <div className="row">{renderPersons()}</div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    persons: state.persons.list,
  };
};
export default connect(mapStateToProps, null)(Persons);
