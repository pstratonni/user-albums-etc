import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { addLikes } from "../../store/action/photos";

const LikeAction = ({
  icons,
  activePerson,
  personId,
  addLike,
  classGreenRed,
  alfa,
  photoId,
}) => {
  return (
    <FontAwesomeIcon
      icon={icons}
      className={`${classGreenRed} ${
        activePerson !== personId && activePerson ? " pointer" : ""
      }`}
      onClick={
        activePerson !== personId && activePerson
          ? () => addLike(photoId, alfa)
          : null
      }
    />
  );
};
const mapStateToProps = (state) => {
  return {
    activePerson: state.persons.activePerson,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { addLike: (photoId, alfa) => dispatch(addLikes(photoId, alfa)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(LikeAction);
