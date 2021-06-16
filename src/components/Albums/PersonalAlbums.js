import React from "react";
import AddPhoto from '../Photos/AddPhotos'
import PhotoCard from '../Photos/PhotoCard'
import {connect} from 'react-redux'

const PersonalAlbum = ({ personId, activePerson, albums,photos }) => {
 
  const renderAlbum = () => {
    const personalList = albums.filter((album) => album.personId === personId);
    return personalList.map((a) => (
      <div key={a.id} className='mb-3'>
        <h3>{a.title}</h3>
        <div className="row">{renderPhotosByAlbum(a.id)}</div>
        <div>
            
          {activePerson === personId ? (
            <AddPhoto albumId={a.id}  title={a.title}/>
          ) : null}
        </div>
      </div>
    ));
  };

  const renderPhotosByAlbum = (albumId) => {
    const albumPhotos = photos.filter((photo) => photo.albumId === albumId);
    return albumPhotos.map((photo) => {console.log(photo.id);
      return(
      <PhotoCard
        key={photo.id}
        photo={photo}
        personId={personId}
      />
    )});
  };
  return renderAlbum();
};
const mapStateToProps=state=>{
  return{
    activePerson:state.persons.activePerson,
    albums:state.albums.list,
    photos:state.photos.list,
  }
}

export default connect(mapStateToProps,null)(PersonalAlbum);
