import React, { useState, useEffect, Fragment } from "react";
import { useForm } from "react-cool-form";
import { connect } from "react-redux";
import { addNewPhotos } from "../../store/action/photos";
import { CHANGE_EDIT_PHOTO } from "../../store/typeList";
import InputField from "../FormComponents/InputField";

const AddPhoto = ({ albumId, addNewPhoto, title, isEdit, setIsEdit }) => {
 

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

  const { form, use } = useForm({
    defaultValues: {
      albumId,
      title: "",
      src: "",
    },
    onSubmit:(values)=>submitHandle(values)
  });
  const errors = use("errors", { errorWithTouched: true });
  

  const submitHandle = (photo) => {
    addNewPhoto(photo);
   
  };
  const renderForm = () => {
    return (
      <div className="mod">
        <div className="mod-1 bg-light">
          <h4>{title}</h4>
          <form className=" mx-auto" ref={form} noValidate>
            <InputField type='text' id='photo_title' name='title' label='Title' required error={errors.title}/>
            <InputField type='text' id='photo_src' name='src' label='SRC' required error={errors.src}/>
            <div className="form-group">
              <button type="submit" className="btn btn-primary w-100">
                Add
              </button>
            </div>
          </form>
          <div className="off" onClick={isAddPhoto}>
            <p>X</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      {isEdit ? renderForm() : null}
      <div className="my-2">
        <button className="btn btn-info" onClick={isAddPhoto}>
          Add Photo
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isEdit: state.photos.addPhoto,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsEdit: () => dispatch({ type: CHANGE_EDIT_PHOTO }),
    addNewPhoto: (data) => dispatch(addNewPhotos(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);
