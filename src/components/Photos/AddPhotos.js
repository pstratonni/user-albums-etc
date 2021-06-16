import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { addNewPhotos } from "../../store/action/photos";
import { CHANGE_EDIT_PHOTO } from "../../store/typeList";

const AddPhoto = ({ albumId, addNewPhoto, title,isEdit,setIsEdit }) => {
  const [photo, setPhoto] = useState({
    albumId,
    title: "",
    src: "",
  });

  useEffect(() => {
    const div = isEdit ? document.querySelector(".mod") : null;
    if (div) { 
      div.style.top = `${document.documentElement.scrollTop}px`;
    }
    const body = document.querySelector("body");
    body.style.overflow = isEdit ? "hidden" : "auto";
  }, [isEdit]);

  const isAddPhoto = (event) => {
    event.preventDefault();
    setIsEdit();
  };
  const changeHandle = (event) => {
    setPhoto({ ...photo, [event.target.name]: event.target.value });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    addNewPhoto(photo);
    setPhoto({
      albumId,
      title: "",
      src: "",
    });
  };
  const renderForm = () => {
    return (
      <div className="mod">
        <div className="mod-1 bg-light">
          <h4>{title}</h4>
          <form className=" mx-auto" onSubmit={submitHandle}>
            <div className="form-group mb-2">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={photo.title}
                onChange={changeHandle}
              />
            </div>
            <div className="form-group mb-2">
              <label>SRC</label>
              <input
                type="text"
                className="form-control"
                name="src"
                value={photo.src}
                onChange={changeHandle}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary w-100">
                Add
              </button>
            </div>
          </form>
          <div className="off" onClick={() => setIsEdit()}>
            <p>X</p>
          </div>
        </div>
      </div>
    );
  };
  return (<Fragment>{ isEdit ? (
    renderForm()
  ) : null}
    <div className="my-2">
      <button className="btn btn-info" onClick={isAddPhoto}>
        Add Photo
      </button>
    </div>
  </Fragment>)
  
};

const mapStateToProps=state=>{
  return{
    isEdit:state.photos.addPhoto,
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    setIsEdit:()=>dispatch({type:CHANGE_EDIT_PHOTO}),
    addNewPhoto:data=>dispatch(addNewPhotos(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (AddPhoto);
