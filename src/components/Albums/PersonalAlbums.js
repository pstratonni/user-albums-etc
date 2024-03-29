import React, { useContext,  } from "react";
import { GlobalContext } from "../App";
import AddPhoto from '../Photos/AddPhotos'
import PhotoCard from '../Photos/PhotoCard'

const PersonalAlbum = ({ personId }) => {
  const { albums, photos, addNewPhoto, activePerson } =
    useContext(GlobalContext);

  const renderAlbum = () => {
    const personalList = albums.filter((album) => album.personId === personId);
    return personalList.map((a) => (
      <div key={a.id} className='mb-3'>
        <h3>{a.title}</h3>
        <div className="row">{renderPhotosByAlbum(a.id)}</div>
        <div>
            
          {activePerson === personId ? (
            <AddPhoto albumId={a.id} addNewPhoto={addNewPhoto} title={a.title}/>
          ) : null}
        </div>
      </div>
    ));
  };

  const renderPhotosByAlbum = (albumId) => {
    const albumPhotos = photos.filter((photo) => photo.albumId === albumId);
    return albumPhotos.map((photo) => (
      <PhotoCard
        key={photo.id}
        photo={photo}
        personId={personId}
      />
    ));
  };
  return renderAlbum();
};
export default PersonalAlbum;
