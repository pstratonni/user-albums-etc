import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
import { useParams } from "react-router-dom";
import PhotoCard from "../Photos/PhotoCard";
import Loading from "../Home/Loading";
import { useSelector } from "react-redux";


const Album = () => {
  const { photos} = useContext(GlobalContext);
  const { id } = useParams();
  let idx;
  const album = useSelector((state) => {
    idx = state.albums.list.findIndex((a) => a.id === +id);
    if (idx === -1) return null;
    return state.albums.list[idx];
  });
  
    const person = useSelector((state) => {
      if(!album.id)return null
      idx = state.persons.list.findIndex((p) => p.id === album.personId);
      if (idx === -1) return null;
      return state.persons.list[idx];
    });
 
  const [albumPhotos, setAlbumPhotos] = useState(
    photos.filter((item) => item.albumId === +id)
  );
  

  const renderAlbum = () => {
    if (!album || !person) {
      return <Loading />;
    }
    return (
      <div className="container">
        <h1>{album.title}</h1>
        <h2>
          by {person.lName} {person.fName}
        </h2>
        <div className="row">
          {albumPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} personId={person.id} />
          ))}
        </div>
      </div>
    );
  };
  return renderAlbum();
};

export default (Album);
