import React, { useContext } from "react";
import { connect } from "react-redux";
import { GlobalContext } from "../App";
import AlbumCard from './AlbumCard'

const Albums = ({albums}) => {
  const { photos } = useContext(GlobalContext);

  const maxRating=(albumPhotos)=>{
  const arr=[...albumPhotos]
  arr.sort((a,b)=>{
      if(a.like-a.dislike-b.like+b.dislike>0) return 1
      else return -1
  })
  return arr[arr.length-1]
  }

  const renderAlbums = () => {
    if (!albums.length) {
      return <h1>No albums</h1>;
    }
    return (
      <div className="row">
        {albums.map((album) => {
          const albumPhotos = photos.filter((item) => item.albumId === album.id);
          if (!albumPhotos.length)return null
          const maxRatingPhoto=maxRating(albumPhotos)
          return(<AlbumCard key={album.id} album={album} photo={maxRatingPhoto}/>)
        })}
      </div>
    );
  };

  return(
      <div className='container'>{renderAlbums()}</div>
  )
};
const mapStateToProps=state=>{
  return{
    albums:state.albums.list
  }
}
export default connect(mapStateToProps,null) (Albums);
