import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { addLikes } from "../../store/action/photos";
import Like from "./Like";

const SelectPersonLike = ({ activePerson, personId, addLike, photo }) => {
  const [isLike, setIsLike] = useState(true);
  const [isDislike, setIsDislike] = useState(true);
  const [alfa, setAlfa] = useState(false);
  const [betta, setBetta] = useState(false);
  const [flag, setFlag] = useState(0);

  let idx;

  const renderCursor = () => {
    setAlfa(false)
    if (personId !== activePerson) {
      idx = photo.likePerson.findIndex((ph) => ph.personId === activePerson);
      console.log(idx);
      if (idx === -1) {
        console.log(0);
        setFlag(0);
        setIsLike(true);
        setIsDislike(true);
        return;
      }
      if (idx !== -1) {
        if(!alfa&&photo.likePerson[idx].flag === 0){setIsDislike(true); setIsLike(true);}
        if ((alfa === "like" || !alfa) && photo.likePerson[idx].flag === 1) {
          console.log('++1',photo.likePerson[idx].personId);
          setIsLike(false);
          setIsDislike(true);
          setFlag(photo.likePerson[idx].flag);
          return;
        }
        if (alfa === "like" && photo.likePerson[idx].flag !== 1) {
          console.log("+1");
          setIsLike(true);
          setIsDislike(true);
          setFlag(photo.likePerson[idx].flag);
          return;
        }
        if (
          (alfa === "dislike" || !alfa) &&
          photo.likePerson[idx].flag === -1
        ) {
            console.log("--1");
          setIsDislike(false);
          setIsLike(true);
          setFlag(photo.likePerson[idx].flag);
          return;
        }
        if (alfa === "dislike" && photo.likePerson[idx].flag !== -1) {
            console.log('-1', alfa);
          setIsDislike(true);
          setIsLike(true);
          setFlag(photo.likePerson[idx].flag);
          return;
        }
      }
    }
  };

  useEffect(() => {
    renderCursor();
  }, []);

  useEffect(() => {
    renderCursor();
  }, [activePerson, betta]);

  const renderIcon = () => {
    return (
      <Fragment>
        {activePerson !== personId && activePerson && isLike ? (
          <Like
            icons="thumbs-up"
            classGreenRed="mx-2 green"
            addLike={addLike}
            photoId={photo.id}
            alfa="like"
            activePerson={activePerson}
            setAlfa={setAlfa}
            setBetta={setBetta}
            betta={betta}
          />
        ) : flag === 1 || personId === activePerson ? (
          <FontAwesomeIcon icon="thumbs-up" className="mx-2 l-green" />
        ) : (
          <FontAwesomeIcon icon="thumbs-up" className="mx-2 green" />
        )}
        <span className="green">{photo.like}</span>
        {activePerson !== personId && activePerson && isDislike ? (
          <Like
            icons="thumbs-down"
            classGreenRed="mx-2 red"
            addLike={addLike}
            photoId={photo.id}
            alfa="dislike"
            activePerson={activePerson}
            setAlfa={setAlfa}
            setBetta={setBetta}
            betta={betta}
          />
        ) : flag === -1 || personId === activePerson ? (
          <FontAwesomeIcon icon="thumbs-down" className="mx-2 l-red" />
        ) : (
          <FontAwesomeIcon icon="thumbs-down" className="mx-2 red" />
        )}
        <span className="red">{photo.dislike}</span>
      </Fragment>
    );
  };
  return renderIcon();
};

const mapStateToProps = (state) => {
  return {
    activePerson: state.persons.activePerson,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLike: (photoId, alfa, activePerson) =>
      dispatch(addLikes(photoId, alfa, activePerson)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPersonLike);
