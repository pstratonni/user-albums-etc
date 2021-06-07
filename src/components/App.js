import React, { useState } from "react";
import personInitial, {
  activePersonId,
  setActivePersonIdToStorage,
} from "../data/person";
import albumInitial, { setAlbumsToStorage } from "../data/album";
import photosInitial, { setPhotosToStorage } from "../data/photos";
import postsInitial, { setPostsToStorage } from "../data/posts";
import commentsInitial, { setCommentsToStorage } from "../data/comments";
import Navigation from "./Navigation";
import Pages from "../Layouts/Pages";
import sortPerson from "../function/sortArray";

export const GlobalContext = React.createContext();

const App = () => {
  const [persons, setPerson] = useState(personInitial);


  const addPerson = (person) => {
    const newPerson = [...persons, { ...person, id: Date.now() }];
    setPerson(sortPerson(newPerson));
  };

 

  const getPersonById = (id) => {
    setPerson(personInitial)
    const idx = persons.findIndex((person) => person.id === +id);
    if (idx === -1) return null;
    return persons[idx];
  };

  const editPerson = (person) => {
    const editPersons = [...persons];
    const idx = editPersons.findIndex((p) => p.id === person.id);
    if (idx === -1) return null;
    editPersons.splice(idx, 1, person);
    setPerson(sortPerson(editPersons));
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

  const [posts, setPosts] = useState(postsInitial);

  const addNewPost = (post) => {
    const newPosts = [
      ...posts,
      { ...post, id: Date.now(), datetime: Date.now() },
    ];
    setPosts(newPosts);
    setPostsToStorage(newPosts);
  };

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
        // addPerson,
        // persons,
        // changeActivePerson,
        // activePerson,
        getPersonById,
        editPerson,
        albums,
        addNewAlbum,
        photos,
        addNewPhoto,
        addLike,
        posts,
        addNewPost,
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
export default App;
