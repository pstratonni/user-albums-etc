import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
import { useParams } from "react-router-dom";
import PhotoCard from "../Photos/PhotoCard";
import Loading from "../Home/Loading";

const Album = () => {
  const { photos, getPersonById, getAlbumById } = useContext(GlobalContext);
  const { id } = useParams();
  const [album, setAlbum] = useState(getAlbumById(+id));
  const [person, setPerson] = useState(null);
  const [albumPhotos, setAlbumPhotos] = useState(
    photos.filter((item) => item.albumId === +id)
  );

  useEffect(() => {
    if (album.id) {
      setPerson(getPersonById(album.personId));
    }
  }, []);

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
  return renderAlbum()
};
export default Album;
