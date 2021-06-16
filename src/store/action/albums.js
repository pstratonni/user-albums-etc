import albumInitial, { setAlbumsToStorage } from "../../data/album";
import { ADD_NEW_ALBUM, FETCH_ALBUMS, SET_ALBUM_BYID } from "../typeList";

export const getAlbums = () => {
  return async (dispatch) => {
    try {
      const albums = await getObj();
      await dispatch(fetchAlbums(albums));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const getObj = () => {
  return {
    list: [...albumInitial],
  };
};

const fetchAlbums = (albums) => {
  return {
    type: FETCH_ALBUMS,
    payload: albums,
  };
};

export const addNewAlbum = (data) => {
  return async (dispatch) => {
    try {
      const album = await createAlbum(data);
      await dispatch(addAlbum(album));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const createAlbum = (data) => {
  const albums = albumInitial;
  const newAlbum = { ...data, id: Date.now() };
  albums.push(newAlbum);
  setAlbumsToStorage(albums);
  return newAlbum;
};

const addAlbum = (album) => {
  return {
    type: ADD_NEW_ALBUM,
    payload: album,
  };
};


