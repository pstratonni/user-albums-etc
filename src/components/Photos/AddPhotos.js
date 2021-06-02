import React, { useState, useEffect, Fragment } from "react";

const AddPhoto = ({ albumId, addNewPhoto, title }) => {
  const [photo, setPhoto] = useState({
    albumId,
    title: "",
    src: "",
  });
  const [isEdit, setIsEdit] = useState(false);

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
    setIsEdit(true);
  };
  const changeHandle = (event) => {
    setPhoto({ ...photo, [event.target.name]: event.target.value });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    addNewPhoto(photo);
    setIsEdit(false);
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
          <div className="off" onClick={() => setIsEdit(false)}>
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
export default AddPhoto;
