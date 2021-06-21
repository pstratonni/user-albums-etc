import photosInitial, { setPhotosToStorage } from "../../data/photos";
import {
  ADD_LIKE,
  ADD_NEW_PHOTO,
  DELETE_PHOTO,
  FETCH_PHOTOS,
} from "../typeList";

export const getPhotos = () => {
  return async (dispatch) => {
    try {
      const photos = await getObj();
      await dispatch(fetchPhotos(photos));
    } catch (error) {
      console.log(error.message);
    }
  };
};

const getObj = () => {
  return {
    list: [...photosInitial],
  };
};

const fetchPhotos = (photos) => {
  return {
    type: FETCH_PHOTOS,
    payload: photos,
  };
};

export const addNewPhotos = (data) => {
  return async (dispatch) => {
    try {
      const photo = await createPhoto(data);
      await dispatch(addPhoto(photo));
    } catch (error) {
      console.log(error.message);
    }
  };
};

const createPhoto = (data) => {
  const newPhoto = {
    ...data,
    id: Date.now(),
    like: 0,
    dislike: 0,
    likePerson: [],
  };
  const photos = photosInitial;
  photos.push(newPhoto);
  setPhotosToStorage(photos);
  return newPhoto;
};

const addPhoto = (photo) => {
  return {
    type: ADD_NEW_PHOTO,
    payload: photo,
  };
};

export const addLikes = (photoId, alfa, personId) => {
  return async (dispatch) => {
    try {
      const photoIsLike = await addLikeDislike(photoId, alfa, personId);

      await dispatch(setLikeToState(photoIsLike));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const addLikeDislike = (id, alfa, personId) => {
  const photos = [...photosInitial];
  const idx = photos.findIndex((ph) => ph.id === id);
  if (idx === -1) return null;
  const idxLD = photos[idx].likePerson.findIndex(
    (ph) => ph.personId === personId
  );
  if (idxLD === -1) {
    photos[idx][alfa]++;
    photos[idx].likePerson.push({
      personId: personId,
      flag: (alfa === "like" ? 1 : -1),
    });
    setPhotosToStorage(photos);
    return photos[idx];
  }
  if (alfa === "dislike") {
    if (photos[idx].likePerson[idxLD].flag === 0) {
      photos[idx].dislike++;
      photos[idx].likePerson[idxLD].flag--;
      setPhotosToStorage(photos);
      return photos[idx];
    } else {
      photos[idx].likePerson[idxLD].flag--;
      photos[idx].like--;
      setPhotosToStorage(photos);
      return photos[idx];
    }
  }
  if (alfa === "like") {
    if (photos[idx].likePerson[idxLD].flag === 0) {
      photos[idx].like++;
      photos[idx].likePerson[idxLD].flag++;
      setPhotosToStorage(photos);
      return photos[idx];
    } else {
      photos[idx].dislike--;
      photos[idx].likePerson[idxLD].flag++;
      setPhotosToStorage(photos);
      return photos[idx];
    }
  }
};

const setLikeToState = (photo) => {
  return {
    type: ADD_LIKE,
    payload: photo,
  };
};

export const deletePhotos = (photoId) => {
  return async (dispatch) => {
    await deletePhotoFromStorage(photoId);
    await dispatch(delPhoto(photoId));
  };
};
const deletePhotoFromStorage = (photoId) => {
  const photos = [...photosInitial];
  const idx = photos.findIndex((ph) => ph.id === photoId);
  console.log(idx);
  if (idx === -1) return null;
  photos.splice(idx, 1);
  setPhotosToStorage(photos);
};

const delPhoto = (photoId) => {
  return {
    type: DELETE_PHOTO,
    payload: photoId,
  };
};
