import React from 'react'
import { useSelector } from 'react-redux'

const PostCard=({post})=>{
    const comments=useSelector((state)=>{
        return state.comments.list.filter((comment) => comment.postId===post.id)
    })
    const person=useSelector(state=>{
        const idx=state.persons.list.findIndex(p=>p.id===post.personId)
        if(idx===-1)return {lName:"Deleted person",fName:" "}
        return state.persons.list[idx]
    })
    return(
        <div className='col-6 col-sm-4 col-md-3'>
            <div className='card cur-pointer' 
            // onClick={clickHandle}
            >
                <div className='card-body'>
                    <h3 className='card-title'>{post.title}</h3>
                    <h5 className='card-subtitle mb-2 text-muted'>{post.short}</h5>
                    <p className='card-text'>{person.lName} {person.fName[0].toUpperCase()}.</p>
                    <p className='card-text'>Comments: {comments.length}</p>
                </div>
            </div>
        </div>
    )
    }

export default PostCard