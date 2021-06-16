import React, { useEffect, useState } from "react";
import personInitial from "../data/person";
import albumInitial, { setAlbumsToStorage } from "../data/album";
import photosInitial, { setPhotosToStorage } from "../data/photos";
import postsInitial, { setPostsToStorage } from "../data/posts";
import commentsInitial, { setCommentsToStorage } from "../data/comments";
import Navigation from "./Navigation";
import Pages from "../Layouts/Pages";
import { connect } from "react-redux";
import { getPost } from "../store/action/posts";

export const GlobalContext = React.createContext();

const App = ({initPost}) => {

  useEffect(()=>{
    initPost()
  },[])

  const [persons, setPerson] = useState(personInitial);
 

  const getPersonById = (id) => {
    setPerson(personInitial)
    const idx = persons.findIndex((person) => person.id === +id);
    if (idx === -1) return null;
    return persons[idx];
  };

  const [albums, setAlbum] = useState(albumInitial);

  const addNewAlbum = (album) => {
    const newAlbum = [...albums, { ...album, id: Date.now() }];
    setAlbum(newAlbum);
    setAlbumsToStorage(newAlbum);
  };

  const getAlbumById = (id) => {
    const idx = albums.findIndex((album) => album.id === id);
    if (idx === -1) {
      return null;
    }
    return albums[idx];
  };

  const [photos, setPhotos] = useState(photosInitial);

  const addNewPhoto = (formData) => {
    const newPhotos = [
      ...photos,
      { ...formData, id: Date.now(), like: 0, dislike: 0 },
    ];
    setPhotos(newPhotos);
    setPhotosToStorage(newPhotos);
  };

  const addLike = (photoId, alpha) => {
    const arrLike = [...photos];
    const idx = arrLike.findIndex((p) => p.id === photoId);
    if (idx === -1) return null;
    arrLike[idx][alpha]++;
    setPhotos(arrLike);
    setPhotosToStorage(arrLike);
  };

  // const [posts, setPosts] = useState(postsInitial);

  // const addNewPost = (post) => {
  //   const newPosts = [
  //     ...posts,
  //     { ...post, id: Date.now(), datetime: Date.now() },
  //   ];
  //   setPosts(newPosts);
  //   setPostsToStorage(newPosts);
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
        getPersonById,
        albums,
        addNewAlbum,
        photos,
        addNewPhoto,
        addLike,
        comments,
        addNewComments,
        getAlbumById,
      }}
    >
      <Navigation />
      <Pages />
    </GlobalContext.Provider>
  );
};

const mapDispatchToProps=dispatch=>{
  return{
    initPost:()=>dispatch(getPost())
  }
}
export default connect(null,mapDispatchToProps) (App);
