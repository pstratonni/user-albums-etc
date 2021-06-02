const commentArr=JSON.parse(localStorage.getItem('comments'))
export default commentArr || []
export const setCommentsToStorage= comments=>localStorage.setItem('comments',JSON.stringify(comments))