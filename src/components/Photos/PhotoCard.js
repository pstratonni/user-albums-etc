import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeletePhoto from "./DeletePhoto";
import LikeAction from "./LikeAction";

const PhotoCard = ({ photo, personId }) => {
  return (
    <div className="col-6 col-sm-4 col-md-3">
      <div className="card my-2">
        <img src={photo.src} alt={photo.title} />
        <div className="card-body">
          <p className="card-title">{photo.title}</p>
          <div className="dfjb">
            <p className="card-text df">
              <LikeAction
                personId={personId}
                photo={photo}
              />
              <FontAwesomeIcon
                icon={photo.like - photo.dislike < 0 ? "heart-broken" : "heart"}
                className="red mx-2"
              />
              <span
                className={photo.like - photo.dislike < 0 ? "red" : "green"}
              >
                {photo.like - photo.dislike}
              </span>
            </p>
            <DeletePhoto personId={personId} photoId={photo.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
