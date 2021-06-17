import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LikeAction from "./LikeAction";
import DeletePhoto from "./DeletePhoto";

const PhotoCard = ({ photo, personId }) => {
  return (
    <div className="col-6 col-sm-4 col-md-3">
      <div className="card my-2">
        <img src={photo.src} alt={photo.title} />
        <div className="card-body">
          <p className="card-title">{photo.title}</p>
          <div className='dfjb'>
            <p className="card-text df">
              <LikeAction
                icons="thumbs-up"
                personId={personId}
                classGreenRed="mx-2 green"
                photoId={photo.id}
                alfa="like"
              />
              <span className="green">{photo.like}</span>
              <LikeAction
                icons="thumbs-down"
                personId={personId}
                classGreenRed="mx-2 red"
                photoId={photo.id}
                alfa="dislike"
              />
              <span className="red">{photo.dislike}</span>
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
