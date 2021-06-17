import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, Fragment } from "react";
import { useForm } from "react-cool-form";
import { connect } from "react-redux";
import { addNewPhotos } from "../../store/action/photos";

import InputField from "../FormComponents/InputField";

const AddPhoto = ({ albumId, addNewPhoto, title }) => {
 
const [isEdit,setIsEdit]=useState(false)
  useEffect(() => {
    const div = isEdit ? document.querySelector(".mod") : null;
    if (div) {
      div.style.top = `${document.documentElement.scrollTop}px`;
    }
    const body = document.querySelector("body");
    body.style.overflow = isEdit ? "hidden" : "auto";
  }, [isEdit]);

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
    setIsEdit(false)
   
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
          <div className="off" onClick={()=>setIsEdit(false)}>
            <p><FontAwesomeIcon icon='times-circle' className="red"/></p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      {isEdit ? renderForm() : null}
      <div className="my-2">
        <button className="btn btn-info" onClick={()=>setIsEdit(true)}>
          Add Photo
        </button>
      </div>
    </Fragment>
  );
};



const mapDispatchToProps = (dispatch) => {
  return {
    addNewPhoto: (data) => dispatch(addNewPhotos(data)),
  };
};

export default connect(null, mapDispatchToProps)(AddPhoto);
