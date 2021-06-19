import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PersonCard = ({ person }) => {
  let history = useHistory();

  const clickHandle = (event) => {
    event.preventDefault();
    history.push(`/persons/${person.id}`);
  };

  return (
    <div className="col-6 col-sm-4 col-md-3">
      <div className="card my-2">
        <img
          src={person.avatar}
          className="card-img-top"
          alt="{person.fName} {person.lName}"
        />
        <div className="card-body">
          <h5 className="card-title">
            {person.fName} {person.lName}
          </h5>
          <a href="#" onClick={clickHandle} className="btn btn-primary">
            <FontAwesomeIcon icon="folder-open" className="mx-2" />
            Open profile
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activePersonId: state.persons.activePerson,
  };
};

export default connect(mapStateToProps, null)(PersonCard);
