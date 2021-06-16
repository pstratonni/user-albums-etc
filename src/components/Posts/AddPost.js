import React,{useState} from 'react'
import {connect} from 'react-redux'
import { addNewPost } from '../../store/action/posts';
import { CHANGE_EDIT_POST } from '../../store/typeList';

const AddPost=({onFinish,setAddPost,activePerson})=>{
    const[post,setPost]=useState({
        personId:activePerson,
        title:'',
        short:'',
        body:''
    })
    const changeFieldHandle=event=>{
        setPost({...post,[event.target.name]:event.target.value})
    }


    return (
        <form
          onSubmit={() => {
            onFinish(post);
          }}
        >
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={changeFieldHandle}
            />
          </div>
          <div className="form-group">
            <label>Short Text</label>
            <textarea
              className="form-control"
              name="short"
              onChange={changeFieldHandle}
            />
          </div>
          <div className="form-group">
            <label>Post text</label>
            <textarea
              className="form-control"
              name="body"
              onChange={changeFieldHandle}
            />
          </div>
          <button type="submit" className="btn btn-danger my-2">Add Post</button>
          <button className="btn btn-danger my-2 mx-2" onClick={()=>setAddPost()}>Close</button>
        </form>
      );
    };
    const mapStateToProps=state=>{
      return{
        activePerson:state.persons.activePerson
      }
    }
    const mapDispatchToProps=dispatch=>{
      return{
       onFinish:post=>dispatch(addNewPost(post)),
       setAddPost:()=>dispatch({type:CHANGE_EDIT_POST})
      }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(AddPost);
    