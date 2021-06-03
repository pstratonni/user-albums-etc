import React, { useContext } from "react";
import { GlobalContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PhotoCard = ({ photo, personId }) => {
  const { activePerson, addLike } = useContext(GlobalContext);
  return (
    <div className="col-6 col-sm-4 col-md-3">
      <div className="card my-2">
        <img src={photo.src} alt={photo.title} />
        <div className="card-body">
          <p className="card-title">{photo.title}</p>
          <p className="card-text df">
            <FontAwesomeIcon
              icon="thumbs-up"
              className={`mx-2 green ${
                activePerson !== personId && activePerson ? " pointer" : ""
              }`}
              onClick={
                activePerson !== personId && activePerson
                  ? () => addLike(photo.id, "like")
                  : null
              }
            />
            <span className="green">{photo.like}</span>
            <FontAwesomeIcon
              icon="thumbs-down"
              className={`mx-2 red ${
                activePerson !== personId && activePerson ? " pointer" : ""
              }`}
              onClick={
                activePerson !== personId && activePerson
                  ? () => addLike(photo.id, "dislike")
                  : null
              }
            />
            <span className="red">{photo.dislike}</span>
            <FontAwesomeIcon
              icon={photo.like - photo.dislike < 0 ? "heart-broken" : "heart"}
              className="red mx-2"
            />
            <span className={photo.like - photo.dislike < 0 ? "red" : "green"}>
              {photo.like - photo.dislike}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default PhotoCard;
