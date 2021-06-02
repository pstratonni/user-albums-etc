const postArr=JSON.parse(localStorage.getItem('posts'))
export default postArr || []
export const setPostsToStorage= posts=>localStorage.setItem('posts',JSON.stringify(posts))