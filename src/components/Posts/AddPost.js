import React,{useState,useContext} from 'react'
import {connect} from 'react-redux'

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
          <button className="btn btn-danger my-2 mx-2" onClick={()=>setAddPost(false)}>Clouse</button>
        </form>
      );
    };
    const mapStateToProps=state=>{
      return{
        activePerson:state.persons.activePerson
      }
    }
    export default connect(mapStateToProps,null)(AddPost);
    