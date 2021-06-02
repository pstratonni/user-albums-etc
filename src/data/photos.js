const photosArray = JSON.parse(localStorage.getItem("photos"));
export default photosArray || [];
export const setPhotosToStorage = (photos) =>
  localStorage.setItem("photos", JSON.stringify(photos));
