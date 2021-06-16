import React, { useEffect, useState } from "react";
// import personInitial from "../data/person";
// import albumInitial, { setAlbumsToStorage } from "../data/album";
import photosInitial, { setPhotosToStorage } from "../data/photos";
// import postsInitial, { setPostsToStorage } from "../data/posts";
import commentsInitial, { setCommentsToStorage } from "../data/comments";
import Navigation from "./Navigation";
import Pages from "../Layouts/Pages";
import { connect } from "react-redux";
import { getPost } from "../store/action/posts";
import { getAlbums } from "../store/action/albums";
import { getPhotos } from "../store/action/photos";

export const GlobalContext = React.createContext();

const App = ({initPost,initAlbum,initPhotos}) => {

  useEffect(()=>{
    initPost()
    initPhotos()
    initAlbum()
  },[])


  // const [photos, setPhotos] = useState(photosInitial);

  // const addNewPhoto = (formData) => {
  //   const newPhotos = [
  //     ...photos,
  //     { ...formData, id: Date.now(), like: 0, dislike: 0 },
  //   ];
  //   setPhotos(newPhotos);
  //   setPhotosToStorage(newPhotos);
  // };

  // const addLike = (photoId, alpha) => {
  //   const arrLike = [...photos];
  //   const idx = arrLike.findIndex((p) => p.id === photoId);
  //   if (idx === -1) return null;
  //   arrLike[idx][alpha]++;
  //   setPhotos(arrLike);
  //   setPhotosToStorage(arrLike);
  // };

  const [comments, setComments] = useState(commentsInitial);

  const addNewComments = (formData) => {
    const newComments = [
      ...comments,
      { ...formData, id: Date.now(), datetime: Date.now() },
    ];
    setComments(newComments);
    setCommentsToStorage(newComments);
  };

  return (
    <GlobalContext.Provider
      value={{
        // getPersonById,
        // photos,
        // addNewPhoto,
        // addLike,
        comments,
        addNewComments,
      }}
    >
      <Navigation />
      <Pages />
    </GlobalContext.Provider>
  );
};

const mapDispatchToProps=dispatch=>{
  return{
    initPost:()=>dispatch(getPost()),
    initAlbum:()=>dispatch(getAlbums()),
    initPhotos:()=>dispatch(getPhotos())
  }
}
export default connect(null,mapDispatchToProps) (App);
