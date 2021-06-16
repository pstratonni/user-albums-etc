import commentsInitial, { setCommentsToStorage } from '../../data/comments'
import { ADD_NEW_COMMENT, FETCH_COMMENTS } from '../typeList'


export const getComments=()=>{
    return async dispatch=>{
        try {
            const comments= await getObj()
            await dispatch(fetchComments(comments))
        } catch (e) {
            console.log(e.message);
        }
    }
}

const getObj=()=>{
    return{
        list:[...commentsInitial]
    }
}

const fetchComments=(comments)=>{
    return{
        type:FETCH_COMMENTS,
        payload:comments
    }
}

export const addNewComment=(data)=>{
    return async dispatch=>{
        try {
            const comment=await crearteComment(data)
            await dispatch(addComment(comment))
        } catch (e) {
            console.log(e.message);
        }
    }
}
const crearteComment=(data)=>{
    const newComment={...data, id: Date.now(), datetime: Date.now() }
    const comments=commentsInitial
    comments.push(newComment)
    setCommentsToStorage(comments)
    return newComment
}

const addComment=comment=>{
    return{
        type:ADD_NEW_COMMENT,
        payload:comment
    }
}