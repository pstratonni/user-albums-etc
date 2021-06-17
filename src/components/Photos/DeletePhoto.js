import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { deletePhotos } from "../../store/action/photos";
import DelWind from "./DelWind";

const DeletePhoto = ({ personId, photoId, activePerson, deletePhoto }) => {
  const [delPhoto, setDelPhoto] = useState(false);

  useEffect(() => {
    const div = delPhoto ? document.querySelector(".mod") : null;
    if (div) {
      div.style.top = `${document.documentElement.scrollTop}px`;
    }
    const body = document.querySelector("body");
    body.style.overflow = delPhoto ? "hidden" : "auto";
    delPhoto ? posiStat() : posiFlex();
  }, [delPhoto]);

  const posiStat = () => {
    const divs = document.querySelectorAll(".card");
    for (let div of divs) {
      div.classList.add("position-static");
    }
  };

  const posiFlex = () => {
    const divs = document.querySelectorAll(".card");
    for (let div of divs) {
      div.classList.remove("position-static");
    }
  };

  const onClickDelete = (event) => {
    event.preventDefault();
    deletePhoto(photoId);
    setDelPhoto(false);
  };

  return (
    <Fragment>
      {delPhoto ? (
        <DelWind
          delPhoto={delPhoto}
          onClickDelete={onClickDelete}
          changeDelPhoto={setDelPhoto}
        />
      ) : null}
      <p className="card-text df">
        {personId === activePerson ? (
          <FontAwesomeIcon
            icon="trash"
            onClick={() => setDelPhoto(true)}
            className="pointer red"
          />
        ) : null}
      </p>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    activePerson: state.persons.activePerson,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    deletePhoto: (photoId) => dispatch(deletePhotos(photoId)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(DeletePhoto);
