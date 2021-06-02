const albumArr=JSON.parse(localStorage.getItem('albums'))
export default albumArr || []
export const setAlbumsToStorage= albums=>localStorage.setItem('albums',JSON.stringify(albums))